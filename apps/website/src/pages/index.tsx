import React from 'react';
import { Row, Column, Button } from '@faizmaricar/react-ui';

import About from '../components/about';
import SocialMediaLinks from '../components/social-media-links';

export function Index() {
  return (
    <Row>
      <Column xs={4} sm={4} md={8} lg={8} xl={6}>
        <About />
      </Column>
      <Column xs={4} sm={4} md={4} lg={4} xl={6}>
        <SocialMediaLinks />
      </Column>
    </Row>
  );
}

export default Index;
