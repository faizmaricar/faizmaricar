import React from 'react';
import parser from 'html-react-parser';
import { PageTitle, PageDescription, PageDate } from '@faizmaricar/react-ui';

export function BlogTemplate({ pageContext }) {
  const { title, description, date, image, content } = pageContext;
  return (
    <div style={{ padding: '16px 0' }}>
      <PageTitle>{title}</PageTitle>
      <PageDescription>{description}</PageDescription>
      <PageDate>{date}</PageDate>

      <img
        style={{
          width: '100%',
          height: '500px',
          objectFit: 'cover',
          marginBottom: '32px',
        }}
        src={image}
        alt={title}
      />
      {parser(content)}
    </div>
  );
}

export default BlogTemplate;
