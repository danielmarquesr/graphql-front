import React from 'react';
import * as S from './Spacer.styles';

export interface SpacerProps {
  vertical?: string;
  horizontal?: string;
}

export const Spacer = ({ horizontal, vertical }: SpacerProps) => (
  <S.Wrapper horizontal={horizontal} vertical={vertical} />
);
