import React from 'react';
import { Page, Header, Container } from '@faizmaricar/react-ui';

/* eslint-disable-next-line */
export interface LayoutProps {
  children?: React.ReactNode;
}

export function Layout(props: LayoutProps) {
  return (
    <Page>
      <Header brand="Faiz Maricar" />
      <Container>{props.children}</Container>
    </Page>
  );
}

export default Layout;
