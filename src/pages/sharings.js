import React from 'react'
import Layout from 'components/Layout'
import SharingLink from 'components/SharingLink'
import { graphql } from 'gatsby'

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  const Sharings = edges
    .filter(edge => edge.node.frontmatter.addToIndex)
    .map(edge => <li key={edge.node.id}><SharingLink key={edge.node.id} sharing={edge.node} /></li>)

  return (
    <Layout fullMenu>
      <article id="main">
        <header>
          <h2>Sharings</h2>
        </header>
        <section className="wrapper style5">
          <div className="inner">
            <h3>Sharings</h3>
            <ul>
              {Sharings}
            </ul>
          </div>
        </section>
      </article>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [ frontmatter___date ] },
      filter: { frontmatter: { type: { eq: "sharing" } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            path
            title
            addToIndex
          }
        }
      }
    }
  }
`
