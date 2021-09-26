import styled from 'styled-components/native';
import { DefaultTheme } from 'styled-components';

export const CustomButtonWrapper = styled.TouchableHighlight<CustomButtonProps>`
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
