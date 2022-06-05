/**
 * @generated SignedSource<<38acbf478eff065cff128211232f579a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type HomeCurrentUserQuery$variables = {};
export type HomeCurrentUserQuery$data = {
  readonly CurrentUser: {
    readonly id: string;
    readonly email: string;
    readonly firstName: string | null;
    readonly lastName: string | null;
  } | null;
};
export type HomeCurrentUserQuery = {
  variables: HomeCurrentUserQuery$variables;
  response: HomeCurrentUserQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "CurrentUser",
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "firstName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "lastName",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HomeCurrentUserQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "HomeCurrentUserQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "6868f269a334f8de19848dad5af78722",
    "id": null,
    "metadata": {},
    "name": "HomeCurrentUserQuery",
    "operationKind": "query",
    "text": "query HomeCurrentUserQuery {\n  CurrentUser {\n    id\n    email\n    firstName\n    lastName\n  }\n}\n"
  }
};
})();

(node as any).hash = "b0d72d6c8755e8db3004641c53cc5b8d";

export default node;
