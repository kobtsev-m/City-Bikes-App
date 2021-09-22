import React, { FC } from 'react';
import { IPlace } from 'src/types';
import { Wrapper, CardText } from './PlaceCard.styles';

export const PlaceCard: FC<IProps> = (props) => {
  const { place } = props;
  return (
    <Wrapper>
      <CardText>Company: {place.company}</CardText>
      <CardText>Name: {place.name}</CardText>
      <CardText>Country: {place.location.country}</CardText>
      <CardText>City: {place.location.city}</CardText>
    </Wrapper>
  );
};

interface IProps {
  place: IPlace;
}
