import styled from 'styled-components/native';
import { DefaultTheme } from 'styled-components';
import { rgba } from 'polished';

export const CustomButtonWrapper = styled.TouchableHighlight.attrs<CustomButtonProps>(
  (props) => ({
    underlayColor: rgba(props.theme.color[props.background], 0.7)
  })
)<CustomButtonProps>`
  display: flex;
  align-items: center;
  background-color: ${({ theme, background }) => theme.color[background]};
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 20px 30px;
`;

export const CustomButtonText = styled.Text<CustomButtonTextProps>`
  color: ${({ theme, color }) =>
    color ? theme.color[color] : theme.color.background};
  font-family: 'Montserrat_400Regular';
  font-size: 16px;
`;

export interface CustomButtonProps {
  background: keyof DefaultTheme['color'];
}

export interface CustomButtonTextProps {
  color?: keyof DefaultTheme['color'];
}
