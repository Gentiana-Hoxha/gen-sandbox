export const viewDp = {
    "data": {
      "executionTemplate": {
        "UseCases": [],
        "id": "01JEX44EB8A494CJT7BK7S4AS3",
        "name": "Gen-Test",
        "version": {
          "id": "01JJBXZ5GSJRCNJHC41W4MJXBV",
          "number": 2,
          "__typename": "TemplateVersion"
        },
        "description": null,
        "tenant": {
          "name": "cxpauto",
          "integromatTeam": {
            "id": 255,
            "organizationId": 240,
            "__typename": "IntegromatTeam"
          },
          "hookdeck": {
            "sourceUrl": "https://signals.emporix.io/e/src_odecBUZV9ZbO",
            "__typename": "HookdeckAccountInfo"
          },
          "__typename": "CXPAccountInfo"
        },
        "active": null,
        "state": "inactive",
        "stateComments": null,
        "metadata": {
          "createdAt": "2025-01-24T10:33:20.153Z",
          "activatedAt": "0001-01-01T00:00:00Z",
          "createdBy": "853e8e4c-1e58-4e1c-9ec9-ced2bbb4e117",
          "activatedBy": "",
          "__typename": "CXPMetadata"
        },
        "trigger": [
          {
            "scenarios": [],
            "timeExpression": null,
            "triggerType": "webhook",
            "eventType": "acr/s2k/return.created",
            "__typename": "Trigger"
          }
        ],
        "steps": [
          {
            "stepType": "subflow",
            "scenarios": null,
            "trigger": null,
            "subflows": [
              {
                "executionTemplateId": "01JEB8QS0VVHYAHQ3SRMD0R0TD",
                "name": "Test - deploy",
                "__typename": "Subflow"
              }
            ],
            "cloudFunctions": null,
            "condition": null,
            "__typename": "Step"
          },
          {
            "stepType": "subflow",
            "scenarios": null,
            "trigger": null,
            "subflows": [
              {
                "executionTemplateId": "01JEB8QS0VVHYAHQ3SRMD0R0TD",
                "name": "Test - deploy",
                "__typename": "Subflow"
              }
            ],
            "cloudFunctions": null,
            "condition": null,
            "__typename": "Step"
          },
          {
            "stepType": "cloudfunction",
            "scenarios": null,
            "trigger": null,
            "subflows": null,
            "cloudFunctions": [
              {
                "cloudFunctionId": "01JBXSH7TK3HEA7KZXFK9ENQ5A",
                "cloudFunctionName": "my pipedream",
                "cloudFunctionInputJQFilter": "",
                "cloudFunctionOutputJQFilter": ".",
                "__typename": "CloudFunctionStep"
              }
            ],
            "condition": null,
            "__typename": "Step"
          },
          {
            "stepType": "trigger",
            "scenarios": null,
            "trigger": [
              {
                "scenarios": [],
                "scenariosBlueprints": null,
                "timeExpression": null,
                "triggerType": "webhook",
                "eventType": "acr/s2k/return.created",
                "__typename": "Trigger"
              }
            ],
            "subflows": null,
            "cloudFunctions": null,
            "condition": null,
            "__typename": "Step"
          },
        ],
        "__typename": "ExecutionTemplate"
      }
    }
  };

