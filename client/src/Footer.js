import React from 'react'

function Footer() {
  return (
    <div id='footer'>
      <a href='mailto: lpeters0023@gmail.com?Subject=Hello!' target="_blank">
        <button id="footerButton">Say<strong> Hi</strong></button>
      </a>
      <div id='footerLogos'>
        <a href='https://linkedin.com/in/leepeters23/'>
          <img src='linkedin.svg' alt='linkedIn logo' className='logo'></img>
        </a> {/* need to find better logos */}
        <a href='https://github.com/leepeters0023'>
          <img src='github.svg' alt='github logo' className='logo'></img>
        </a>
      </div>

    </div>
  )
}

export default Footer