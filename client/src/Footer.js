import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return(
    <div id='footer'>
      <Link id='footerLink' to={'/'}>
        <a href='mailto: lpeters0023@gmail.com?Subject=Hello!'target="_blank">
          <button id="footerButton">Say<strong> Hi</strong></button>
          </a>
      </Link>
      <div id='footerLogos'>
        <a href='https://linkedin.com/in/leepeters23/'>
        <img src='Images/linkedIn.png' alt='linkedIn logo' className='logo'></img>
        </a>
        <a href='https://github.com/leepeters0023'>
        <img src='Images/gtihub.png' alt='github logo' className='logo'></img>
        </a>
      </div>

    </div>
  )
}

export default Footer