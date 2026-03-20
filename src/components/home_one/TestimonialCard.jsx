import React from 'react';
import { Star } from 'lucide-react';

export default function TestimonialCard({ testi }) {
  return (
    <div className="testimonial-card">
      <div className="testi-stars">
        <Star /><Star /><Star /><Star /><Star />
      </div>
      <p className="testi-text">{testi.text}</p>
      <div className="testi-author">
        <img src={testi.img} alt={testi.name} className="testi-avatar" />
        <p className="testi-name">{testi.name}</p>
      </div>
    </div>
  );
}
