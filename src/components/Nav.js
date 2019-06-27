import React from 'react'
import { Link } from 'gatsby'

export default function Nav({ onMenuToggle = () => {} }) {
  return (
    <nav id="nav">
      <ul>
        <li className="special">
          <a
            href="#menu"
            onClick={e => {
              e.preventDefault()
              onMenuToggle()
            }}
            className="menuToggle"
          >
            <span>Menu</span>
          </a>
          <div id="menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/gatherings">Gatherings</Link>
              </li>
              <li>
                <Link to="/sharings">Sharings</Link>
              </li>
              <li>
                <Link to="/giving">Giving</Link>
              </li>
              <li>
                <a href="https://www.flickr.com/photos/182245855@N04/albums" target="_blank" rel="noopener noreferrer">Gallery</a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCOff0cemmvakSbkV4HhNzbA/live" target="_blank" rel="noopener noreferrer">Live Stream</a>
              </li>
            </ul>
            <a
              className="close"
              onClick={e => {
                e.preventDefault()
                onMenuToggle()
              }}
              href="#menu"
            >
              {''}
            </a>
          </div>
        </li>
      </ul>
    </nav>
  )
}
