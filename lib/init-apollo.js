import fetch from 'node-fetch';
import ApolloClient, { gql } from 'apollo-boost';

const client = new ApolloClient({
  uri: process.env.GRAPHQL_URI,
  fetch,
  // TODO: pass handler for adding user auth token to headers
  headers: {
    'x-hasura-admin-secret': 'sherlocked',
  }
});

export { client, gql };
