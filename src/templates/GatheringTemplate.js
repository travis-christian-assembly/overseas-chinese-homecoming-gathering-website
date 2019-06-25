import React from 'react'
import Layout from 'components/Layout'
import { graphql } from 'gatsby'

// `data` is injected by the GraphQL query at the bottom
export default function GatheringTemplate({ data }) {
  const { markdownRemark } = data  // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout fullMenu>
      <article id="main">
        <header>
          <h2>{frontmatter.title}</h2>
          <p>{frontmatter.description}</p>
        </header>
        <section className="wrapper style5">
          <div className="inner" dangerouslySetInnerHTML={{ __html: html }}/>
        </section>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        path
        title
        description
      }
      html
    }
  }
`
