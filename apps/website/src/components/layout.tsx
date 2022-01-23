import React from 'react';
import { Page, Header, Body } from '@faizmaricar/react-ui';
import { useSiteMetadata } from '../hooks';

/* eslint-disable-next-line */
export interface LayoutProps {
  children?: React.ReactNode;
}

export function Layout(props: LayoutProps) {
  const { defaultTitle } = useSiteMetadata();
  return (
    <Page>
      <Header brand={defaultTitle} />
      <Body>{props.children}</Body>
    </Page>
  );
}

export default Layout;
