import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Heart, ShoppingBag, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container">
        <Link className="navbar-brand" to="/">
           <span>प्रवेश गोल्ड</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon" style={{filter: 'invert(1)'}}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item"><Link className="nav-link" to="#">Jewellery</Link></li>
            <li className="nav-item"><Link className="nav-link" to="#">Weddings</Link></li>
            <li className="nav-item"><Link className="nav-link" to="#">Coins</Link></li>
            <li className="nav-item"><Link className="nav-link" to="#">New Arrival</Link></li>
            <li className="nav-item"><Link className="nav-link" to="#">Our World</Link></li>
          </ul>
          <div className="nav-icons d-flex align-items-center">
            <Search />
            <Heart />
            <ShoppingBag />
            <User />
          </div>
        </div>
      </div>
    </nav>
  );
}
