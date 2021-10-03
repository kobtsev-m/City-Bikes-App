import styled from 'styled-components/native';
import { CardField } from '@stripe/stripe-react-native';

export const StationText = styled.Text`
  color: ${({ theme }) => theme.color.font};
  font-family: 'Montserrat_400Regular';
  font-size: 16px;
  margin-bottom: 10px;
`;

export const CustomTextInput = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.color.grey
}))`
  color: ${({ theme }) => theme.color.font};
  background: ${({ theme }) => theme.color.layout};
  border-radius: 5px;
  font-family: 'Montserrat_400Regular';
  font-size: 16px;
  padding: 15px;
`;

export const CustomCardField = styled(CardField).attrs((props) => ({
  cardStyle: {
    backgroundColor: props.theme.color.layout,
    textColor: props.theme.color.font,
    placeholderColor: props.theme.color.grey,
    fontFamily: 'Montserrat_400Regular',
    fontSize: 16
  }
}))`
  width: 100%;
  height: 55px;
  margin: 30px 0;
`;
