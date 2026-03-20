import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Youtube, Smartphone, MapPin, Phone, Mail, Apple } from 'lucide-react';
import NewsletterForm from './NewsletterForm';

export default function Footer() {
  return (
    <footer className="footer pt-5 pb-3">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-3 pe-4 mb-4">
            <h4 className="footer-brand mb-4">प्रवेश गोल्ड</h4>
            <div className="d-flex align-items-center mb-3">
              <div className="gold-icon-box"><Phone size={16} /></div>
              <span className="ms-3 text-light" style={{fontSize: '13px'}}>+91 91691 61123</span>
            </div>
            <div className="d-flex align-items-center mb-4">
              <div className="gold-icon-box"><Mail size={16} /></div>
              <span className="ms-3 text-light" style={{fontSize: '13px'}}>contact@praveshgold.com</span>
            </div>
            <div className="footer-socials d-flex gap-2">
              <Link to="#" className="gold-icon-box small"><Facebook size={14} /></Link>
              <Link to="#" className="gold-icon-box small"><Instagram size={14} /></Link>
              <Link to="#" className="gold-icon-box small"><Linkedin size={14} /></Link>
              <Link to="#" className="gold-icon-box small"><Youtube size={14} /></Link>
              <Link to="#" className="gold-icon-box small"><Smartphone size={14} /></Link>
              <Link to="#" className="gold-icon-box small"><Apple size={14} /></Link>
            </div>
          </div>
          
          <div className="col-md-2 mb-4">
            <div className="footer-title">
              <h5>Category's</h5>
            </div>
            <ul className="footer-links">
              <li><Link to="#">Earrings</Link></li>
              <li><Link to="#">Rings</Link></li>
              <li><Link to="#">Bracelets</Link></li>
              <li><Link to="#">Pendent</Link></li>
              <li><Link to="#">Neckless</Link></li>
              <li><Link to="#">Bangles</Link></li>
            </ul>
          </div>
          
          <div className="col-md-2 mb-4">
            <div className="footer-title">
              <h5>By Metals</h5>
            </div>
            <ul className="footer-links">
              <li><Link to="#">22 kt Gold Jewellery</Link></li>
              <li><Link to="#">18 kt Gold Jewellery</Link></li>
              <li><Link to="#">925 Silver Jewellery</Link></li>
              <li><Link to="#">Diamond Jewellery</Link></li>
              <li><Link to="#">Rose Gold Jewellery</Link></li>
              <li><Link to="#">Platinum Jewellery</Link></li>
            </ul>
          </div>
          
          <div className="col-md-2 mb-4">
            <div className="footer-title">
              <h5>About</h5>
            </div>
            <ul className="footer-links">
              <li><Link to="#">Our Story</Link></li>
              <li><Link to="#">Contact Us</Link></li>
              <li><Link to="#">Privacy Policy</Link></li>
              <li><Link to="#">Shipping Policy</Link></li>
              <li><Link to="#">Returns Policy</Link></li>
              <li><Link to="#">Sizing Guide</Link></li>
            </ul>
          </div>
          
          <div className="col-md-3 mb-4">
            <div className="footer-title">
              <h5>Get In Touch</h5>
            </div>
            <NewsletterForm />
            <div className="d-flex mt-4">
              <div className="gold-icon-box flex-shrink-0"><MapPin size={16} /></div>
              <p className="ms-3 text-light mb-0" style={{fontSize: '13px', lineHeight: '1.6'}}>
                GROUND Floor, Shop No 01, Keshav Building, Bazar Peth, Opposite to Subhash Maidan, Near Bandhan Bank, Kalyan, Thane, Maharashtra, 421301
              </p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="mb-0 text-center text-light" style={{fontSize: '12px'}}>Copyright © 2026 Pravesh Gold. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
