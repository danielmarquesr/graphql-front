/**
 * @generated SignedSource<<268a9dce92518c1746f5e6f614533199>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UserInput = {
  email: string;
  password: string;
  firstName?: string | null;
  lastName?: string | null;
};
export type SignUpMutation$variables = {
  input: UserInput;
};
export type SignUpMutationVariables = SignUpMutation$variables;
export type SignUpMutation$data = {
  readonly SignUp: {
    readonly id: string;
    readonly email: string;
  } | null;
};
export type SignUpMutationResponse = SignUpMutation$data;
export type SignUpMutation = {
  variables: SignUpMutationVariables;
  response: SignUpMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "SignUp",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SignUpMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SignUpMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a441d7126efe0f8dae2dfeeba2e9f0b7",
    "id": null,
    "metadata": {},
    "name": "SignUpMutation",
    "operationKind": "mutation",
    "text": "mutation SignUpMutation(\n  $input: UserInput!\n) {\n  SignUp(input: $input) {\n    id\n    email\n  }\n}\n"
  }
};
})();

(node as any).hash = "6858ede9b8fcdcfa0be6530809ae2f53";

export default node;
