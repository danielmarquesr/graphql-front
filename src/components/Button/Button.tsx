import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import * as S from './Button.styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | string;
}

export const Button = ({
  id,
  type = 'button',
  disabled,
  children,
}: ButtonProps) => (
  <S.Button id={id} type={type} disabled={disabled}>
    {children}
  </S.Button>
);
