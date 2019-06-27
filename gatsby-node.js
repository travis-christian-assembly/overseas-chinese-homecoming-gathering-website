const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const gatheringTemplate = path.resolve('src/templates/GatheringTemplate.js')
  const sharingTemplate = path.resolve('src/templates/SharingTemplate.js')

  return graphql(`
    {
      allMarkdownRemark{
        edges {
          node {
            frontmatter {
              path
              type
            }
          }
        }
      }
    }
  `).then(
    result => {
      if (result.errors) {
        return Promise.reject(result.errors)
      }

      return result.data.allMarkdownRemark.edges.forEach(
        ({ node }) => {
          if ('gathering' == node.frontmatter.type) {
            createPage(
              {
                path: node.frontmatter.path,
                component: gatheringTemplate,
                context: {}  // additional data can be passed via context
              }
            )
          }

          if ('sharing' == node.frontmatter.type) {
            createPage(
              {
                path: node.frontmatter.path,
                component: sharingTemplate,
                context: {}  // additional data can be passed via context
              }
            )
          }
        }
      )
    }
  )
}
