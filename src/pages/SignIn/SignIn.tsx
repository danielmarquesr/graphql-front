import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { gql } from 'graphql-request';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { client, UserInput, useSignInMutation } from 'src/graphql';
import { Button, Input, Spacer, Text } from 'src/components';
import * as S from './SignIn.styles';

// eslint-disable-next-line no-unused-expressions
gql`
  mutation SignIn($input: AuthInput!) {
    SignIn(input: $input) {
      token
    }
  }
`;

interface Values {
  email: UserInput['email'];
  password: UserInput['password'];
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
    },
  });

  useEffect(() => {
    const token = data?.SignIn?.token;

    if (!token || token.length === 0) return;

    client.setHeader('Authorization', token);
    localStorage.setItem('token', token);
    navigate('/');
  }, [data?.SignIn?.token]);

  return (
    <S.ContainerWrapper>
      <S.Wrapper>
        <Text variant="title">Sign In</Text>

        <Spacer vertical="1.4rem" />

        <div>
          {(error as any)?.response.errors.map((item: any) => (
            <div key={item.message}>{item.message}</div>
          ))}
        </div>

        <form onSubmit={formik.handleSubmit}>
          <Input
            type="email"
            label="E-mail"
            placeholder="email"
            name="email"
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />

          <Spacer vertical="1rem" />

          <Input
            type="password"
            label="Password"
            placeholder="password"
            name="password"
            id="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />

          <Spacer vertical="1rem" />

          <Button
            type="submit"
            disabled={!formik.isValid || !formik.dirty || isLoading}
          >
            {isLoading ? 'Loading' : 'Submit'}
          </Button>

          <Link to="/signup">Sign Up</Link>
        </form>
      </S.Wrapper>
    </S.ContainerWrapper>
  );
};
