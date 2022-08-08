import styled from 'styled-components';
import { SpacerProps } from './Spacer';

export const Wrapper = styled.div<SpacerProps>`
  ${({ horizontal, vertical }) => `
    ${horizontal ? `margin-left: ${horizontal};` : ''}
    ${vertical ? `margin-top: ${vertical};` : ''}
  `}
`;
