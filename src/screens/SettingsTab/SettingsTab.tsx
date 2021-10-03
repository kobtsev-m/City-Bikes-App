import React, { FC } from 'react';
import { Layout } from 'app/components/template';
import { Title } from './SettingsTab.styles';
import { useAppActions } from 'app/hooks';
import { Box, CustomButton } from 'app/components/atoms';

export const SettingsTab: FC = () => {
  const { toggleTheme } = useAppActions();
  return (
    <Layout footer activeTab='Settings'>
      <Title>SettingsTab</Title>
      <Box mt={20}>
        <CustomButton
          background='font'
          color='background'
          onPress={toggleTheme}
        >
          Theme toggle
        </CustomButton>
      </Box>
    </Layout>
  );
};
