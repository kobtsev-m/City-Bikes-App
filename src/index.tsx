import React from 'react';
import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { App } from 'app/components/App';

const Index = () => (
  <>
    <App />
    <StatusBar style='auto' />
  </>
);

registerRootComponent(Index);
