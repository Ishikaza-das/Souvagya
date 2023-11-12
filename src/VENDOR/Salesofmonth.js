import React from 'react';


const Salesofmonth = () => {
  const containerStyle = {
    position: 'absolute',
    width: '548px',
    height: '246px',
    left: '342px',
    top: '640px',
    background: '#FFFFFF',
    boxShadow: '0px 4px 30px 3px rgba(0, 0, 0, 0.42)',
    borderRadius: '17px',
  };

  const salesTextStyle = {
    position: 'absolute',
    width: '233px',
    height: '34px',
    left: '376px',
    top: '662px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '24px',
    lineHeight: '143.5%',
    letterSpacing: '0.02em',
    color: '#C402F5',
  };

  const line18Style = {
    position: 'absolute',
    width: '145px',
    height: '0px',
    top:'779px',
    left:'306px',
    border: '1px solid #000000',
    transform: 'rotate(90deg)',
  };

  const line19Style = {
    position: 'absolute',
    width: '491px',
    height: '0px',
    left: '380px',
    top: '852px',
    border: '1px solid #000000',
  };

  const line20Style = {
    position: 'absolute',
    width: '103.46px',
    height: '0px',
    top:'821px',
    left:'370px',
    
    border: '2px solid #8B6BE8',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    transform: 'rotate(-32.77deg)',
  };

  const line21Style = {
    position: 'absolute',
    width: '50.98px',
    height: '0px',
    top:'813px',
    left:'460px',
    
    border: '2px solid #8B6BE8',
    transform: 'rotate(43.22deg)',
  };

  const line22Style = {
    position: 'absolute',
    width: '157.31px',
    height: '0px',
    top:'800px',
    left:'500px',
    border: '2px solid #8B6BE8',
    transform: 'rotate(-22.82deg)',
  };

  const line23Style = {
    position: 'absolute',
    width: '68.77px',
    height: '0px',
    top:'790px',
    left:'645px',
    border: '2px solid #8B6BE8',
    transform: 'rotate(40.87deg)',
  };

  const line24Style = {
    position: 'absolute',
    width: '204.28px',
    height: '0px',
    top:'749px',
    left:'684px',
    border: '2px solid #8B6BE8',
    transform: 'rotate(-38.44deg)',
  };

  return (
    <div>
      <div style={containerStyle}></div>
      <div style={salesTextStyle}>Sales of the month</div>
      <div style={line18Style}></div>
      <div style={line19Style}></div>
      <div style={line20Style}></div>
      <div style={line21Style}></div>
      <div style={line22Style}></div>
      <div style={line23Style}></div>
      <div style={line24Style}></div>
    </div>
  );
};

export default Salesofmonth;
