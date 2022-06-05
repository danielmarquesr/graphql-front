import { RequestParameters, Variables } from 'relay-runtime';

export class GraphQLError extends Error {
  errors: Error[];

  constructor(errors: Error[]) {
    super('GraphQLError');
    this.errors = errors;
    if (Error.captureStackTrace) Error.captureStackTrace(this, GraphQLError);
  }
}

const getResponseData = async (
  { text }: RequestParameters,
  variables: Variables
) => {
  const { REACT_APP_BACKEND_DOMAIN } = process.env;

  const jwtToken = localStorage.getItem('token');

  const response = await fetch(`${REACT_APP_BACKEND_DOMAIN}/graphql`, {
    method: 'POST',
    headers: {
      ...(jwtToken && { Authorization: `Bearer ${jwtToken}` }),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: text, variables }),
  });

  return response.json();
};

const throwGraphQLError = (errors: Error[]) => {
  const error = new GraphQLError(errors);
  const isAuthError = error.errors.some(({ name }) => name === 'AuthError');

  if (isAuthError) localStorage.removeItem('token');

  throw error;
};

const fetchGraphQL = async (
  operation: RequestParameters,
  variables: Variables
) => {
  const data = await getResponseData(operation, variables);

  const { errors } = data;
  if (errors) throwGraphQLError(errors);

  return data;
};

export default fetchGraphQL;
