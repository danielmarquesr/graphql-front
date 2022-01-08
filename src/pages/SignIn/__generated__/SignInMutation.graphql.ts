/**
 * @generated SignedSource<<0f17e97d49b6ce8727190963512363b1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type AuthInput = {
  email: string;
  password: string;
};
export type SignInMutation$variables = {
  input: AuthInput;
};
export type SignInMutationVariables = SignInMutation$variables;
export type SignInMutation$data = {
  readonly SignIn: {
    readonly token: string;
  } | null;
};
export type SignInMutationResponse = SignInMutation$data;
export type SignInMutation = {
  variables: SignInMutationVariables;
  response: SignInMutation$data;
};

const node: ConcreteRequest = (function () {
  var v0 = [
      {
        defaultValue: null,
        kind: 'LocalArgument',
        name: 'input',
      },
    ],
    v1 = [
      {
        alias: null,
        args: [
          {
            kind: 'Variable',
            name: 'input',
            variableName: 'input',
          },
        ],
        concreteType: 'Token',
        kind: 'LinkedField',
        name: 'SignIn',
        plural: false,
        selections: [
          {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'token',
            storageKey: null,
          },
        ],
        storageKey: null,
      },
    ];
  return {
    fragment: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Fragment',
      metadata: null,
      name: 'SignInMutation',
      selections: v1 /*: any*/,
      type: 'Mutation',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Operation',
      name: 'SignInMutation',
      selections: v1 /*: any*/,
    },
    params: {
      cacheID: '3ee53fb672851ee4dac2df4fe5454b45',
      id: null,
      metadata: {},
      name: 'SignInMutation',
      operationKind: 'mutation',
      text: 'mutation SignInMutation(\n  $input: AuthInput!\n) {\n  SignIn(input: $input) {\n    token\n  }\n}\n',
    },
  };
})();

(node as any).hash = 'fa7d9c86ebfa331efa25100f5aef5f45';

export default node;
