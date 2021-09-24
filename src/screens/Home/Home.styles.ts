import styled, { css } from 'styled-components/native';
import { rgba } from 'polished';

const borderCss = css`
  border-width: 1px;
  border-color: ${({ theme }) => rgba(theme.color.font, 0.2)};
  border-radius: 10px;
  padding: 20px;
`;

export const HomeTitle = styled.Text`
  color: ${({ theme }) => theme.color.font};
  font-size: 20px;
  text-align: center;
  ${borderCss};
`;
