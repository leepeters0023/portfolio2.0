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
        <p id='aboutP'>Thanks for stopping by, I am a creative problem solver who enjoys using new technology to nerd out on ways to make things more efficient and look great. I’ve always sought the “Why” behind things and consider myself a lifelong learner in constant pursuit of perfecting my craft. When not coding or designing, I can be found in the mountains out for a run or ski depending on the season.  </p>
      </div>

      <div id='homeSkills'>
        <img id='owl'src='Images/owl.svg'></img>
        <div>
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
      </div>

      <div id='homeCallToAction'>
        <h3>Let's build beautiful, meaningful things together</h3>
      </div>
    </div>
  ) // link tags function the same way as anchor tags in that we must wrap things in them 
}

export default Home; 
