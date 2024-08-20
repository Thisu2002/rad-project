import React from 'react';
import '../styles/SummaryCard.css';

const SummaryCard = ({ count, label, icon }) => {
  return (
    <div className="summary-card">
      <img src={icon} alt={`${label} icon`} className="summary-icon" />
      <div className="summary-details">
        <h2>{count}</h2>
        <p>{label}</p>
      </div>
    </div>
  );
};

export default SummaryCard;
