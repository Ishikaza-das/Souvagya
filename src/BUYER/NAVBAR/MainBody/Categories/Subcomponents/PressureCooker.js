import { useState } from "react";
import Pressurec from "./PressureCooker.json";
import "./Comp-style/Man.css";
import { AiFillHeart } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: true,
  
 
};

const addToCart = () => {
  console.log('Add to Cart');
}

const buyNow = () => {
  console.log('Buy Now');
}

const PressureCooker = () => {
  const [selectedItemId, setSelectedItemId] = useState(null);

  const toggleSecondDiv = (itemId) => {
    setSelectedItemId(itemId === selectedItemId ? null : itemId);
  };

  const close = () => {
    setSelectedItemId(null);
  }



  return (
    <>
      <div className='Man-section' >
        {Pressurec.map((pressurec,index) => {
          return (
            <>
              <div className='Man' key={index}>
                <div className='man-section' onClick={() => toggleSecondDiv(pressurec.id)} >
                  <img src={pressurec.image} alt="img"  />
                  <div className='tittle'>
                    <label>{pressurec.name} </label>
                    <p>{pressurec.price}<span className="like"> <AiFillHeart /> </span></p>
                    
                  </div>
                </div>
              </div>
              {selectedItemId === pressurec.id && (
                <div className="test" >
                  {/* Image carousel */}
                  <div className="image-carousel">
                    <Slider {...settings} className="slider" key={index}>
                      <div className="sliders">
                        <img src={ pressurec["thubnail-1"]} alt="img" />
                      </div>
                      <div className="sliders">
                        <img src={ pressurec["thubnail-2"]} alt="img" />
                      </div>
                      <div className="sliders">
                        <img src={pressurec["thubnail-3"]} alt="img" />
                      </div>
                    </Slider>

                    <h4 className="product-name">{pressurec.name}</h4>

                    {/* Buttons for Add to Cart and Buy Now */}
                    <div className="buttons">
                    <button onClick={buyNow} className="Button">Buy Now</button>
                      <button onClick={addToCart} className="button type1">
                      <div class="btn-txt">Add to cart</div>
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

export default PressureCooker

