import React, { useEffect, useState } from 'react';
import { graphql } from 'babel-plugin-relay/macro';
import { useMutation } from 'react-relay';
import { Link, useSearchParams } from 'react-router-dom';
import { PayloadError } from 'relay-runtime';
import {
  ConfirmEmailMutation,
  ConfirmEmailMutation$data,
} from './__generated__/ConfirmEmailMutation.graphql';

const mutation = graphql`
  mutation ConfirmEmailMutation($input: TokenSHA256!) {
    ConfirmEmail(input: $input) {
      id
      email
    }
  }
`;

type User = ConfirmEmailMutation$data['ConfirmEmail'];

export const ConfirmEmail = () => {
  const [searchParams] = useSearchParams();
  const [commit, loading] = useMutation<ConfirmEmailMutation>(mutation);

  const [user, setUser] = useState<User | null>(null);
  const [errors, setErrors] = useState<PayloadError[] | null>(null);

  useEffect(() => {
    const confirmEmail = () => {
      const token = searchParams.get('token');

      if (!token || token.length === 0) return;

      commit({
        variables: { input: { token } },
        onCompleted: (data, errorsList) => {
          setUser(data.ConfirmEmail);
          setErrors(errorsList);
        },
      });
    };

    confirmEmail();
  }, []);

  if (loading) return <>loading...</>;

  return (
    <>
      <h1>Confirmation Email</h1>

      {user ? (
        <>
          <div>
            Congratulations! Your email ({user.email}) was successfully
            confirmed
          </div>

          <div>
            To go to the Sign in page, <Link to="/signin">click here</Link>
          </div>
        </>
      ) : (
        <>
          <div>Was not possible to confirm your email, try again later...</div>

          <div>
            {errors?.map(({ message }) => (
              <div key={message}>{message}</div>
            ))}
          </div>
        </>
      )}
    </>
  );
};
