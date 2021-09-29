import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export const DetailHeader = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

export const DetailTitle = styled.Text`
  flex: 1;
  color: ${({ theme }) => theme.color.font};
  font-family: 'OpenSans_700Bold';
  font-size: 30px;
`;

export const DetailText = styled.Text`
  color: ${({ theme }) => theme.color.font};
  font-family: 'OpenSans_400Regular';
  font-size: 20px;
`;

export const DetailIcon = styled(MaterialIcons)``;
