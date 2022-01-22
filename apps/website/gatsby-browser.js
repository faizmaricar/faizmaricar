import React from 'react';
import { ThemeProvider, GlobalStyles } from '@faizmaricar/react-ui';

import { Layout } from './src/components';

export function wrapPageElement({ element }) {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Layout>{element}</Layout>
    </ThemeProvider>
  );
}
