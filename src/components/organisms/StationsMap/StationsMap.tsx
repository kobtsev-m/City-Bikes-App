import React, { FC } from 'react';
import { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { truncate } from 'lodash';
import { IPlaceDetails } from 'app/types';
import { AppNavigationProps } from 'app/navigation';
import {
  StyledMapView,
  MarkerText,
  MarkerTextBold,
  CalloutContainer,
  MarkerButton
} from './StationsMap.styles';

export const StationsMap: FC<IProps> = (props) => {
  const { activePlace } = props;
  const navigation = useNavigation<AppNavigationProps['navigation']>();
  return (
    <StyledMapView
      height={400}
      provider={PROVIDER_GOOGLE}
      region={{
        latitude: activePlace.location.latitude,
        longitude: activePlace.location.longitude,
        latitudeDelta: 0.15,
        longitudeDelta: 0.15
      }}
    >
      {activePlace.stations.slice(0, 10).map((station, i) => (
        <Marker
          key={i}
          coordinate={{
            latitude: station.latitude,
            longitude: station.longitude
          }}
        >
          <Callout
            tooltip
            onPress={() =>
              navigation.navigate('Places', {
                screen: 'Station',
                params: { placeId: activePlace.id, stationId: station.id }
              })
            }
          >
            <CalloutContainer>
              <MarkerText>
                <MarkerTextBold>Address:</MarkerTextBold>{' '}
                {truncate(station.name, { length: 24 })}
              </MarkerText>
              <MarkerText>
                <MarkerTextBold>Free bikes:</MarkerTextBold>{' '}
                {station.free_bikes}
              </MarkerText>
              <MarkerText>
                <MarkerTextBold>Empty slots:</MarkerTextBold>{' '}
                {station.empty_slots}
              </MarkerText>
              <MarkerButton title='Open' onPress={() => {}} />
            </CalloutContainer>
          </Callout>
        </Marker>
      ))}
    </StyledMapView>
  );
};

interface IProps {
  activePlace: IPlaceDetails;
}
