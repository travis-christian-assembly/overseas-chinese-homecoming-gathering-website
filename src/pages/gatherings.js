import React from 'react'
import Layout from 'components/Layout'
import GatheringLink from 'components/GatheringLink'
import { graphql } from 'gatsby'

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  const UpcomingGatherings = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .filter(edge => edge.node.frontmatter.addToIndex)
    .filter(edge => new Date() < Date.parse(edge.node.frontmatter.date))
    .map(edge => <li key={edge.node.id}><GatheringLink key={edge.node.id} gathering={edge.node} /></li>)

  const PreviousGatherings = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .filter(edge => edge.node.frontmatter.addToIndex)
    .filter(edge => new Date() > Date.parse(edge.node.frontmatter.date))
    .map(edge => <li key={edge.node.id}><GatheringLink key={edge.node.id} gathering={edge.node} /></li>)

  return (
    <Layout fullMenu>
      <article id="main">
        <header>
          <h2>Gatherings</h2>
        </header>
        <section className="wrapper style5">
          <div className="inner">
            <h3>Upcoming Gatherings</h3>
            <ul>
              {UpcomingGatherings}
            </ul>

            <hr/>

            <h3>Previous Gatherings</h3>
            <ul>
              {PreviousGatherings}
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
      sort: { order: ASC, fields: [ frontmatter___date ] },
      filter: { frontmatter: { type: { eq: "gathering" } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            path
            date(formatString: "MMMM DD, YYYY")
            title
            addToIndex
          }
        }
      }
    }
  }
`
