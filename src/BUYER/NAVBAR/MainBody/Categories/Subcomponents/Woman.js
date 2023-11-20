import { useState } from "react";
import Womans from "./Womans.json";
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

const addToCart = () => {
  console.log('Add to Cart');
}

const buyNow = () => {
  console.log('Buy Now');
}

const Woman = () => {
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
        {Womans.map((womans,index) => {
          return (
            <>
              <div className='Man' key={index}>
                <div className='man-section' onClick={() => toggleSecondDiv(womans.id)} >
                  <img src={womans.image} alt="img"  />
                  <div className='tittle'>
                    <label>{womans.name} </label>
                    <p>{womans.price}<span className="like"> <AiFillHeart /> </span></p>
                    
                  </div>
                </div>
              </div>
              {selectedItemId === womans.id && (
                <div className="test" >
                  {/* Image carousel */}
                  <div className="image-carousel">
                    <Slider {...settings} className="slider" key={index}>
                      <div className="sliders">
                        <img src={womans["thubnail-1"]} alt="img" />
                      </div>
                      <div className="sliders">
                        <img src={womans["thubnail-2"]} alt="img" />
                      </div>
                      <div className="sliders">
                        <img src={womans["thubnail-3"]} alt="img" />
                      </div>
                    </Slider>

                    <h4 className="product-name">{womans.name}</h4>

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

export default Woman

