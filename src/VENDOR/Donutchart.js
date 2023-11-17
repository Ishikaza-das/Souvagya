import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DonutChart = () => {
  const data = {
    labels: ['Label 1', 'Label 2', 'Label 3'],
    datasets: [
      {
        data: [20, 40, 30], // Specify your data values here
        backgroundColor: ['#7FED29', '#F53838', '#DD29ED'], // Customize colors
      },
    ],
  };

  const options = {
    cutoutPercentage: 70, // Adjust this value to control the size of the hole in the donut
    responsive: true,
    maintainAspectRatio: false,
  };

  const chartStyle = {
    width: '180px',
    height: '180px',
    margin: '0 auto',
    paddingTop: '9px', // Center the chart vertically and add padding
  };

  const legendStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={chartStyle}>
        <Doughnut data={data} options={options} />
      </div>
      <div style={legendStyle}>
        {data.labels.map((label, index) => (
          <div key={index} style={{ marginRight: '20px' }}>
            <span
              style={{
                backgroundColor: data.datasets[0].backgroundColor[index],
                width: '15px',
                height: '15px',
                display: 'inline-block',
                marginRight: '5px',
              }}
            ></span>
            {label}: {data.datasets[0].data[index]}%
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonutChart;
