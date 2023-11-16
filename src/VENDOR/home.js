import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Chart, ArcElement } from 'chart.js';
import Rectangle117 from './Rectangle117';
import Rectangle118 from './Rectangle118';
import SalesOfMonth from './Salesofmonth';

// Register the ArcElement
Chart.register(ArcElement);

const Card = ({ title, value }) => (
  <div className="card">
    <div className="card-inner">
      <h3>{title}</h3>
    </div>
    <h1>{value}</h1>
  </div>
);

function Home() {
  const [loading, setLoading] = useState(true);

  const [totalOrders, setTotalOrders] = useState(0);
  // ... other state variables

  const fetchData = async () => {
    try {
      const response = await fetch('/api/vendorDashboardData');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setTotalOrders(data.totalOrders);
      // ... set other state variables
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="main-container">
      <div className="main-title">
        <h3>Dashboard</h3>
      </div>
      <Link to="/product-registration">Go to Product Registration</Link>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="main-cards">
          <Card title="Total Orders" value={totalOrders} />
          {/* ... other Card components */}
        </div>
      )}
      <div className="charts">
        <SalesOfMonth />
        <Rectangle117 />
        <Rectangle118 />
      </div>
    </div>
  );
}

export default Home;
