import React from 'react'
import logo from '../assets/images/FolkArt.jpg'



function About() {
  return (
    <React.Fragment>
      <div style={aboutStyle}>
      <h3>About</h3>
      <hr></hr>
      <br></br>

      <p>This is the TodoList app v1.0.0. It is part of a React crash course</p>
      <hr></hr>
      <br></br>
      <a href="https://www.w3schools.com">
      <img src={logo} alt='OK' style={imgStyle}></img></a>
      <br></br><hr></hr>
      </div>
    </React.Fragment>
  )
}

const aboutStyle = {
  textAlign: 'center',
  padding: '10px'
}

const imgStyle = {
  background: '#125fff',
  color: '#fff',
  border: 'none',
  padding: '5px 10px',
  borderRadius: '20%',
  height: '250px',
  width: '400px',
  float: 'centre'
}

export default About;