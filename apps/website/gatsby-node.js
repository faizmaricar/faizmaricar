const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              description
              date(formatString: "dddd, D MMMM yyyy")
              image
              slug
            }
            content: html
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const blogPostTemplate = path.resolve(`src/templates/blog-template.tsx`);
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { slug } = node.frontmatter;
    createPage({
      path: `blog/${slug}`,
      component: blogPostTemplate,
      context: {
        ...node.frontmatter,
        content: node.content,
      },
    });
  });
};
