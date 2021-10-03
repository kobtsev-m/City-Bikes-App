import styled from 'styled-components/native';

export const Wrapper = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.color.layout};
  border-radius: 10px;
`;

export const CardHeader = styled.View`
  position: relative;
  height: 20px;
  overflow: hidden;
`;

export const CardHeaderLayoutMark = styled.View`
  position: absolute;
  top: 20px;
  left: 0;
  width: 65%;
  height: 100px;
  background-color: ${({ theme }) => theme.color.layout};
  transform: rotate(-20deg);
`;

export const CardHeaderAccentMark = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  width: 40%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.accent};
  border-top-right-radius: 10px;
`;

export const CardBody = styled.View`
  padding: 20px;
`;

export const CardText = styled.Text`
  color: ${({ theme }) => theme.color.font};
  font-family: 'Montserrat_400Regular';
  margin-bottom: 4px;
`;

export const CardTextBold = styled.Text`
  font-family: 'Montserrat_700Bold';
`;

export const CardImage = styled.Image`
  width: 100%;
  height: 180px;
  border-radius: 10px;
  margin-top: 10px;
`;

export const CardButton = styled.TouchableHighlight.attrs((props) => ({
  underlayColor: props.theme.color.grey
}))`
  display: flex;
  align-items: center;
  width: 100%;
  background: ${({ theme }) => theme.color.lightGrey};
  border-radius: 10px;
  padding: 15px 0;
  margin-top: 10px;
`;

export const CardButtonText = styled.Text`
  color: ${({ theme }) => theme.color.font};
`;
