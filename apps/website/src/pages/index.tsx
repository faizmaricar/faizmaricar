import React from 'react';
import { Card, Row, Column } from '@faizmaricar/react-ui';
import { About, SocialMedia } from '../components';
import { useBlog } from '../hooks';

export function Index() {
  const blogs = useBlog();
  return (
    <>
      <Row>
        <About />
        <SocialMedia />
      </Row>
      <h2>Latest Blog</h2>
      <Row>
        {blogs.map(({ title, image }) => (
          <Column xs={4} sm={4} md={4} lg={3} xl={3}>
            <Card key={title}>
              <Card.Image src={image} alt={title} />
              <Card.Title>{title}</Card.Title>
            </Card>
          </Column>
        ))}
      </Row>
    </>
  );
}

export default Index;
