import React from 'react';
import { Row } from '@faizmaricar/react-ui';

import { About, Blogs, Twitch } from '../components';

export function Index() {
  return (
    <>
      <Row>
        <About />
        <Twitch />
      </Row>
      <Blogs />
    </>
  );
}

export default Index;
