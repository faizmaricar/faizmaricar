import React from 'react';
import { Row } from '@faizmaricar/react-ui';

import { About, SocialMedia } from '../components';

export function Index() {
  return (
    <>
      <Row>
        <About />
        <SocialMedia />
      </Row>
      <h2>Blog</h2>
      <Row></Row>
    </>
  );
}

export default Index;
