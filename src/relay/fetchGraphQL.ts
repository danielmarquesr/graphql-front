import { RequestParameters, Variables } from 'relay-runtime';

const getResponseData = async (
  operation: RequestParameters,
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
    body: JSON.stringify({ query: operation.text, variables }),
  });

  return response.json();
};

const throwGraphQLError = (errors: Error[]) => {
  const error = new Error('ApiError');
  (error as any).errors = errors;

  const isAuthError = errors.some(({ name }) => name === 'AuthError');

  if (isAuthError) {
    localStorage.removeItem('token');
    error.name = 'AuthError';
  }

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
