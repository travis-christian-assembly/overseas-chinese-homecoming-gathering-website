const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const gatheringTemplate = path.resolve('src/templates/GatheringTemplate.js')

  return graphql(`
    {
      allMarkdownRemark{
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: gatheringTemplate,
        context: {}  // additional data can be passed via context
      })
    })
  })
}
