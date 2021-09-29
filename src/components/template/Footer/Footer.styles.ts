import styled from 'styled-components/native';

export const Wrapper = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  background-color: ${({ theme }) => theme.color.layout};
  padding: 10px 20px;
`;

export const FooterButton = styled.TouchableHighlight.attrs((props) => ({
  underlayColor: props.theme.color.lightGrey
}))<FooterButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 47%;
  height: 50px;
  background: transparent;
  border-radius: 10px;
`;

export const FooterButtonText = styled.Text`
  color: ${({ theme }) => theme.color.font};
  font-family: 'Montserrat_400Regular';
`;

interface FooterButtonProps {
  active?: boolean;
}
