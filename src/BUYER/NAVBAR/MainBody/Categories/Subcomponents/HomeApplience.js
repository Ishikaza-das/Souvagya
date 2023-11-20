import { useState } from "react";
import HomesAppliances from "./HomeAppliance.json";
import "./Comp-style/Man.css";
import { AiFillHeart } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

// const addToCart = () => {
//   console.log('Add to Cart');
// }

const buyNow = () => {
  console.log('Buy Now');
}

const HomeApplience = () => {
  const [cart, setCart] = useState([]);
  
  const [selectedItemId, setSelectedItemId] = useState(null);

  const toggleSecondDiv = (itemId) => {
    setSelectedItemId(itemId === selectedItemId ? null : itemId);
  };

  const close = () => {
    setSelectedItemId(null);
  }

  const addToCart = (man) => {
    setCart([...cart, man]);
  };



  return (
    <>
      <div className='Man-section' >
        {HomesAppliances.map((homea,index) => {
          return (
            <>
              <div className='Man' key={homea.id}>
                <div className='man-section' onClick={() => toggleSecondDiv(homea.id)} >
                  <img src={homea.image} alt="img"  />
                  <div className='tittle'>
                    <h5>{homea.name} </h5>
                    <h6>{homea.price}<span className="like"> <AiFillHeart /> </span></h6>
                    
                  </div>
                </div>
              </div>
              {selectedItemId === homea.id && (
                <div className="test" >
                  {/* Image carousel */}
                  <div className="image-carousel">
                    <Slider {...settings} className="slider" key={index}>
                      <div className="sliders">
                        <img src={homea["thubnail-1"]} alt="img" />
                      </div>
                      <div className="sliders">
                        <img src={homea["thubnail-2"]} alt="img" />
                      </div>
                      <div className="sliders">
                        <img src={homea["thubnail-3"]} alt="img" />
                      </div>
                    </Slider>

                    <h4 className="product-name">{homea.name}</h4>

                    {/* Buttons for Add to Cart and Buy Now */}
                    <div className="buttons">
                    <button onClick={buyNow} className="Button">Buy Now</button>
                      <button onClick={() => addToCart(homea)} className="button type1">
                      <div className="btn-txt">Add to cart</div>
                      </button>
                      <h3  onClick={close}> <ImCancelCircle /></h3>
                    </div>
                  </div>
                </div>
              )}
            </>
          );
        })}
      </div>
    </>
  )
}

export default HomeApplience

