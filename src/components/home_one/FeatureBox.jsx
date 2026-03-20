import React from 'react';

export default function FeatureBox({ feat }) {
  return (
    <div className="feature-box">
      <div className="feature-icon">{feat.icon}</div>
      <div className="feature-title">{feat.title}</div>
    </div>
  );
}
