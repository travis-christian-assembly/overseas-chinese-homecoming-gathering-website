import React from 'react'
import Layout from 'components/Layout'
import { graphql } from 'gatsby'

// `data` is injected by the GraphQL query at the bottom
export default function SharingTemplate({ data }) {
  const { markdownRemark } = data  // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout fullMenu>
      <article id="main">
        <header>
          <h2>Sharings</h2>
        </header>
        <section className="wrapper style5">
          <div className="inner">
            <section>
              <header>
                <p>{frontmatter.date}</p>
                <h2>{frontmatter.title}</h2>
                <p>{frontmatter.description}</p>
              </header>
            </section>
            <hr />
            <div dangerouslySetInnerHTML={{ __html: html }}/>
          </div>
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
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
      html
    }
  }
`
