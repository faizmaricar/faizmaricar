import React from 'react';
import { ThemeProvider, GlobalStyles } from '@faizmaricar/react-ui';

import { Layout, SEO } from './src/components';

export function wrapPageElement({ element }) {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <SEO />
      <Layout>{element}</Layout>
    </ThemeProvider>
  );
}
