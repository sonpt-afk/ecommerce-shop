import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import shoe1 from "~/assets/images/slider6.jpg"
import shoe4 from "~/assets/images/slider4.jpg"
import shoe5 from "~/assets/images/slider5.jpg"
const SlideShow = () => {
  const slideImages = [
    {
      url: shoe1,
    },
    {
      url: shoe4,
    },
    {
      url: shoe5,
    },
  ];
  const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
  }

  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
  }
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index} className='img-slider'>
            <div style={{ 'backgroundImage': `url(${slideImage.url})` }} className='img-slider-item'>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  )
}

export default SlideShow