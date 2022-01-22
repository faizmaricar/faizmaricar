import React from 'react';
import {
  ThemeProvider,
  GlobalStyles,
  Page,
  Header,
  Container,
} from '@faizmaricar/react-ui';

export function wrapPageElement({ element }) {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Page>
        <Header brand="Faiz Maricar" />
        <Container>{element}</Container>
      </Page>
    </ThemeProvider>
  );
}
