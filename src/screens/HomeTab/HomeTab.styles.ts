import styled from 'styled-components/native';

export const HomeTitleBlock = styled.View`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.layout};
`;

export const HomeTitle = styled.Text`
  color: ${({ theme }) => theme.color.font};
  font-family: 'OpenSans_800ExtraBold';
  font-size: 20px;
  text-align: center;
`;
