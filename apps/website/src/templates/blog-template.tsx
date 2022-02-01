import React from 'react';
import parser from 'html-react-parser';

export function BlogTemplate({ pageContext }) {
  const { title, description, date, content } = pageContext;
  const displayDate = new Date(date).toLocaleString('en-UK', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return (
    <>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <h3>{displayDate}</h3>
      {parser(content)}
    </>
  );
}

export default BlogTemplate;
