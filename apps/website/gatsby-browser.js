import React from 'react';
import { ThemeProvider, GlobalStyles } from '@faizmaricar/react-ui';

import { Layout, SEO } from './src/components';

export function wrapPageElement({ element, props }) {
  const { pageContext } = props;
  return (
    <ThemeProvider>
      <GlobalStyles />
      <SEO {...pageContext} />
      <Layout>{element}</Layout>
    </ThemeProvider>
  );
}
