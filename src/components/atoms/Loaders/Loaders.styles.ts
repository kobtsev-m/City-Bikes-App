import styled from 'styled-components/native';

export const ClassicLoader = styled.ActivityIndicator.attrs((props) => ({
  color: props.theme.color.font
}))`
  padding: 20px 0;
`;
