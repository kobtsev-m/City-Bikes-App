import styled, { css } from 'styled-components/native';
import { DefaultTheme } from 'styled-components';
import { rgba } from 'polished';

export const CustomButtonWrapper = styled.TouchableHighlight.attrs(
  (props) => ({
    underlayColor: rgba(props.theme.color.font, 0.7)
  })
)<CustomButtonProps>`
  display: flex;
  align-items: center;
  background-color: ${({ theme, background }) =>
    background ? theme.color[background] : theme.color.font};
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 20px 30px;
`;

export interface CustomButtonProps {
  background?: keyof DefaultTheme['color'];
}

export const CustomButtonText = styled.Text<CustomButtonTextProps>`
  color: ${({ theme, color }) =>
    color ? theme.color[color] : theme.color.background};
`;

export interface CustomButtonTextProps {
  color?: keyof DefaultTheme['color'];
}
