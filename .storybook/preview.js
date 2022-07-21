import React from 'react';
import { ThemeProvider } from 'styled-components';
import { addDecorator } from '@storybook/react';
import { Normalize } from 'styled-normalize';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const theme = {
  type: 'dark',
  colors: {
    primary: '#DF2935',
    secondary: '#DF2935',
    background: '#333',
    text: '#fff',
  }};

 export const decorators = [
  (Story) => {
    return (
      <ThemeProvider theme={theme}>
        <Story />
        <Normalize/>
    </ThemeProvider>
    )
  }
];
/*
const decorator = [
  (Story) => {
    return (
      <ThemeProvider theme={{
        type: 'dark',
        colors: {
          primary: '#222',
          secondary: '#DF2935',
          background: '#333',
          text: '#fff',
        }}}>
        <Story />
        <Normalize />
    </ThemeProvider>
    )
  }
];

export default decorator */