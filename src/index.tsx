import { registerRootComponent } from 'expo';
import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { store } from 'app/store';
import { Container, Header, Layout } from 'app/components/template';
import { Home } from 'app/screens';

const Index: FC = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Header />
        <Container>
          <Home />
        </Container>
      </Layout>
    </Provider>
  );
};

registerRootComponent(Index);
