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
    .filter(edge => new Date() < Date.parse(edge.node.frontmatter.date))
    .map(edge => <GatheringLink key={edge.node.id} gathering={edge.node} />)

  const PastGatherings = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .filter(edge => new Date() > Date.parse(edge.node.frontmatter.date))
    .map(edge => <GatheringLink key={edge.node.id} gathering={edge.node} />)

  return (
    <Layout fullMenu>
      <article id="main">
        <header>
          <h2>Gatherings</h2>
          <p>Aliquam ut ex ut interdum donec amet imperdiet eleifend</p>
        </header>
        <section className="wrapper style5">
          <div className="inner">
            <h3>Upcoming Gatherings</h3>
            {UpcomingGatherings}

            <hr/>

            <h3>Past Gatherings</h3>
            {PastGatherings}
          </div>
        </section>
      </article>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
