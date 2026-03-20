import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export default function ProductCard({ item }) {
  return (
    <div className="product-card">
      <Heart className="wishlist-icon" size={18} />
      <div className="product-image-container">
        <img src={item.img} alt={item.name} />
      </div>
      <div className="product-title">{item.name}</div>
      <div className="product-price-wrapper">
        <div style={{display:'flex', alignItems:'baseline'}}>
          <span className="product-price">{item.price}</span>
          <span style={{fontSize: '9px', color: '#666', marginLeft: '4px'}}>(Approx)</span>
        </div>
        <Link to="#" className="explore-btn flex-shrink-0">Add to Cart</Link>
      </div>
    </div>
  );
}
