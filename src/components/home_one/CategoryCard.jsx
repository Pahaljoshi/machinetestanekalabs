import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoryCard({ cat }) {
  return (
    <Link to="#" className="category-card">
      <div className="category-img-wrapper">
        <img src={cat.img} alt={cat.name} />
      </div>
      <div className="category-name">{cat.name}</div>
    </Link>
  );
}
