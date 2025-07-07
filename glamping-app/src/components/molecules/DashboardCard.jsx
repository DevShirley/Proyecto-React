import React from 'react';
import Button from '../atoms/Button';

const DashboardCard = ({ title, text, href, buttonText }) => {
  return (
    <div className="dashboard-card">
      <h3>{title}</h3>
      <p>{text}</p>
      <a href={href} className="dashboard-link">
        <Button>{buttonText}</Button>
      </a>
    </div>
  );
};

export default DashboardCard;
