import styled, { css } from 'styled-components/native';

const borderCss = css`
  border-width: 1px;
  border-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 20px;
`;

export const Body = styled.View`
  background-color: #1b1b1b;
`;

export const Header = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  background-color: #282828;
`;

export const HeaderTitle = styled.Text`
  color: #ffffff;
  font-size: 15px;
  text-transform: uppercase;
`;

export const Container = styled.View`
  height: 100%;
  padding: 30px 20px;
`;

export const MainTitle = styled.Text`
  color: white;
  font-size: 20px;
  width: 500px;
  ${borderCss};
`;

export const MainSubTitle = styled(MainTitle)`
  margin-top: 20px;
`;
