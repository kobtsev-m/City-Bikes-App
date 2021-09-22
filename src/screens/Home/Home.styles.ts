import styled, { css } from 'styled-components/native';

const borderCss = css`
  border-width: 1px;
  border-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 20px;
`;

export const HomeTitle = styled.Text`
  color: white;
  font-size: 20px;
  text-align: center;
  ${borderCss};
`;
