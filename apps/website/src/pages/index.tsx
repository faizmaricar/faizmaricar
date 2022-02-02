import React from 'react';
import { Row } from '@faizmaricar/react-ui';

import { About, SocialMedia, Blogs } from '../components';

export function Index() {
  return (
    <>
      <Row>
        <About />
        <SocialMedia />
      </Row>
      <Blogs />
    </>
  );
}

export default Index;
