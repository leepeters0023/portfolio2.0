import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div id="header">
      <div id='headerButtons'>
        <Link to={'/'}>
          <button className="headerButton">Home</button>
        </Link>
        <Link to={'/WebDev'}>
          <button className="headerButton">Web Dev</button>
        </Link>
        <Link to={'/design'}>
          <button className="headerButton">Design</button>
        </Link>
      </div>
    </div>
  )
}

export default Header