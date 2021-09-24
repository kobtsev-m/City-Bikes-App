import styled from 'styled-components/native';
import { rgba } from 'polished';

export const Wrapper = styled.SafeAreaView`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  background-color: ${({ theme }) => theme.color.layout};
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme }) => rgba(theme.color.font, 0.1)};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.color.font};
  font-size: 15px;
  text-transform: uppercase;
`;
