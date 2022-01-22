import React from 'react';
import {
  ThemeProvider,
  GlobalStyles,
  Page,
  Header,
} from '@faizmaricar/react-ui';

export function wrapPageElement({ element }) {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Page>
        <Header brand="Faiz Maricar" />
        {element}
      </Page>
    </ThemeProvider>
  );
}
