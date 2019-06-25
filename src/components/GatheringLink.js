import React from 'react'
import { Link } from 'gatsby'

const GatheringLink = ({ gathering }) => (
  <div>
    <Link to={gathering.frontmatter.path}>
      {gathering.frontmatter.title} ({gathering.frontmatter.date})
    </Link>
  </div>
)

export default GatheringLink
