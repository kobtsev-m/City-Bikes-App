import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: 'dark' | 'light';
    font: {
      montserrat: string;
      openSans: string;
    };
    color: {
      font: string;
      background: string;
      accent: string;
      secondary: string;
      layout: string;
      grey: string;
      lightGrey: string;
      thin: string;
    };
  }
}

const theme = {
  font: {
    montserrat: '"Montserrat", sans-serif',
    openSans: '"Open Sans", sans-serif'
  }
};

export const darkTheme: DefaultTheme = {
  ...theme,
  mode: 'dark',
  color: {
    font: '#edeff4',
    background: '#1f2128',
    accent: '#6977fd',
    secondary: '#8D754F',
    layout: '#2b2f37',
    grey: '#676b76',
    lightGrey: '#4c505b',
    thin: 'rgba(255, 255, 255, 0.1)'
  }
};

export const lightTheme: DefaultTheme = {
  ...theme,
  mode: 'light',
  color: {
    font: '#1f2128',
    background: '#f7f8fa',
    accent: '#2f987b',
    secondary: '#8D754F',
    layout: '#FFFFFF',
    grey: '#cdccda',
    lightGrey: '#f2f0fa',
    thin: 'rgba(27, 27, 27, 0.1)'
  }
};
