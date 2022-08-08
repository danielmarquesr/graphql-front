import React, { ReactNode } from 'react';
import theme from 'src/theme';
import * as S from './Text.styles';

export interface TextProps {
  children: ReactNode | string;
  variant?: 'title' | 'subtitle' | 'normal';
  weight?: typeof theme.font.weight;
}

export const Text = ({ children, variant = 'normal', weight }: TextProps) => (
  <S.Wrapper variant={variant} weight={weight}>
    {children}
  </S.Wrapper>
);
