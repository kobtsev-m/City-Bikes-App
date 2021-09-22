import { useActions } from 'app/hooks';
import React, { FC } from 'react';
import { Box, CustomButton } from 'app/components/atoms';
import { PlaceList } from 'app/components/organisms';
import { HomeTitle } from './Home.styles';

export const Home: FC = () => {
  const { toggleTheme } = useActions();
  return (
    <>
      <Box align='center' mb={10}>
        <CustomButton onPress={toggleTheme}>Theme toggle</CustomButton>
      </Box>
      <HomeTitle>Place list</HomeTitle>
      <Box mt={10}>
        <PlaceList />
      </Box>
    </>
  );
};
