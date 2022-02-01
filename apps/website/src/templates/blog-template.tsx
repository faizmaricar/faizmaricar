import React from 'react';
import parser from 'html-react-parser';

export function BlogTemplate({ pageContext }) {
  const { title, description, date, content } = pageContext;
  return (
    <>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <h3>{date}</h3>
      {parser(content)}
    </>
  );
}

export default BlogTemplate;
