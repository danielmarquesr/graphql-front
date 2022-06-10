/* eslint-disable no-use-before-define */
import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import {
  useMutation,
  useQuery,
  UseMutationOptions,
  UseQueryOptions,
} from 'react-query';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};

function fetcher<TData, TVariables>(
  client: GraphQLClient,
  query: string,
  variables?: TVariables,
  headers?: RequestInit['headers']
) {
  return async (): Promise<TData> =>
    client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type AuthInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  ConfirmEmail?: Maybe<User>;
  SignIn?: Maybe<Token>;
  SignUp?: Maybe<User>;
};

export type MutationConfirmEmailArgs = {
  input: TokenSha256;
};

export type MutationSignInArgs = {
  input: AuthInput;
};

export type MutationSignUpArgs = {
  input: UserInput;
};

export type Query = {
  __typename?: 'Query';
  CurrentUser?: Maybe<User>;
  User?: Maybe<User>;
  Users: Array<User>;
};

export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type QueryUsersArgs = {
  cursor?: InputMaybe<Scalars['ID']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type Token = {
  __typename?: 'Token';
  token: Scalars['String'];
};

export type TokenSha256 = {
  token: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['Date'];
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isEmailConfirmed: Scalars['Boolean'];
  lastName?: Maybe<Scalars['String']>;
  updatedAt: Scalars['Date'];
};

export type UserInput = {
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};

export type ConfirmEmailMutationVariables = Exact<{
  input: TokenSha256;
}>;

export type ConfirmEmailMutation = {
  __typename?: 'Mutation';
  ConfirmEmail?: { __typename?: 'User'; id: string; email: string } | null;
};

export type HomeCurrentUserQueryVariables = Exact<{ [key: string]: never }>;

export type HomeCurrentUserQuery = {
  __typename?: 'Query';
  CurrentUser?: {
    __typename?: 'User';
    id: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
  } | null;
};

export type SignInMutationVariables = Exact<{
  input: AuthInput;
}>;

export type SignInMutation = {
  __typename?: 'Mutation';
  SignIn?: { __typename?: 'Token'; token: string } | null;
};

export type SignUpMutationVariables = Exact<{
  input: UserInput;
}>;

export type SignUpMutation = {
  __typename?: 'Mutation';
  SignUp?: { __typename?: 'User'; id: string; email: string } | null;
};

export const ConfirmEmailDocument = `
    mutation ConfirmEmail($input: TokenSHA256!) {
  ConfirmEmail(input: $input) {
    id
    email
  }
}
    `;
export const useConfirmEmailMutation = <TError = unknown, TContext = unknown>(
  client: GraphQLClient,
  options?: UseMutationOptions<
    ConfirmEmailMutation,
    TError,
    ConfirmEmailMutationVariables,
    TContext
  >,
  headers?: RequestInit['headers']
) =>
  useMutation<
    ConfirmEmailMutation,
    TError,
    ConfirmEmailMutationVariables,
    TContext
  >(
    ['ConfirmEmail'],
    (variables?: ConfirmEmailMutationVariables) =>
      fetcher<ConfirmEmailMutation, ConfirmEmailMutationVariables>(
        client,
        ConfirmEmailDocument,
        variables,
        headers
      )(),
    options
  );
export const HomeCurrentUserDocument = `
    query HomeCurrentUser {
  CurrentUser {
    id
    email
    firstName
    lastName
  }
}
    `;
export const useHomeCurrentUserQuery = <
  TData = HomeCurrentUserQuery,
  TError = unknown
>(
  client: GraphQLClient,
  variables?: HomeCurrentUserQueryVariables,
  options?: UseQueryOptions<HomeCurrentUserQuery, TError, TData>,
  headers?: RequestInit['headers']
) =>
  useQuery<HomeCurrentUserQuery, TError, TData>(
    variables === undefined
      ? ['HomeCurrentUser']
      : ['HomeCurrentUser', variables],
    fetcher<HomeCurrentUserQuery, HomeCurrentUserQueryVariables>(
      client,
      HomeCurrentUserDocument,
      variables,
      headers
    ),
    options
  );
export const SignInDocument = `
    mutation SignIn($input: AuthInput!) {
  SignIn(input: $input) {
    token
  }
}
    `;
export const useSignInMutation = <TError = unknown, TContext = unknown>(
  client: GraphQLClient,
  options?: UseMutationOptions<
    SignInMutation,
    TError,
    SignInMutationVariables,
    TContext
  >,
  headers?: RequestInit['headers']
) =>
  useMutation<SignInMutation, TError, SignInMutationVariables, TContext>(
    ['SignIn'],
    (variables?: SignInMutationVariables) =>
      fetcher<SignInMutation, SignInMutationVariables>(
        client,
        SignInDocument,
        variables,
        headers
      )(),
    options
  );
export const SignUpDocument = `
    mutation SignUp($input: UserInput!) {
  SignUp(input: $input) {
    id
    email
  }
}
    `;
export const useSignUpMutation = <TError = unknown, TContext = unknown>(
  client: GraphQLClient,
  options?: UseMutationOptions<
    SignUpMutation,
    TError,
    SignUpMutationVariables,
    TContext
  >,
  headers?: RequestInit['headers']
) =>
  useMutation<SignUpMutation, TError, SignUpMutationVariables, TContext>(
    ['SignUp'],
    (variables?: SignUpMutationVariables) =>
      fetcher<SignUpMutation, SignUpMutationVariables>(
        client,
        SignUpDocument,
        variables,
        headers
      )(),
    options
  );
