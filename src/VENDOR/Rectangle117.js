import React from 'react';
import DonutChart from './Donutchart';

const Rectangle117 = () => {
  const lineStyle = {
    position: 'absolute',
    width: '276px',
    height: '0px',
    border: '1px solid #000000',
    boxShadow: '0px 5px 4px rgba(0, 0, 0, 0.25)',
    transform: 'rotate(0.21deg)',
  };

  const percentageLabelStyle = {
    position: 'absolute',
    width: '43px',
    height: '25px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '26px',
    letterSpacing: '0.02em',
  };

  return (
    <div className="Rectangle117">
      <h3 className="order">Orders</h3>

      <DonutChart />

      <div style={{ ...lineStyle, top: '348px', left: '10px' }}></div>
      <div style={{ ...lineStyle, top: '408px', left: '10px' }}></div>
      <div style={{ ...lineStyle, top: '460px', left: '10px' }}></div>

      <div style={{ ...percentageLabelStyle, top: '150px', left: '85px', color: 'black', transform: 'rotate(32.5deg)' }}>40%</div>
      <div style={{ ...percentageLabelStyle, top: '250px', left: '150px', color: 'black', transform: 'rotate(-17.89deg)' }}>50%</div>
      <div style={{ ...percentageLabelStyle, top: '120px', left: '180px', color: 'black', transform: 'rotate(20deg)' }}>20%</div>

      {/* Other absolute-positioned elements... */}
       {/* Order Cancel 10 */}
       <div
        style={{
          position: 'absolute',
          width: '152px',
          height: '26px',
          top: '380px',
          left: '10px',
          fontFamily: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '18px',
          lineHeight: '26px',
          letterSpacing: '0.02em',
          color: '#000000',
        }}
      >
        Order Cancel 10
      </div>

      {/* Order New 30 */}
      <div
        style={{
          position: 'absolute',
          width: '131px',
          height: '26px',
          top: '430px',
          left: '10px',
          fontFamily: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '18px',
          lineHeight: '26px',
          letterSpacing: '0.02em',
          color: '#000000',
        }}
      >
        Order New 30
      </div>

      {/* Line 28 */}
      <div
        style={{
          position: 'absolute',
          width: '276px',
          height: '0px',
          top: '348px',
          left: '10px',
          border: '1px solid #000000',
          boxShadow: '0px 5px 4px rgba(0, 0, 0, 0.25)',
          transform: 'rotate(0.21deg)',
        }}
      ></div>

      {/* Line 29 */}
      <div
        style={{
          position: 'absolute',
          width: '276px',
          height: '0px',
          left: '10px',
          top: '408px',
          border: '1px solid #000000',
          boxShadow: '0px 5px 4px rgba(0, 0, 0, 0.25)',
          transform: 'rotate(0.21deg)',
        }}
      ></div>

      {/* Line 30 */}
      <div
        style={{
          position: 'absolute',
          width: '276px',
          height: '0px',
          left: '10px',
          top: '460px',
          border: '1px solid #000000',
          boxShadow: '0px 5px 4px rgba(0, 0, 0, 0.25)',
          transform: 'rotate(0.21deg)',
        }}
      ></div>

      {/* 40% - Change top, left, and color as needed */}
      <div
        style={{
          position: 'absolute',
          width: '43px',
          height: '25px',
          top:'150px',
          left:'85px',
          fontFamily: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '18px',
          lineHeight: '26px',
          letterSpacing: '0.02em',
          color: 'black', // Use the appropriate color
          transform: 'rotate(32.5deg)',
        }}
      >
        40%
      </div>

      {/* 50% - Change top, left, and color as needed */}
      <div
        style={{
          position: 'absolute',
          width: '43px',
          height: '25px',
          top:'250px',
          left:'150px',
          fontFamily: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '18px',
          lineHeight: '26px',
          letterSpacing: '0.02em',
          color: 'black', // Use the appropriate color
          transform: 'rotate(-17.89deg)',
        }}
      >
        50%
      </div>

      {/* 20% - Change top, left, and color as needed */}
      <div
        style={{
          position: 'absolute',
          width: '43px',
          height: '25px',
          top:'120px',
          left:'180px',
          
          fontFamily: 'Poppins',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '18px',
          lineHeight: '26px',
          letterSpacing: '0.02em',
          color: 'black', // Use the appropriate color
          transform: 'rotate(20deg)',
        }}
      >
        20%
      </div>
    </div>
  );
};

export default Rectangle117;
