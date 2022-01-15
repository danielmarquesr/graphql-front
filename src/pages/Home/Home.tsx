import React, { Suspense } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { graphql } from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'react-relay';
import { ErrorBoundary } from 'src/components';
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

const Header = () => {
  const navigate = useNavigate();

  const data = useLazyLoadQuery<HomeCurrentUserQuery>(
    CurrentUserQuery,
    {},
    { fetchPolicy: 'store-or-network' }
  );

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div>
      {data.CurrentUser ? (
        <>
          <div>
            ID: {data.CurrentUser.id}
            <br />
            Email: {data.CurrentUser.email}
            <br />
            First name: {data.CurrentUser.firstName}
            <br />
            Last name: {data.CurrentUser.lastName}
          </div>
          <br />
          <div>
            <button type="button" onClick={logout}>
              Logout
            </button>
          </div>
        </>
      ) : (
        <Link to="/signin">Sign In</Link>
      )}
    </div>
  );
};

export const Home = () => {
  return (
    <>
      <h1>Home</h1>

      <ErrorBoundary
        fallback={({ error }: { error: Error }) =>
          `Error: ${JSON.stringify(error)}`
        }
      >
        <Suspense fallback="Loading...">
          <Header />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};
