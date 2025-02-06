import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (!user) return null;
/** */
  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h2 className="dashboard-title">Welcome, {user.first_name} {user.last_name}</h2>
        <p className="dashboard-email">{user.email}</p>
        <button onClick={handleLogout} className="dashboard-logout">Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;
