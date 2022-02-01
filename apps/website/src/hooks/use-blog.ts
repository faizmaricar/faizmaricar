import { graphql, useStaticQuery } from 'gatsby';

export interface UseBlog {
  title: string;
  description: string;
  date: string;
}

export const blogQuery = graphql`
  query Blog {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            description
            date
          }
          content: html
        }
      }
    }
  }
`;

export function useBlog(): Array<UseBlog> {
  const { allMarkdownRemark } = useStaticQuery(blogQuery);

  const { edges } = allMarkdownRemark;

  return edges.map(({ node }) => ({
    ...node.frontmatter,
    content: node.content,
  }));
}

export default useBlog;
