import React from 'react';
import { Page, Header, Body } from '@faizmaricar/react-ui';

/* eslint-disable-next-line */
export interface LayoutProps {
  children?: React.ReactNode;
}

export function Layout(props: LayoutProps) {
  return (
    <Page>
      <Header brand="Faiz Maricar" />
      <Body>{props.children}</Body>
    </Page>
  );
}

export default Layout;
