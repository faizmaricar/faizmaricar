import React from 'react';
import { ThemeProvider, GlobalStyles, Page } from '@faizmaricar/react-ui';

export function wrapPageElement({ element }) {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Page>{element}</Page>
    </ThemeProvider>
  );
}
