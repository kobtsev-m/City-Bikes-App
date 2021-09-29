import React, { FC, useEffect } from 'react';
import { useAppActions, useAppSelector } from 'app/hooks';
import { PlacesNavigationProps } from 'app/navigation';
import { Layout } from 'app/components/template';
import { ClassicLoader } from 'app/components/atoms';
import { StationText } from './StationOrder.styles';

export const StationOrder: FC<IProps> = (props) => {
  const { route } = props;
  const { placeId, stationId } = route.params;
  const { activeStation } = useAppSelector((state) => state.places);
  const { fetchActiveStation } = useAppActions();

  useEffect(() => {
    fetchActiveStation(placeId, stationId);
  }, []);

  if (!activeStation || activeStation.id !== stationId) {
    return (
      <Layout>
        <ClassicLoader />
      </Layout>
    );
  }
  return (
    <Layout>
      <StationText>Name: {activeStation.name}</StationText>
      <StationText>Empty slots: {activeStation.empty_slots}</StationText>
    </Layout>
  );
};

interface IProps {
  route: PlacesNavigationProps<'Station'>['route'];
}
