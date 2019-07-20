import React from 'react'
import logo1 from '../assets/images/FolkArt.jpg'
import Preview from '../assets/video/24fps.mp4'

// <Slide index={6}>Video Slide <br></br><br></br><video id='video1' src={Preview} autoPlay='false' controls='true' loop='true' style={SliderImgStyle}></video>></Slide>
      

// https://www.npmjs.com/package/pure-react-carousel
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import '../../../node_modules/pure-react-carousel/dist/react-carousel.es.css';


function Carousel() {
  return (
    <React.Fragment>
      <div style={CarouselStyle}>
      <h3>Carousel</h3>
      <hr></hr>
      <br></br>

      <p>React Carousel Demo Page</p>
      <hr></hr>
      <br></br>

      <CarouselProvider
        isPlaying='True'
        naturalSlideWidth={10}
        naturalSlideHeight={6}
        visibleSlides={3}
        totalSlides={7} 
        orientation={"horizontal"}
        playDirection={"forward"}
        step={1}
        interval={6000}
      >

<Slider>
          <Slide index={0}>I am the first Slide. <br></br><br></br><img alt='' src={logo1} style={SliderImgStyle}></img></Slide>
          <Slide index={1}>I am the second Slide. <br></br> <br></br><img alt='' style={SliderImgStyle} src='https://images.idgesg.net/images/article/2019/04/google-shift-100794036-large.jpg'></img></Slide>
          <Slide index={2}>I am the third Slide.  <br></br><br></br><img alt='' style={SliderImgStyle} src='https://obrienmedia.co.uk/wp-content/uploads/2017/08/images_articles_is-your-website-using-https-google-is-dropping-support-for-http-on-chrome-from-october.jpeg'></img></Slide>
          <Slide index={3}>I am the fourth Slide. <br></br><br></br><img alt='' src={logo1} style={SliderImgStyle}></img></Slide>
          <Slide index={4}>I am the fifth Slide. <br></br> <br></br><img alt='' style={SliderImgStyle} src='https://images.idgesg.net/images/article/2019/04/google-shift-100794036-large.jpg'></img></Slide>
          <Slide index={5}>I am the Sixth Slide.  <br></br><br></br><img alt='' style={SliderImgStyle} src='https://obrienmedia.co.uk/wp-content/uploads/2017/08/images_articles_is-your-website-using-https-google-is-dropping-support-for-http-on-chrome-from-october.jpeg'></img></Slide>
          
</Slider>

        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>

      </CarouselProvider>
      <hr>
      </hr>
      </div>
    </React.Fragment>
  )
}

const CarouselStyle = {

  background: '#262626',
  color: 'white',
  textAlign: 'center',
  padding: '10px'
}

const SliderImgStyle = {
  background: '#262626',
  color: '#fff',
  border: 'none',
  padding: '5px 10px',
  borderRadius: '20%',
  height: '250px',
  width: '400px',
  float: 'centre'
}

export default Carousel;