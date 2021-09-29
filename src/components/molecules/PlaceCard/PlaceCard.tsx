import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { IPlace } from 'app/types';
import { AppNavigationProps } from 'app/navigation';
import {
  Wrapper,
  CardText,
  CardTextBold,
  CardHeader,
  CardHeaderLayoutMark,
  CardHeaderAccentMark,
  CardBody,
  CardImage,
  CardButton,
  CardButtonText
} from './PlaceCard.styles';

export const PlaceCard: FC<IProps> = (props) => {
  const { place } = props;
  const navigation = useNavigation<AppNavigationProps['navigation']>();
  return (
    <Wrapper>
      <CardHeader>
        <CardHeaderAccentMark />
        <CardHeaderLayoutMark />
      </CardHeader>
      <CardBody>
        <CardText>
          <CardTextBold>Company:</CardTextBold> {place.company}
        </CardText>
        <CardText>
          <CardTextBold>Name:</CardTextBold> {place.name}
        </CardText>
        <CardText>
          <CardTextBold>Country:</CardTextBold> {place.location.country}
        </CardText>
        <CardText>
          <CardTextBold>City:</CardTextBold> {place.location.city}
        </CardText>
        {place?.photoUrl && <CardImage source={{ uri: place.photoUrl }} />}
        <CardButton
          onPress={() =>
            navigation.navigate('Places', {
              screen: 'Detail',
              params: { placeId: place.id }
            })
          }
        >
          <CardButtonText>Open</CardButtonText>
        </CardButton>
      </CardBody>
    </Wrapper>
  );
};

interface IProps {
  place: IPlace;
}
