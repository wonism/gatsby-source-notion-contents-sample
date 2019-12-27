const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const component = path.resolve('./src/templates/Notion.jsx');

    resolve(
      graphql(`
        {
          allNotionContent(limit: 10000) {
            edges {
              node {
                id
                internal {
                  type
                }
              }
            }
          }
        }
      `).then(({ errors, data: { allNotionContent: { edges: notions } } }) => {
        if (errors) {
          console.log(errors);
          reject(errors);
        }

        notions.forEach(({ node: { id, internal: { type } } }) => {
          if (type === 'NotionContent') {
            createPage({
              path: `/${id}`,
              component,
              context: { id },
            });
          }
        });
      })
    );
  });
};
