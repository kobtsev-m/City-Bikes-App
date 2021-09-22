import React, { FC, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import axios from 'axios';
import { IPlace } from 'app/types';
import { Box } from 'app/components/atoms';
import { PlaceCard } from 'app/components/molecules';

export const PlaceList: FC = () => {
  const [places, setPlaces] = useState<IPlace[]>([]);

  useEffect(() => {
    axios
      .get<{ networks: IPlace[] }>('http://api.citybik.es/v2/networks')
      .then(({ data }) => setPlaces(data.networks));
  }, []);

  if (!places.length) {
    return null;
  }

  return (
    <FlatList
      columnWrapperStyle={{ marginHorizontal: -10 }}
      data={places.slice(0, 30)}
      numColumns={2}
      renderItem={({ item }) => (
        <Box width={50} p={10}>
          <PlaceCard place={item} />
        </Box>
      )}
    />
  );
};
