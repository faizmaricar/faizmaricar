import React from 'react';
import parser from 'html-react-parser';
import { PageTitle, PageDescription, PageDate } from '@faizmaricar/react-ui';

import { SEO } from '../components';
import styled from '@emotion/styled';

const Image = styled.img`
  width: 100%;
  height: 40vw;
  object-fit: cover;
  margin-bottom: 32px;
`;

export function BlogTemplate({ pageContext }) {
  const { title, description, date, image, content } = pageContext;
  return (
    <div style={{ padding: '16px 0' }}>
      <SEO {...pageContext} />
      <PageTitle>{title}</PageTitle>
      <PageDescription>{description}</PageDescription>
      <PageDate>{date}</PageDate>
      <Image src={image} alt={title} />
      {parser(content)}
    </div>
  );
}

export default BlogTemplate;
