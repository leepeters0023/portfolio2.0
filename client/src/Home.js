import React from 'react'

function Home(props) {
  return (
    <div id='home-main'>
      <div id='home-landing'>
        <div class="hello-parent">
          <svg class="hello-word" width="365" height="365" viewBox="0 0 365 365">
            <g class='letter' id="H-letter">
              <line class="H-left-stroke" x1="17" y1="0" x2="17" y2="124" stroke="#000" fill="none" stroke-width="34" />
              <line class="H-mid-stroke" x1="33" y1="62" x2="68" y2="62" stroke="#000" fill="none" stroke-width="34" />
              <line class="H-right-stroke" x1="84" y1="0" x2="84" y2="124" stroke="#000" fill="none" stroke-width="34" />
            </g>
            <g class='letter' id="E-letter">
              <line class="E-left-stroke" x1="138" y1="0" x2="138" y2="124" stroke="#000" fill="none" stroke-width="35" />
              <line class="E-top-stroke" x1="154" y1="17" x2="201" y2="17" stroke="#000" fill="none" stroke-width="34" />
              <line class="E-mid-stroke" x1="154" y1="62" x2="196" y2="62" stroke="#000" fill="none" stroke-width="34" />
              <line class="E-bottom-stroke" x1="154" y1="107" x2="201" y2="107" stroke="#000" fill="none" stroke-width="34" />
            </g>
            <g class='letter' id="L-one-letter">
              <line class="L-one-long-stroke" x1="17" y1="153" x2="17" y2="277" stroke="#000" fill="none" stroke-width="34" />
              <line class="L-one-short-stroke" x1="33" y1="260" x2="77" y2="260" stroke="#000" fill="none" stroke-width="34" />
            </g>
            <g class='letter'id="L-two-letter">
              <line class="L-two-long-stroke" x1="104" y1="153" x2="104" y2="277" stroke="#000" fill="none" stroke-width="34" />
              <line class="L-two-short-stroke" x1="120" y1="260" x2="164" y2="260" stroke="#000" fill="none" stroke-width="34" />
            </g>
            <g class='letter' id="O-letter">
              <circle class="O-stroke" cx="231" cy="215" r="48" stroke="#000" fill="none" stroke-width="31" />
            </g>
            <g class='letter' id="red-dot">
              <circle class="red-dot" cx="325" cy="260" r="20" fill="#FFFFF" stroke="none" />
              <line x1="325" y1="260" x2="325" y2="260" stroke="#FF69B4" class="red-dot" />
            </g>
          </svg>
        </div>
        <div id="home-portrait">
          <a id="home-portrait-desktop" href="https://imgur.com/jcWzmNS"><img src="https://i.imgur.com/jcWzmNS.png?2" title="source: imgur.com" /></a>
        </div>
        <img id="home-portrait-mobile" src="Images/cartoon1.svg" />
      </div>
      <div id='home-about'>
        <h2>I'm Lee</h2>
        <p id='about-p'>Thanks for stopping by. I’m a front end web developer specializing in bespoke, single origin, grass fed, gluten free, and slow roasted apps and websites.<br></br><br></br>I like to make things more efficient and look pretty using the arsenal at my disposal listed below. I’ve worked in a variety of environments, from startups to freelancing for anyone willing to support my coffee habit. When not coding or designing, I enjoy never being satisfied with my own work, photography, trail running, backcountry skiing, toast, and occasionally sharing my unpopular opinions about Vermont IPAs.<br></br><br></br>Hungry for more? Have a closer look at my work history on my LinkedIn or check out my code on Github - both linked below.</p>
      </div>
      <div id='home-skills'>
        <div id="gears">
          <svg class="svg-illu" viewBox="0 0 901.806 1201.411">
            <g>
              <circle cx="446.39" cy="943.119" r="111.367" />
              <circle fill="#FFFFFF" cx="446.39" cy="943.12" r="78.062" />
              <circle fill="none" stroke="#000000" stroke-width="25" stroke-miterlimit="10" cx="446.003" cy="943.364" r="30.407" />
              <polygon points="395.559,862.793 450.224,848.169 422.359,801.246 396.271,808.225 	" />
              <polygon points="351.454,939.176 366.078,993.841 311.509,993.128 304.53,967.04 	" />
              <polygon points="497.173,1023.266 442.508,1037.89 470.372,1084.812 496.46,1077.834 	" />
              <polygon points="541.227,947.09 526.603,892.426 581.171,893.138 588.15,919.226 	" />
              <polygon points="353.681,922.188 381.993,873.194 329.11,859.718 315.599,883.099 	" />
              <polygon points="376.504,1007.387 425.498,1035.699 386.409,1073.781 363.027,1060.27 	" />
              <polygon points="539.003,963.808 510.69,1012.803 563.573,1026.279 577.085,1002.897 	" />
              <polygon points="516.29,878.792 467.296,850.479 506.386,812.397 529.767,825.909 	" />
              <animateTransform attributeName="transform"
                attributeType="XML"
                type="rotate"
                from="0 446 943"
                to="360 446 943"
                dur="5s"
                repeatCount="indefinite" />
            </g>
            <g>
              <circle cx="637.25" cy="611.257" r="221.065" />
              <circle fill="#FFFFFF" cx="637.25" cy="611.258" r="170.05" />
              <circle fill="none" stroke="#000000" stroke-width="40" stroke-miterlimit="10" cx="640.003" cy="611.364" r="51.823" />
              <polygon points="520.69,453.546 583.968,422.525 535.886,366.294 505.688,381.098 	" />
              <polygon points="448.518,664.54 479.539,727.817 407.091,742.819 392.287,712.622 	" />
              <polygon points="753.81,768.969 690.533,799.99 738.614,856.221 768.812,841.417 	" />
              <polygon points="825.982,557.975 794.962,494.698 867.409,479.696 882.214,509.893 	" />
              <polygon points="442.931,582.028 465.739,515.35 392.878,509.895 381.994,541.716 	" />
              <polygon points="541.343,782.769 608.021,805.577 567.709,866.515 535.888,855.63 	" />
              <polygon points="831.569,640.486 808.761,707.165 881.622,712.62 892.507,680.8 	" />
              <polygon points="733.158,439.747 666.479,416.938 706.792,356.001 738.612,366.886 	" />
              <polygon points="468.256,510.983 514.501,457.808 449.062,425.308 426.992,450.685 	" />
              <polygon points="483.8,734.007 536.976,780.252 476.678,821.516 451.301,799.446 	" />
              <polygon points="806.245,711.532 759.999,764.708 825.438,797.207 847.509,771.83 	" />
              <polygon points="790.7,488.508 737.525,442.263 797.823,401 823.2,423.069 	" />
              <polygon points="446.848,659.851 441.948,589.549 372.695,612.841 375.033,646.391 	" />
              <polygon points="615.542,806.56 685.843,801.66 672.383,873.475 638.834,875.813 	" />
              <polygon points="827.652,562.665 832.553,632.966 901.806,609.675 899.468,576.125 	" />
              <polygon points="658.959,415.956 588.658,420.855 602.117,349.041 635.667,346.702 	" />
              <animateTransform attributeName="transform"
                attributeType="XML"
                type="rotate"
                from="360 640 611"
                to="0 640 611"
                dur="10s"
                repeatCount="indefinite" />
            </g>
            <g>
              <circle cx="230.003" cy="381.364" r="192.407" />
              <circle fill="#FFFFFF" cx="230.003" cy="381.364" r="148.005" />
              <polygon points="154.936,228.312 213.965,211.651 181.466,155.533 153.296,163.484 		" />
              <polygon points="60.29,397.402 76.952,456.431 12.123,458.071 4.172,429.901 		" />
              <polygon points="305.002,534.175 245.973,550.837 278.472,606.954 306.642,599.003 		" />
              <polygon points="399.476,365.394 382.814,306.365 447.643,304.725 455.594,332.895 		" />
              <polygon points="68.201,325.942 98.159,272.42 36.63,256.353 22.333,281.895 		" />
              <polygon points="121.06,513.208 174.581,543.166 130.534,589.034 104.992,574.737 		" />
              <polygon points="391.805,436.786 361.847,490.308 423.376,506.375 437.673,480.833 		" />
              <polygon points="338.946,249.521 285.425,219.562 329.472,173.694 355.014,187.991 		" />
              <polygon points="100.997,269.075 148.91,230.781 97.965,192.719 75.1,210.994 		" />
              <polygon points="79.42,462.457 117.714,510.37 59.633,536.267 41.358,513.402 		" />
              <polygon points="359.009,493.653 311.096,531.947 362.041,570.009 384.906,551.734 		" />
              <polygon points="380.586,300.271 342.292,252.358 400.373,226.461 418.648,249.326 		" />
              <polygon points="59.382,393.185 66.183,332.228 3.246,341.337 0,370.427 		" />
              <polygon points="180.866,545.184 241.824,551.985 219.066,611.367 189.976,608.121 		" />
              <polygon points="400.625,369.543 393.823,430.5 456.761,421.391 460.006,392.301 		" />
              <polygon points="279.14,217.544 218.182,210.743 240.939,151.361 270.03,154.607 		" />
              <circle fill="#FFFFFF" stroke="#000000" stroke-width="35" stroke-miterlimit="10" cx="230.003" cy="381.364" r="44.931" />
              <animateTransform attributeName="transform"
                attributeType="XML"
                type="rotate"
                from="0 230 381"
                to="360 230 381"
                dur="10s"
                repeatCount="indefinite" />
            </g>
          </svg>
        </div>
        <div>
          <h2>Skills</h2>
          <h3>Web Development</h3>
          <br></br>
          <ul>
            <li>Primary programming language: JavaScript</li>
            <li>Enough to be dangerous: Python</li>
            <li>Backend: Node.js, Express.js</li>
            <li>Frontend: React, CSS, HTML </li>
            <li>Database: GraphQL, MongoDB, Firebase</li>
            <li>Version control: Git / Github (duh) </li>
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
