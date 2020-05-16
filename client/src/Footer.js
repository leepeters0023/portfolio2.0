import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>

      <div id='footer'>
        <a href='mailto: lpeters0023@gmail.com?Subject=Hello!' target="_blank">
          <button id="footerButton">Say<strong> Hi</strong></button>
        </a>
        <div id='footerLogos'>
          <a href='https://linkedin.com/in/leepeters23/'>
            <img src='Images/linkedin.svg' alt='linkedIn logo' target="_blank" className='logo'></img>
          </a>
          <a href='https://github.com/leepeters0023'>
            <img src='Images/github.svg' alt='github logo' target="_blank" className='logo'></img>
          </a>
        </div>
      </div>

      <div id="mobile-footer-container">
        <Link to={'/WebDev'}>
          <button className="mobile-footer-button">Web Dev</button>
        </Link>
        <Link to={'/design'}>
          <button className="mobile-footer-button">Design</button>
        </Link>
        <Link to={'/'}>
        <img className="mobile-footer-logo" src='Images/home-alt.svg' alt=''></img>
        </Link>
        <div id="mobile-footer-logo-div">
        <a href='mailto: lpeters0023@gmail.com?Subject=Hello!' target="_blank">
          <img className="mobile-footer-logo" src='Images/envelope.svg' alt=''></img>
        </a>
        <a href='https://linkedin.com/in/leepeters23/'>
          <img className="mobile-footer-logo" src='Images/linkedin-in.svg' alt='' target="_blank"></img>
        </a>
        <a href='https://github.com/leepeters0023'>
          <img className="mobile-footer-logo" src='Images/github-alt.svg' alt=''target="_blank"></img>
        </a>
        </div>
      </div>

    </div>
  )
}

export default Footer