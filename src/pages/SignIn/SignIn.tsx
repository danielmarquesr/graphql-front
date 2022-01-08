import React, { useState } from 'react';
import { useMutation } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import { PayloadError } from 'relay-runtime';
import { SignInMutation } from './__generated__/SignInMutation.graphql';

const mutation = graphql`
  mutation SignInMutation($input: AuthInput!) {
    SignIn(input: $input) {
      token
    }
  }
`;

export const SignIn = () => {
  const [commit, isInFlight] = useMutation<SignInMutation>(mutation);

  const [errors, setErrors] = useState(null as PayloadError[] | null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setErrors(null);

    commit({
      variables: { input: { email, password } },
      onCompleted: (data, error) => {
        const token = data.SignIn?.token;
        if (!token) {
          setErrors(error);
          return;
        }
        localStorage.setItem('jwt-token', token);
      },
    });
  };

  return (
    <>
      <h1>SignIn</h1>

      <div>
        {errors?.map(({ message }) => (
          <div key={message}>{message}</div>
        ))}
      </div>

      <form>
        <input
          type="email"
          placeholder="email"
          name="email"
          id="email"
          onChange={({ target }) => setEmail(target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="password"
          name="password"
          id="password"
          onChange={({ target }) => setPassword(target.value)}
        />
        <br />
        <br />
        <button type="submit" disabled={isInFlight} onClick={handleSubmit}>
          {isInFlight ? 'Loading...' : 'Sign In'}
        </button>
      </form>
    </>
  );
};
