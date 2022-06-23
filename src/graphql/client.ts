import { GraphQLClient } from 'graphql-request';

const { REACT_APP_BACKEND_HOST } = process.env;
export const GRAPHQL_ENDPOINT = `${REACT_APP_BACKEND_HOST}/graphql`;

export class GraphQLClient2 {
  private static instance: GraphQLClient;

  constructor() {
    if (!GraphQLClient2.instance) {
      const token = localStorage.getItem('token');
      GraphQLClient2.instance = new GraphQLClient(GRAPHQL_ENDPOINT, {
        ...(token && { headers: { Authorization: token } }),
      });
    }
  }

  // eslint-disable-next-line class-methods-use-this
  getInstance() {
    return GraphQLClient2.instance;
  }
}

export const client = new GraphQLClient2().getInstance();
