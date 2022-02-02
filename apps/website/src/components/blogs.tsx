import React from 'react';
import { Card, Row, Column } from '@faizmaricar/react-ui';
import { useBlog } from '../hooks'; /* eslint-disable-next-line */
import { Link } from 'gatsby';

export function Blogs() {
  const blogs = useBlog();
  return (
    <>
      <h2>Latest Blog</h2>
      <Row>
        {blogs.map(({ title, image, slug }) => (
          <Column key={title} xs={4} sm={4} md={4} lg={3} xl={3}>
            <Card key={title}>
              <Link to={`blog/${slug}`}>
                <Card.Image src={image} alt={title} />
                <Card.Title>{title}</Card.Title>
              </Link>
            </Card>
          </Column>
        ))}
      </Row>
    </>
  );
}

export default Blogs;
