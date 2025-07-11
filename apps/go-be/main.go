package main

import (
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
