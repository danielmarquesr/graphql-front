import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { gql } from 'graphql-request';
import { client, UserInput, useSignUpMutation } from 'src/graphql';

// eslint-disable-next-line no-unused-expressions
gql`
  mutation SignUp($input: UserInput!) {
    SignUp(input: $input) {
      id
      email
    }
  }
`;

interface SignUpValues {
  email: UserInput['email'];
  firstName: string;
  lastName: string;
  password: UserInput['password'];
  confirmPassword: UserInput['password'];
}

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  firstName: yup.string().min(3).max(50),
  lastName: yup.string().min(3).max(50),
  password: yup.string().min(8).max(50).required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required(),
});

export const SignUp = () => {
  const { isLoading, mutate, error, isSuccess } = useSignUpMutation(client);
  const navigate = useNavigate();
  const formik = useFormik<SignUpValues>({
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
      mutate({ input: { email, firstName, lastName, password } });
    },
  });

  useEffect(() => {
    if (isSuccess) navigate('/signin');
  }, [isSuccess]);

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
          disabled={!formik.isValid || !formik.dirty || isLoading}
        >
          {isLoading ? 'Loading' : 'Submit'}
        </button>

        <div>
          {(error as any)?.response.errors.map((item: any) => (
            <div key={item.message}>{item.message}</div>
          ))}
        </div>

        <Link to="/signin">Sign In</Link>
      </form>
    </>
  );
};
