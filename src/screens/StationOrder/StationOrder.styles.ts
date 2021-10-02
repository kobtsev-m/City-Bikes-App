import styled from 'styled-components/native';

export const StationText = styled.Text`
  color: ${({ theme }) => theme.color.font};
  font-family: 'Montserrat_400Regular';
  font-size: 16px;
  margin-bottom: 10px;
`;

export const CustomTextInput = styled.TextInput`
  background: #ffffff;
  border-radius: 5px;
  font-family: 'Montserrat_400Regular';
  font-size: 16px;
  padding: 15px;
`;
