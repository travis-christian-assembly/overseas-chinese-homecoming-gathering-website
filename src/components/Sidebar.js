import React, { useState } from 'react'
import Nav from 'components/Nav'
import { Link } from 'gatsby'

export default function SideBar({ fullMenu }) {
  const [headerOpen, toggleHeader] = useState(false)
  return (
    <header id="header" className={`${fullMenu ? '' : 'alt'}`}>
      <h1>
        <Link to="/">OCHG</Link>
      </h1>
      <div className={`${headerOpen ? 'is-menu-visible' : ' '}`}>
        <Nav onMenuToggle={() => toggleHeader(!headerOpen)} />
      </div>
    </header>
  )
}