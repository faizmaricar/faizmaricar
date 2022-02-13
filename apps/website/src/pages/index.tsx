import React from 'react';
import { Row } from '@faizmaricar/react-ui';

import { About, Blogs, Twitch, SEO } from '../components';

export function Index() {
  return (
    <>
      <SEO />
      <Row>
        <About />
        <Twitch />
      </Row>
      <Blogs />
    </>
  );
}

export default Index;
