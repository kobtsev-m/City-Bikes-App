import styled from 'styled-components/native';

export const Body = styled.SafeAreaView`
  position: relative;
  height: 100%;
  background-color: ${({ theme }) => theme.color.background};
`;

export const Container = styled.View`
  padding: 20px;
`;
