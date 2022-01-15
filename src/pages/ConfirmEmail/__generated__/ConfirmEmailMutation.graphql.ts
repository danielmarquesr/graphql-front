/**
 * @generated SignedSource<<1b58539695fcb6faeb45adb8785be4f1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type TokenSHA256 = {
  token: string;
};
export type ConfirmEmailMutation$variables = {
  input: TokenSHA256;
};
export type ConfirmEmailMutationVariables = ConfirmEmailMutation$variables;
export type ConfirmEmailMutation$data = {
  readonly ConfirmEmail: {
    readonly id: string;
    readonly email: string;
  } | null;
};
export type ConfirmEmailMutationResponse = ConfirmEmailMutation$data;
export type ConfirmEmailMutation = {
  variables: ConfirmEmailMutationVariables;
  response: ConfirmEmailMutation$data;
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
    "name": "ConfirmEmail",
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
    "name": "ConfirmEmailMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ConfirmEmailMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "c927c756082fecb888eeb0a49d308e7a",
    "id": null,
    "metadata": {},
    "name": "ConfirmEmailMutation",
    "operationKind": "mutation",
    "text": "mutation ConfirmEmailMutation(\n  $input: TokenSHA256!\n) {\n  ConfirmEmail(input: $input) {\n    id\n    email\n  }\n}\n"
  }
};
})();

(node as any).hash = "4af68cb2a3c8ab809db98622ab13250b";

export default node;
