import { useState } from "react";
import Mans from "./Mans.json";
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
        {Mans.map((mans,index) => {
          return (
            <>
              <div className='Man' key={mans.id}>
                <div className='man-section' onClick={() => toggleSecondDiv(mans.id)} >
                  <img src={mans.image} alt="img"  />
                  <div className='tittle'>
                    <h5>{mans.name} </h5>
                    <h6>{mans.price}<span className="like"> <AiFillHeart /> </span></h6>
                    
                  </div>
                </div>
              </div>
              {selectedItemId === mans.id && (
                <div className="test" >
                  {/* Image carousel */}
                  <div className="image-carousel">
                    <Slider {...settings} className="slider" key={index}>
                      <div className="sliders">
                        <img src={mans["thubnail-1"]} alt="img" />
                      </div>
                      <div className="sliders">
                        <img src={mans["thubnail-2"]} alt="img" />
                      </div>
                      <div className="sliders">
                        <img src={mans["thubnail-3"]} alt="img" />
                      </div>
                    </Slider>

                    <h4 className="product-name">{mans.name}</h4>

                    {/* Buttons for Add to Cart and Buy Now */}
                    <div className="buttons">
                    <button onClick={buyNow} className="Button">Buy Now</button>
                      <button onClick={() => addToCart(mans)} className="button type1">
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

