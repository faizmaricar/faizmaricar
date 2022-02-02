import React from 'react';
import parser from 'html-react-parser';
import { PageTitle } from '@faizmaricar/react-ui';

export function BlogTemplate({ pageContext }) {
  const { title, description, date, content } = pageContext;
  return (
    <div style={{ padding: '16px 0' }}>
      <PageTitle>{title}</PageTitle>
      <h2>{description}</h2>
      <h3>{date}</h3>
      {parser(content)}
    </div>
  );
}

export default BlogTemplate;
