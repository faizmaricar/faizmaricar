import React from 'react';
import { Row, Column } from '@faizmaricar/react-ui';
import About from '../components/about';

export function Index() {
  return (
    <Row>
      <Column xs={4} sm={8} md={8} lg={6} xl={6}>
        <About />
      </Column>
    </Row>
  );
}

export default Index;
