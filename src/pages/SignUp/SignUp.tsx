import React from 'react';
import { graphql } from 'babel-plugin-relay/macro';
import { useMutation } from 'react-relay';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { SignUpMutation } from './__generated__/SignUpMutation.graphql';

const mutation = graphql`
  mutation SignUpMutation($input: UserInput!) {
    SignUp(input: $input) {
      id
      email
    }
  }
`;

interface Values {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
}

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  firstName: yup.string().min(3).max(50).required(),
  lastName: yup.string().min(3).max(50).required(),
  password: yup.string().min(8).max(50).required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required(),
});

export const SignUp = () => {
  const [commit, loading] = useMutation<SignUpMutation>(mutation);

  const formik = useFormik<Values>({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: () => {
      const { email, firstName, lastName, password } = formik.values;
      commit({
        variables: { input: { email, firstName, lastName, password } },
        onCompleted: (data, error) => {
          console.log('data', data);
          console.log('error', error);
        },
      });
    },
  });

  return (
    <>
      <h1>Sign Up</h1>

      <form onSubmit={formik.handleSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <br />
        <br />
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="firstName"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        <br />
        <br />
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="lastName"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <br />
        <br />
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="confirmPassword"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
        />
        <br />
        <br />
        <button
          type="submit"
          disabled={!formik.isValid || !formik.dirty || loading}
        >
          {loading ? 'Loading' : 'Submit'}
        </button>

        <Link to="/signin">Sign In</Link>
      </form>
    </>
  );
};
