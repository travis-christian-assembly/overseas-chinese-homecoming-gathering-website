const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const gatheringTemplate = path.resolve('src/templates/GatheringTemplate.js')
  const sharingTemplate = path.resolve('src/templates/SharingTemplate.js')

  function createPageForPageType(node, type, template) {
    if (type == node.frontmatter.type) {
      createPage(
        {
          path: node.frontmatter.path,
          component: template,
          context: {}  // additional data can be passed via context
        }
      )
    }
  }

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
          createPageForPageType(node, 'gathering', gatheringTemplate)
          createPageForPageType(node, 'sharing', sharingTemplate)
        }
      )
    }
  )
}
