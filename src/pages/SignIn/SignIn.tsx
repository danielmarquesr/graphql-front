import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { gql } from 'graphql-request';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { client, useSignInMutation } from 'src/graphql';

// eslint-disable-next-line no-unused-expressions
gql`
  mutation SignIn($input: AuthInput!) {
    SignIn(input: $input) {
      token
    }
  }
`;

interface Values {
  email: string;
  password: string;
}

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(50).required(),
});

export const SignIn = () => {
  const navigate = useNavigate();

  const { data, isLoading, error, mutate } = useSignInMutation(client);

  const formik = useFormik<Values>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: () => {
      const { email, password } = formik.values;

      mutate({ input: { email, password } });

      const token = data?.SignIn?.token;

      if (!token || token.length === 0) return;

      localStorage.setItem('token', token);
      navigate('/');
    },
  });

  return (
    <>
      <h1>Sign In</h1>

      <div>
        {(error as any)?.response.errors.map((item: any) => (
          <div key={item.message}>{item.message}</div>
        ))}
      </div>

      <form onSubmit={formik.handleSubmit}>
        <input
          type="email"
          placeholder="email"
          name="email"
          id="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="password"
          name="password"
          id="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <br />
        <br />
        <button
          type="submit"
          disabled={!formik.isValid || !formik.dirty || isLoading}
        >
          {isLoading ? 'Loading' : 'Submit'}
        </button>

        <Link to="/signup">Sign Up</Link>
      </form>
    </>
  );
};
