import React, { FC, useEffect } from 'react';
import { FlatList } from 'react-native';
import { Box } from 'app/components/atoms';
import { PlaceCard } from 'app/components/molecules';
import { useAppActions, useAppSelector } from 'app/hooks';

export const PlaceList: FC = () => {
  const { places } = useAppSelector((state) => state.places);
  const { fetchPlaces } = useAppActions();

  useEffect(() => {
    fetchPlaces();
  }, []);

  if (!places.length) {
    return null;
  }

  return (
    <FlatList
      data={places.slice(0, 30)}
      renderItem={({ item }) => (
        <Box width={100} pb={10}>
          <PlaceCard place={item} />
        </Box>
      )}
    />
  );
};
