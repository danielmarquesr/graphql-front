import { RequestParameters, Variables } from 'relay-runtime';

const fetchGraphQL = async (
  operation: RequestParameters,
  variables: Variables
) => {
  const { REACT_APP_BACKEND_DOMAIN } = process.env;

  const jwtToken = localStorage.getItem('jwt-token');

  const response = await fetch(`${REACT_APP_BACKEND_DOMAIN}/graphql`, {
    method: 'POST',
    headers: {
      ...(jwtToken && { Authorization: `BEARER ${jwtToken}` }),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: operation.text, variables }),
  });

  return response.json();
};

export default fetchGraphQL;
