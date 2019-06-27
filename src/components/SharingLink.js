import React from 'react'
import { Link } from 'gatsby'

const SharingLink = ({ sharing }) => (
  <div>
    <Link to={sharing.frontmatter.path}>
      {sharing.frontmatter.title}
    </Link>
  </div>
)

export default SharingLink
