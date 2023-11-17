import React from 'react';

const Rectangle118 = () => {
  const rectangleStyle = {
  
    position: 'absolute',
    width: '548px',
    bottom:'550px',
    height: '246px',
    left: '342px',
    top: '1145px',
    background: '#FFFFFF',
    boxShadow: '0px 4px 30px 3px rgba(0, 0, 0, 0.42)',
    borderRadius: '17px',
    overflow: 'hidden',
  };

  const headingStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '20px',
    color: 'black',
  };

  const reviewStyle = {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '26px',

    letterSpacing: '0.02em',
    color: 'black',
    marginLeft: '20px',
    marginTop: '5px',
  };

  const lineStyle = {
    border: '1px solid #000000',
    width: '508px',
    left:'12px'
  };

  return (
    <div style={rectangleStyle}>
      <h1 style={headingStyle}>Reviews</h1>
      <div>
        <p style={reviewStyle}>#Review1</p>
        <div style={lineStyle}></div>
        <p style={reviewStyle}>#Review2</p>
        <div style={lineStyle}></div>
        <p style={reviewStyle}>#Review3</p>
        <div style={lineStyle}></div>
        {/* Add more reviews and lines as needed */}
      </div>
      
    </div>
  );
};

export default Rectangle118;
