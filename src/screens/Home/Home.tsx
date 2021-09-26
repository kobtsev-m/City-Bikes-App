import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useAppActions } from 'app/hooks';
import { Box, CustomButton } from 'app/components/atoms';
import { PlaceList } from 'app/components/organisms';
import { Layout } from 'app/components/template';
import { HomeTitle } from './Home.styles';

export const Home: FC = () => {
  const navigation = useNavigation();
  const { toggleTheme } = useAppActions();
  const openContacts = () => {
    navigation.navigate('Contacts');
  };
  return (
    <Layout>
      <Box mb={10}>
        <CustomButton onPress={toggleTheme}>Theme toggle</CustomButton>
      </Box>
      <Box mb={10}>
        <CustomButton onPress={openContacts} background='accent'>
          Contact page
        </CustomButton>
      </Box>
      <HomeTitle>Place list</HomeTitle>
      <Box mt={10}>
        <PlaceList />
      </Box>
    </Layout>
  );
};
