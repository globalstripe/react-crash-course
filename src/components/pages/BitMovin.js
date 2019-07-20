import React from 'react'
import logo from '../assets/images/FolkArt.jpg'

function BitMovin() {
  return (
    <React.Fragment>
      <div style={BitMovinStyle}>
      <h3>BitMovin</h3>
      <hr></hr>
      <br></br>

      <p>This is the TodoList app v1.0.0. It is part of a React crash course</p>
      <hr></hr>
      <br></br>
      <img src={logo} alt='OK' style={imgStyle}></img>
      <br></br><hr></hr>
      </div>
    </React.Fragment>
  )
}

const BitMovinStyle = {
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

export default BitMovin