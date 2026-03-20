import React from 'react';
import { Link } from 'react-router-dom';

export default function Home2() {
  return (
    <div className="container mt-5">
      <div className="card shadow mb-4 border-success">
        <div className="card-body text-success">
          <h1 className="card-title">Home Page Variation 2</h1>
          <p className="card-text">Welcome to the second version of the home page. Try out different components and designs.</p>
          <Link to="/home1" className="btn btn-success">Go to Home 1</Link>
        </div>
      </div>
    </div>
  );
}
