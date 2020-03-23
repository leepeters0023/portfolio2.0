import React from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom' 

// if route does not = 'home', 'home' button is displayed in nav
function Header() {
  {!Route path={'/Home'?
  return (
    <div id="header">
      <div id='headerButtons'>
        <Link to={'/WebDev'}>
          <button className="headerButton">Web Dev</button>
        </Link>
        <Link to={'/design'}>
          <button className="headerButton">Design</button>
        </Link>
      </div>
    </div>
  ) : 
  return (
    <div id="header">
      <div id='headerButtons'>
        {!Route path={'/Home'}}
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
}

export default Header