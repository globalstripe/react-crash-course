import React from 'react'
import BitMovinPlayer from '../BitMovinPlayer'
import Preview from '../assets/video/24fps.mp4'
// https://www.npmjs.com/package/react-player
import ReactPlayer from 'react-player'
// https://video-react.js.org/
import { Player } from 'video-react';

import "../../../node_modules/video-react/dist/video-react.css"; // import css


function Videos() {
  return (
    <React.Fragment>
      <div style={VideoPageStyle}>
      <h1>Videos</h1>
      <p>Here's you daily video playlist</p>
      <hr></hr>
      
      <h1>24fps Video 1</h1>
      <video id='video1' src={Preview} autoPlay='false' controls='true' loop='true' style={VideoStyle}></video>
      <div id='player'></div>

      <h1>Sintel video-react player</h1>
      <Player
      playsInline
      poster="/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />

<h1>Sintel react-player</h1>
      <ReactPlayer url='https://media.w3.org/2010/05/sintel/trailer_hd.mp4' playing  loop controls/>
      <div id='player'></div>

     

      </div>
      

    </React.Fragment>

  )
}


const VideoPageStyle = {
  textAlign: 'center',
  padding: '10px'
}

const VideoStyle = {
background: '#125fff',
color: '#fff',
border: 'none',
padding: '5px 10px',
height: '250px',
width: '400px',
float: 'centre'
}

export default Videos;
