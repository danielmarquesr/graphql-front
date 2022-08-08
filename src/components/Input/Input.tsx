import React, { InputHTMLAttributes } from 'react';
import * as S from './Input.styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = ({
  id,
  name,
  type = 'text',
  placeholder,
  onChange,
  value,
  label,
  disabled,
}: InputProps) => (
  <S.Wrapper>
    {label && <S.Label htmlFor={id}>{label}</S.Label>}

    <S.Input
      id={id}
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      disabled={disabled}
    />
  </S.Wrapper>
);
