import React from 'react';
import Mans from "./Mans.json";
import { Link } from 'react-router-dom';
import "./Comp-style/Man.css";
import { AiFillHeart } from "react-icons/ai";

const Man = () => {
  return (
    <div className='Man-section'>
      {Mans.map((mans) => {
        return(
          <div className='Man' key={mans.id}>
            <Link to="*">
              <div className='man-section'>
                <img src={mans.image} alt="img" />
                <div className='span'>
                <h5>{mans.name} <AiFillHeart/></h5>
                <h6>{mans.price}</h6>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  )
}

export default Man

