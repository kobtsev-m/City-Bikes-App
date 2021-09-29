import React, { FC, ReactNode } from 'react';
import { AppNavigationParams } from 'app/navigation';
import { Footer } from './Footer';
import { Body, Container } from './Layout.styles';

export const Layout: FC<IProps> = (props) => {
  const { children, footer, activeTab } = props;
  return (
    <Body>
      <Container>{children}</Container>
      {footer && <Footer activeTab={activeTab} />}
    </Body>
  );
};

interface IProps {
  children: ReactNode;
  footer?: boolean;
  activeTab?: keyof AppNavigationParams;
}
