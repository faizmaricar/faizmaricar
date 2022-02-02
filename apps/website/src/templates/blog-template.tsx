import React from 'react';
import parser from 'html-react-parser';
import { PageTitle, PageDescription } from '@faizmaricar/react-ui';

export function BlogTemplate({ pageContext }) {
  const { title, description, date, image, content } = pageContext;
  return (
    <div style={{ padding: '16px 0' }}>
      <PageTitle>{title}</PageTitle>
      <PageDescription>{description}</PageDescription>
      <h3>{date}</h3>

      <img style={{ width: '100%' }} src={image} alt={title} />
      {parser(content)}
    </div>
  );
}

export default BlogTemplate;
