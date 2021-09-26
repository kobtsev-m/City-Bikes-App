import React, { FC } from 'react';
import { Body, Container } from './Layout.styles';

export const Layout: FC = ({ children }) => {
  return (
    <Body>
      <Container>{children}</Container>
    </Body>
  );
};
