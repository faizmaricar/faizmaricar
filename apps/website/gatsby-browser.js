import React from 'react';
import { ThemeProvider, GlobalStyles } from '@faizmaricar/react-ui';

export function wrapPageElement({ element }) {
  return (
    <ThemeProvider>
      <GlobalStyles />
      {element}
    </ThemeProvider>
  );
}
