import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import Record from "../categories.json"
import { Link, Routes, Route } from "react-router-dom";
import Man from "../Categories/Subcomponents/Man"


const settings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const Home = () => {
  return (
      <div className="home-section">
        <Slider {...settings} className="slider">
          <div className="random">
            <h3>Slide 1</h3>
          </div>
          <div className="random">
            <h3>Slide 2</h3>
          </div>
          <div className="random">
            <h3>Slide 3</h3>
          </div>
        </Slider>
        <div className="categorie-section">
          {
            Record.map( record => {
              return(
                <div key={record.id}>
                  <Link to="/Man" style={{ textDecoration: "none" }}>
                  <div className="section">
                  <img src={record.image} alt="img" />
                  <h4>{record.name}</h4>
                  </div>
                  </Link>
                </div>
              )
            })
          }
        </div>
        <Routes>
        <Route path="/Man" element={<Man />} />

        </Routes>
      </div>
  )
}

export default Home