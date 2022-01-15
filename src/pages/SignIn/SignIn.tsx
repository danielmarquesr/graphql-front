import React, { useState } from 'react';
import { useMutation } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import { PayloadError } from 'relay-runtime';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { SignInMutation } from './__generated__/SignInMutation.graphql';

const mutation = graphql`
  mutation SignInMutation($input: AuthInput!) {
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
  const [commit, loading] = useMutation<SignInMutation>(mutation);
  const navigate = useNavigate();

  const [errors, setErrors] = useState(null as PayloadError[] | null);

  const formik = useFormik<Values>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: () => {
      const { email, password } = formik.values;
      commit({
        variables: { input: { email, password } },
        onCompleted: (data, error) => {
          const token = data.SignIn?.token;

          if (!token) {
            setErrors(error);
            return;
          }

          localStorage.setItem('token', token);
          navigate('/');
        },
      });
    },
  });

  return (
    <>
      <h1>Sign In</h1>

      <div>
        {errors?.map(({ message }) => (
          <div key={message}>{message}</div>
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
          disabled={!formik.isValid || !formik.dirty || loading}
        >
          {loading ? 'Loading' : 'Submit'}
        </button>

        <Link to="/signup">Sign Up</Link>
      </form>
    </>
  );
};
