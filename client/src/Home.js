import React from 'react'

function Home(props) {
  return (
    <div id='home-main'>
      <div id='home-landing'>
        <div id='home-text-greeting'>
          <h1>Hello</h1>
        </div>
        <div id="home-portrait">
        <a id="home-portrait-desktop" href="https://imgur.com/jcWzmNS"><img src="https://i.imgur.com/jcWzmNS.png?2" title="source: imgur.com" /></a>
        </div>
          <img id="home-portrait-mobile" src="Images/cartoon1.svg"/>
  
      </div>


      <div id='home-about'>
        <h2>I'm Lee</h2>
        <p id='about-p'>Thanks for stopping by. I’m a full stack web developer specializing in bespoke, single origin, grass fed, gluten free, and slow roasted apps and websites.<br></br><br></br>I like to make things more efficient and look pretty using the arsenal at my disposal listed below. I’ve worked in a variety of environments, from startups to freelancing for anyone willing to support my fancy coffee habit. When not coding or designing, I enjoy never being satisfied with my own work, photography, trail running, backcountry skiing, toast, and occasionally sharing my unpopular opinions about who makes the best beer (spoiler alert: it's not Heady Topper).<br></br><br></br>Hungry for more? Have a closer look at my work history on my LinkedIn or check out my code on Github - both linked below.</p>
      </div>

      <div id='home-skills'>
        <img id='owl' src='Images/owl.svg'></img>
        <div>
          <h2>Skills</h2>
          <h3>Web Development</h3>
          <br></br>
          <ul>
            <li>Primary programming language: JavaScript</li>
            <li>Backend: Node.js, Express.js</li>
            <li>Frontend: React, CSS, HTML </li>
            <li>Database: MongoDB, Firebase</li>
            <li>Version control: Git / Github </li>
          </ul>
          <br></br>
          <h3>Design</h3>
          <ul>
            <li>Adobe InDesign</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
            <li>Figma</li>
          </ul>
          <br></br>
          <h3>Platforms</h3>
          <ul>
            <li>Hubspot CRM</li>
            <li>Zoho CRM</li>
            <li>Shopify</li>
            <li>Google Analytics</li>
            <li>Google Tag Manager</li>
            <li>Google Maps JavaScript API</li>
            <li>Mapbox JavaScript API</li>
          </ul>
        </div>
      </div>

      <div id='home-call-to-action'>
        <h3>Let's build beautiful, meaningful things together</h3>
      </div>
    </div>
  )
}
export default Home
