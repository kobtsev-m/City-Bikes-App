import React, { FC } from 'react';
import { Wrapper, Title } from './Header.styles';
import { useAppActions } from 'app/hooks';

export const Header: FC = () => {
  return (
    <Wrapper>
      <Title>Bikes rent</Title>
    </Wrapper>
  );
};
