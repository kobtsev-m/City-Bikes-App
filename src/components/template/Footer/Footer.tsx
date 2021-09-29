import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { AppNavigationParams, AppNavigationProps } from 'app/navigation';
import { FooterButton, Wrapper } from './Footer.styles';

export const Footer: FC<IProps> = (props) => {
  const { activeTab } = props;
  const navigation: AppNavigationProps['navigation'] = useNavigation();
  const theme = useTheme();
  return (
    <Wrapper>
      <FooterButton
        onPress={() => navigation.navigate('Places', { screen: 'Home' })}
        active={activeTab === 'Places'}
      >
        <Entypo
          name='home'
          size={24}
          color={theme.color[activeTab === 'Places' ? 'accent' : 'grey']}
        />
      </FooterButton>
      <FooterButton
        onPress={() => navigation.navigate('Settings')}
        active={activeTab === 'Settings'}
      >
        <Ionicons
          name='settings-sharp'
          size={24}
          color={theme.color[activeTab === 'Settings' ? 'accent' : 'grey']}
        />
      </FooterButton>
    </Wrapper>
  );
};

interface IProps {
  activeTab?: keyof AppNavigationParams;
}
