import React from 'react';
import { graphql } from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'react-relay';
import { Header } from 'src/components';
import { HomeCurrentUserQuery } from './__generated__/HomeCurrentUserQuery.graphql';

const CurrentUserQuery = graphql`
  query HomeCurrentUserQuery {
    CurrentUser {
      id
      email
      firstName
      lastName
    }
  }
`;

export const Home = () => {
  const data = useLazyLoadQuery<HomeCurrentUserQuery>(
    CurrentUserQuery,
    {},
    { fetchPolicy: 'store-or-network' }
  );

  return (
    <>
      <h1>Home</h1>

      <p>Data: {JSON.stringify(data)}</p>

      <Header data={data} />
    </>
  );
};
