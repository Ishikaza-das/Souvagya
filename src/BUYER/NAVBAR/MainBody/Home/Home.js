import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import Record from "../categories.json";
import Selling from "../BestSelling.json"
import { Link } from "react-router-dom";


const settings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const Home = () => {
  return (
    <div className="slider-section">
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
        {Record.map((record) => {
          return (
            <div key={record.id}>
              <Link to={record.Link} style={{ textDecoration: "none" }}>
                <div className="section">
                  <img src={record.image} alt="img" />
                  <h4>{record.name}</h4>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
     <div className="categorie-section1">
      <h3>Best Selling</h3>
      <div className="best-selling">
        {Selling.map((selling) => {
          return(
            <div className="section1" key={selling.id} >
              <Link to="*" style={{ textDecoration: "none" }}>
                <div >
                  <img src={selling.image} alt="img" />
                  <h4>{selling.name}</h4>
                  <div className="price">
                    <h6>{selling.price}</h6>
                    <h6>{selling.discount}</h6>
                  </div>
                </div>
              </Link>
            </div>
          )
        })

        }
      </div>

     </div>
     <div className="categorie-section2">
      <h3>Hot Price</h3>
      <div className="best-selling">
        {Selling.map((selling) => {
          return(
            <div key={selling.id} className="section1">
              <Link to="*" style={{ textDecoration: "none" }}>
                <div >
                  <img src={selling.image} alt="img" />
                  <h4>{selling.name}</h4>
                  <div className="price">
                    <h6>{selling.price}</h6>
                    <h6>{selling.discount}</h6>
                  </div>
                </div>
              </Link>
            </div>
          )
        })

        }
      </div>

     </div>
    </div>
  );
};

export default Home;
