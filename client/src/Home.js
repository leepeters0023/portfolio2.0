import React from 'react'
import { Link } from 'react-router-dom'

function Home(props) {
  return (
    <div id='homeMain'>
      <div id='homeLanding'>
      <div id="homePortrait">
      <a href="https://imgur.com/fL7xqIK"><img src="https://i.imgur.com/fL7xqIK.jpg?1" title="source: imgur.com" /></a>
         </div>
         <div id='howdy'>
        <h1>Howdy</h1>
        </div>
      </div>
      
      <div id='homeAbout'>
        <h2>I'm Lee</h2>
        <p id='aboutP'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>

      <div id='homeSkills'>
        <h2>Skills</h2>
          <h3>Web Development</h3>
          <ul>
            <li>Primary programming language: JavaScript</li>
            <li>Backend: Node.js, Express.js</li>
            <li>Frontend: React, CSS, HTML </li>
            <li>Database: MongoDB </li>
            <li>Version control: Git / Github </li>
          </ul>
          <h3>Design</h3>
          <ul>
            <li>Adobe InDesign</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
          </ul>
          <h3>Platforms</h3>
          <ul>
            <li>Hubspot CRM</li>
            <li>Zoho CRM</li>
            <li>Shopify</li>
            <li>Quickbooks</li>
          </ul>
      </div>

      <div id='homeCallToAction'>
        <h3>Let's build beautiful, meaningful things together</h3>
      </div>
    </div>
  ) // link tags function the same way as anchor tags in that we must wrap things in them 
}

export default Home; 
