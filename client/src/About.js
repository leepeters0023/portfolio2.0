import React from 'react'
import { Link } from 'react-router-dom'

function About(props) {
  return(
    <div>
      <h1>This is the about page</h1>
      <Link to={'/'}> 
        <button>Home</button>
      </Link>
    </div>
  ) // link tags function the same way as anchor tags in that we must wrap things in them 
} 

export default About; 
