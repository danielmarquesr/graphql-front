import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { gql } from 'graphql-request';
import { client } from 'src/graphql/client';
import { useConfirmEmailMutation } from 'src/graphql/types.d';

// eslint-disable-next-line no-unused-expressions
gql`
  mutation ConfirmEmail($input: TokenSHA256!) {
    ConfirmEmail(input: $input) {
      id
      email
    }
  }
`;

export const ConfirmEmail = () => {
  const [searchParams] = useSearchParams();

  const { data, isLoading, error, mutate } = useConfirmEmailMutation(client);

  useEffect(() => {
    const confirmEmail = () => {
      const token = searchParams.get('token');

      if (!token || token.length === 0) return;

      mutate({ input: { token } });
    };

    confirmEmail();
  }, []);

  if (isLoading) return <>loading...</>;

  return (
    <>
      <h1>Confirmation Email</h1>

      {data?.ConfirmEmail ? (
        <>
          <div>
            Congratulations! Your email ({data.ConfirmEmail.email}) was
            successfully confirmed
          </div>

          <div>
            To go to the Sign in page, <Link to="/signin">click here</Link>
          </div>
        </>
      ) : (
        <>
          <div>Was not possible to confirm your email, try again later...</div>

          <div>
            {(error as any).response.errors.map((item: any) => (
              <div key={item.message}>{item.message}</div>
            ))}
          </div>
        </>
      )}
    </>
  );
};
