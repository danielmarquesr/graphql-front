import React, { useEffect, useState } from 'react';
import { gql } from 'graphql-request';
import { Header } from 'src/components';
import { client, HomeCurrentUserQuery } from 'src/graphql';

const homeCurrentUserQuery = gql`
  query HomeCurrentUser {
    CurrentUser {
      id
      email
      firstName
      lastName
    }
  }
`;

export const Home = () => {
  const [user, setUser] = useState<HomeCurrentUserQuery['CurrentUser'] | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const token = localStorage.getItem('token');

        if (!token) return;

        const { CurrentUser } = await client.request<HomeCurrentUserQuery>(
          homeCurrentUserQuery
        );
        setUser(CurrentUser);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    client.setHeaders(undefined);
  };

  if (isLoading) return null;

  return (
    <>
      <Header user={user} logout={logout} />

      <h1>Home</h1>

      <p>Data: {JSON.stringify(user)}</p>
    </>
  );
};
