import React, { FC, useEffect } from 'react';
import { useTheme } from 'styled-components/native';
import { useAppActions, useAppSelector } from 'app/hooks';
import { PlacesNavigationProps } from 'app/navigation';
import { Layout } from 'app/components/template';
import { StationsMap } from 'app/components/organisms';
import { Box, ClassicLoader } from 'app/components/atoms';
import {
  DetailTitle,
  DetailText,
  DetailHeader,
  DetailIcon
} from './PlaceDetail.styles';

export const PlaceDetail: FC<IProps> = (props) => {
  const { route } = props;
  const { placeId } = route.params;
  const { activePlace } = useAppSelector((state) => state.places);
  const { fetchActivePlace } = useAppActions();
  const theme = useTheme();

  useEffect(() => {
    fetchActivePlace(placeId);
  }, []);

  if (activePlace?.id !== placeId) {
    return (
      <Layout>
        <ClassicLoader />
      </Layout>
    );
  }
  return (
    <Layout>
      <DetailHeader>
        <DetailTitle>
          {activePlace.location.city}, {activePlace.location.country}
        </DetailTitle>
        <DetailIcon name='place' size={30} color={theme.color.font} />
      </DetailHeader>
      <Box mt={10}>
        <DetailText>
          {activePlace.name}, {activePlace.company}
        </DetailText>
      </Box>
      <Box mt={30}>
        <StationsMap activePlace={activePlace} />
      </Box>
    </Layout>
  );
};

interface IProps {
  route: PlacesNavigationProps<'Detail'>['route'];
}
