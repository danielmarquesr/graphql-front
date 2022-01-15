import { RequestParameters, Variables } from 'relay-runtime';

const fetchGraphQL = async (
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

  const data = await response.json();

  const { errors } = data;
  if (errors) {
    const error = new Error('ApiError');
    (error as any).errors = errors;

    const isAuthError = errors.includes(
      (item: { name: string }) => item.name === 'AuthError'
    );

    if (isAuthError) {
      localStorage.removeItem('token');
      error.name = 'AuthError';
    }

    throw error;
  }

  return data;
};

export default fetchGraphQL;
