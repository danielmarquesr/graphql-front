import styled from 'styled-components';
import theme from 'src/theme';
import { TextProps } from './Text';

const getFontSize = (variant: TextProps['variant']) =>
  ({
    title: theme.font.size.xlarge,
    subtitle: theme.font.size.large,
    normal: theme.font.size.medium,
  }[variant || 'normal']);

const getFontWeight = (variant: TextProps['variant']) =>
  ({
    title: theme.font.weight.bolder,
    subtitle: theme.font.weight.bold,
    normal: theme.font.weight.normal,
  }[variant || 'normal']);

export const Wrapper = styled.div<{
  variant: TextProps['variant'];
  weight: TextProps['weight'];
}>`
  ${({ variant, weight }) => `
    font-size: ${getFontSize(variant)};
    font-weight: ${weight || getFontWeight(variant)};
  `}
`;
