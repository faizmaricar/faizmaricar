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
    const { title } = node.frontmatter;
    createPage({
      path: `blog/${title.toLowerCase().replace(' ', '-')}`,
      component: blogPostTemplate,
      context: {
        ...node.frontmatter,
        content: node.content,
      },
    });
  });
};
