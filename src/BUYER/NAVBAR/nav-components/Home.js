import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./style/Home.css";
const Home = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  return (
    <div className='home-section'>
       <Slider {...settings} className='slider'>
        <div className='random'>
          <h3>Slide 1</h3>
        </div>
        <div className='random'>
          <h3>Slide 2</h3>
        </div>
        <div className='random'>
          <h3>Slide 3</h3>
        </div>
      </Slider>
    </div>
  )
 }


export default Home