export const editDP = {
    "data": {
      "executionTemplate": {
        "UseCases": [],
        "id": "01JEX44EB8A494CJT7BK7S4AS3",
        "name": "Gen-Test",
        "version": {
          "id": "01JJBXZ5GSJRCNJHC41W4MJXBV",
          "number": 2,
          "__typename": "TemplateVersion"
        },
        "description": null,
        "tenant": {
          "name": "cxpauto",
          "integromatTeam": {
            "id": 255,
            "organizationId": 240,
            "__typename": "IntegromatTeam"
          },
          "hookdeck": {
            "sourceUrl": "https://signals.emporix.io/e/src_odecBUZV9ZbO",
            "__typename": "HookdeckAccountInfo"
          },
          "__typename": "CXPAccountInfo"
        },
        "active": null,
        "state": "inactive",
        "stateComments": null,
        "metadata": {
          "createdAt": "2025-01-24T10:33:20.153Z",
          "activatedAt": "0001-01-01T00:00:00Z",
          "createdBy": "853e8e4c-1e58-4e1c-9ec9-ced2bbb4e117",
          "activatedBy": "",
          "__typename": "CXPMetadata"
        },
        "trigger": [
          {
            "scenarios": [],
            "timeExpression": null,
            "triggerType": "webhook",
            "eventType": "acr/s2k/return.created",
            "__typename": "Trigger"
          }
        ],
        "steps": [
          {
            "stepType": "subflow",
            "scenarios": null,
            "trigger": null,
            "subflows": [
              {
                "executionTemplateId": "01JEB8QS0VVHYAHQ3SRMD0R0TD",
                "name": "Test - deploy",
                "__typename": "Subflow"
              }
            ],
            "cloudFunctions": null,
            "condition": null,
            "__typename": "Step"
          },
          {
            "stepType": "subflow",
            "scenarios": null,
            "trigger": null,
            "subflows": [
              {
                "executionTemplateId": "01JEB8QS0VVHYAHQ3SRMD0R0TD",
                "name": "Test - deploy",
                "__typename": "Subflow"
              }
            ],
            "cloudFunctions": null,
            "condition": null,
            "__typename": "Step"
          },
          {
            "stepType": "cloudfunction",
            "scenarios": null,
            "trigger": null,
            "subflows": null,
            "cloudFunctions": [
              {
                "cloudFunctionId": "01JBXSH7TK3HEA7KZXFK9ENQ5A",
                "cloudFunctionName": "my pipedream",
                "cloudFunctionInputJQFilter": "",
                "cloudFunctionOutputJQFilter": ".",
                "__typename": "CloudFunctionStep"
              }
            ],
            "condition": null,
            "__typename": "Step"
          },
          {
            "stepType": "trigger",
            "scenarios": null,
            "trigger": [
              {
                "scenarios": [],
                "scenariosBlueprints": null,
                "timeExpression": null,
                "triggerType": "webhook",
                "eventType": "acr/s2k/return.created",
                "__typename": "Trigger"
              }
            ],
            "subflows": null,
            "cloudFunctions": null,
            "condition": null,
            "__typename": "Step"
          },
          {
            "stepType": "trigger",
            "scenarios": null,
            "trigger": [
              {
                "scenarios": [],
                "scenariosBlueprints": null,
                "timeExpression": "2025-01-31T10:33:09.250Z",
                "triggerType": "timer",
                "eventType": "_timer-event",
                "__typename": "Trigger"
              }
            ],
            "subflows": null,
            "cloudFunctions": null,
            "condition": null,
            "__typename": "Step"
          }
        ],
        "__typename": "ExecutionTemplate"
      }
    }
  }
  
export const debugDP = {
    "data": {
      "executionTemplate": {
        "UseCases": [],
        "id": "01JEX44EB8A494CJT7BK7S4AS3",
        "name": "Gen-Test",
        "version": {
          "id": "01JJBXZ5GSJRCNJHC41W4MJXBV",
          "number": 2,
          "__typename": "TemplateVersion"
        },
        "description": null,
        "tenant": {
          "name": "cxpauto",
          "integromatTeam": {
            "id": 255,
            "organizationId": 240,
            "__typename": "IntegromatTeam"
          },
          "hookdeck": {
            "sourceUrl": "https://signals.emporix.io/e/src_odecBUZV9ZbO",
            "__typename": "HookdeckAccountInfo"
          },
          "__typename": "CXPAccountInfo"
        },
        "active": null,
        "state": "inactive",
        "stateComments": null,
        "metadata": {
          "createdAt": "2025-01-24T10:33:20.153Z",
          "activatedAt": "0001-01-01T00:00:00Z",
          "createdBy": "853e8e4c-1e58-4e1c-9ec9-ced2bbb4e117",
          "activatedBy": "",
          "__typename": "CXPMetadata"
        },
        "trigger": [
          {
            "scenarios": [],
            "timeExpression": null,
            "triggerType": "webhook",
            "eventType": "acr/s2k/return.created",
            "__typename": "Trigger"
          }
        ],
        "steps": [
          {
            "stepType": "subflow",
            "scenarios": null,
            "trigger": null,
            "subflows": [
              {
                "executionTemplateId": "01JEB8QS0VVHYAHQ3SRMD0R0TD",
                "name": "Test - deploy",
                "__typename": "Subflow"
              }
            ],
            "cloudFunctions": null,
            "condition": null,
            "__typename": "Step"
          },
          {
            "stepType": "subflow",
            "scenarios": null,
            "trigger": null,
            "subflows": [
              {
                "executionTemplateId": "01JEB8QS0VVHYAHQ3SRMD0R0TD",
                "name": "Test - deploy",
                "__typename": "Subflow"
              }
            ],
            "cloudFunctions": null,
            "condition": null,
            "__typename": "Step"
          },
          {
            "stepType": "cloudfunction",
            "scenarios": null,
            "trigger": null,
            "subflows": null,
            "cloudFunctions": [
              {
                "cloudFunctionId": "01JBXSH7TK3HEA7KZXFK9ENQ5A",
                "cloudFunctionName": "my pipedream",
                "cloudFunctionInputJQFilter": "",
                "cloudFunctionOutputJQFilter": ".",
                "__typename": "CloudFunctionStep"
              }
            ],
            "condition": null,
            "__typename": "Step"
          },
        ],
        "__typename": "ExecutionTemplate"
      }
    }
  }
  
  