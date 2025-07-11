package main

import (
    "reflect"
    "encoding/json"
    "fmt"
    "net/http"

    "github.com/google/cel-go/cel"
    "github.com/google/cel-go/checker/decls"
)

type EvalRequest struct {
    Expression string                 `json:"expression"`
    Variables  map[string]interface{} `json:"variables"`
}

type EvalResponse struct {
    Result interface{} `json:"result,omitempty"`
    Error  string      `json:"error,omitempty"`
}

func main() {
    http.HandleFunc("/sample", func(w http.ResponseWriter, r *http.Request) {
        var req map[string]any
        if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
            http.Error(w, err.Error(), http.StatusBadRequest)
            return
        }
    
        response := inferTypes(req)
        json.NewEncoder(w).Encode(response)
    })

    http.HandleFunc("/eval", func(w http.ResponseWriter, r *http.Request) {
        var req EvalRequest
        if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
            http.Error(w, err.Error(), http.StatusBadRequest)
            return
        }

        env, err := cel.NewEnv(
            cel.Declarations(
                decls.NewVar("events", decls.NewMapType(decls.String, decls.Dyn)),
            ),
        )
        if err != nil {
            respondWithError(w, err)
            return
        }

        ast, iss := env.Compile(req.Expression)
        if iss.Err() != nil {
            respondWithError(w, iss.Err())
            return
        }

        prg, err := env.Program(ast)
        if err != nil {
            respondWithError(w, err)
            return
        }

        out, _, err := prg.Eval(req.Variables)
        if err != nil {
            respondWithError(w, err)
            return
        }

        json.NewEncoder(w).Encode(EvalResponse{Result: out.Value()})
    })

    fmt.Println("Server listening on http://localhost:8080")
    http.ListenAndServe(":8080", nil)
}

func respondWithError(w http.ResponseWriter, err error) {
    json.NewEncoder(w).Encode(EvalResponse{Error: err.Error()})
}


func inferTypes(data any) any {
    switch v := data.(type) {
    case map[string]any:
        result := make(map[string]any)
        for key, val := range v {
            result[key] = inferTypes(val)
        }
        return result
    case []any:
        result := make([]any, len(v))
        for i, item := range v {
            result[i] = inferTypes(item)
        }
        return map[string]any{
            "type":  "list<" + inferSingleType(v) + ">",
        }
    default:
        return map[string]any{
            "type":  reflect.TypeOf(v).String(),
        }
    }
}

func inferSingleType(arr []any) string {
    if len(arr) == 0 {
        return "unknown"
    }
    return reflect.TypeOf(arr[0]).String()
}
