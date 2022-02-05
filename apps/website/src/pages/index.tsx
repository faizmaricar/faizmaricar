import React from 'react';
import { Row } from '@faizmaricar/react-ui';

import { About, Blogs } from '../components';

export function Index() {
  return (
    <>
      <Row>
        <About />
      </Row>
      <Blogs />
    </>
  );
}

export default Index;
