import React, { FC, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { IPlace } from 'app/types';
import { Box } from 'app/components/atoms';
import { PlaceCard } from 'app/components/molecules';
import { PlacesService } from 'app/api';

export const PlaceList: FC = () => {
  const [places, setPlaces] = useState<IPlace[]>([]);

  useEffect(() => {
    PlacesService.getPlaces().then((data) => setPlaces(data));
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
