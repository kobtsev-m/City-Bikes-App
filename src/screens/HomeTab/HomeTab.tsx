import React, { FC } from 'react';
import { Box } from 'app/components/atoms';
import { PlaceList } from 'app/components/organisms';
import { Layout } from 'app/components/template';
import { HomeTitle, HomeTitleBlock } from './HomeTab.styles';

export const HomeTab: FC = () => {
  return (
    <Layout footer={true} activeTab='Places'>
      <HomeTitleBlock>
        <HomeTitle>Place list</HomeTitle>
      </HomeTitleBlock>
      <Box mt={10}>
        <PlaceList />
      </Box>
    </Layout>
  );
};
