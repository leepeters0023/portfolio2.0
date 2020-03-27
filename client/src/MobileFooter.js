import React from 'react'
import { Link } from 'react-router-dom'

function MobileFooter() {
  return (
    <div id="mobileFooterContainer">
      <Link to={'/WebDev'}>
        <button className="mobileFooterButton">Web Dev</button>
      </Link>
      <Link to={'/design'}>
        <button className="mobileFooterButton">Design</button>
      </Link>
      <a href='mailto: lpeters0023@gmail.com?Subject=Hello!' target="_blank">
        <img className="mobileFooterLogo"src='envelope.svg' alt='linkedIn logo' className='logo'></img>
      </a>
      <a href='https://linkedin.com/in/leepeters23/'>
        <img className="mobileFooterLogo" src='linked-in.svg' alt='linkedIn logo' className='logo'></img>
      </a> 
      <a href='https://github.com/leepeters0023'>
        <img className="mobileFooterLogo" src='github-alt.svg' alt='github logo' className='logo'></img>
      </a>
    </div>
  )
}

export default MobileFooter
