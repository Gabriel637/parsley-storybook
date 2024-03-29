import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { PurpleRain } from '../src/themes/index';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

 export const decorators = [
  (Story) => {
    return (
      <ThemeProvider theme={PurpleRain}>
        <Story />
        <Normalize/>
    </ThemeProvider>
    )
  }
];
