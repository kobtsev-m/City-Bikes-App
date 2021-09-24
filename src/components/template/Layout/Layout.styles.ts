import styled from 'styled-components/native';

export const Body = styled.View`
  min-height: 100%;
  background-color: ${({ theme }) => theme.color.background};
`;

export const Container = styled.View`
  padding: 20px;
`;
