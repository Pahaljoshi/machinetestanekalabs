import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, RefreshCcw, CreditCard, Truck, Lock, PlayCircle, Instagram, ArrowRight } from 'lucide-react';

// Components
import Navbar from '../components/home_one/Navbar';
import Footer from '../components/home_one/Footer';
import ProductCard from '../components/home_one/ProductCard';
import CategoryCard from '../components/home_one/CategoryCard';
import FeatureBox from '../components/home_one/FeatureBox';
import TestimonialCard from '../components/home_one/TestimonialCard';

// Images
import imgHero from '../assets/images/home_one/Property 1=Default.png';
import imgHero2 from '../assets/images/home_one/Property 1=Variant2.png';
import imgHero3 from '../assets/images/home_one/Property 1=Variant3.png';
import imgMobile from '../assets/images/home_one/Mobile.png';
import img9ktBanner from '../assets/images/home_one/9kt Banner.png';
import imgRect23 from '../assets/images/home_one/Rectangle 23.png';
import imgRect24 from '../assets/images/home_one/Rectangle 24.png';
import imgRect25 from '../assets/images/home_one/Rectangle 25.png';
import imgCat1 from '../assets/images/home_one/Property 1=Default (1).png';
import imgCat2 from '../assets/images/home_one/Property 1=Default (2).png';
import imgCat3 from '../assets/images/home_one/Property 1=Default (3).png';
import imgCat4 from '../assets/images/home_one/Property 1=Default (4).png';
import imgCat5 from '../assets/images/home_one/Property 1=Default (5).png';
import imgCat6 from '../assets/images/home_one/Property 1=Default (6).png';

export default function Home1() {
  const categories = [
    { name: 'Pendants', img: imgCat1 },
    { name: 'Earrings', img: imgCat2 },
    { name: 'Rings', img: imgCat3 },
    { name: 'Bracelets', img: imgCat4 },
    { name: 'Bangles', img: imgCat5 },
    { name: 'Sets', img: imgCat6 },
  ];

  const products = [
    { name: 'Traditional Gold Long Necklace', img: imgCat5, price: '₹200,000', mrp: '₹220,000' },
    { name: 'Antique Gold Necklace', img: imgCat2, price: '₹350,000', mrp: '₹380,000' },
    { name: 'Kundan Set', img: imgCat6, price: '₹400,000', mrp: '₹420,000' },
    { name: 'Gold Choker Set', img: imgCat4, price: '₹150,000', mrp: '₹170,000' }
  ];

  const specialSelection = [
    { name: 'Gold Necklace', img: imgCat1, price: '₹120,000', mrp: '₹130,000' },
    { name: 'Gold Ring', img: imgCat3, price: '₹45,000', mrp: '₹50,000' },
    { name: 'Sleek Gold Bangles', img: imgCat5, price: '₹80,000', mrp: '₹90,000' },
    { name: 'Gold Ear Drops', img: imgCat2, price: '₹55,000', mrp: '₹60,000' },
    { name: 'Bridal Diamond Ring', img: imgCat3, price: '₹95,000', mrp: '₹105,000' },
    { name: 'Rose Gold Ring', img: imgCat4, price: '₹35,000', mrp: '₹40,000' },
    { name: 'Pink Bangle', img: imgCat5, price: '₹75,000', mrp: '₹85,000' },
    { name: 'Layers Pearl & Gold Set', img: imgCat6, price: '₹110,000', mrp: '₹125,000' }
  ];

  const features = [
    { icon: <Award />, title: 'Certified Diamond' },
    { icon: <RefreshCcw />, title: 'Easy Return' },
    { icon: <ShieldCheck />, title: 'BIS Hallmark' },
    { icon: <RefreshCcw />, title: 'Exchange & Buyback' },
    { icon: <CreditCard />, title: 'Secure Payment' },
    { icon: <Award />, title: 'Value For Money' }
  ];

  const testimonials = [
    { name: 'Sahana', text: '"I recently bought a beautiful gold ring for my anniversary. The design is unique and the quality is amazing. I am very happy."', img: imgCat1 },
    { name: 'Kirti', text: '"The staff is very helpful. They helped me choose the perfect necklace for my sister. The packaging was beautiful too."', img: imgCat2 },
    { name: 'Ayesha', text: '"Best collection of bridal jewellery! We bought completely from here and got lots of compliments on my big day."', img: imgCat3 }
  ];

  return (
    <div className="home-one-wrapper">

      {/* Navbar Content */}
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={imgHero} className="d-block w-100 img-fluid" alt="Bridal Collections 1" />
            </div>
            <div className="carousel-item">
              <img src={imgHero2} className="d-block w-100 img-fluid" alt="Bridal Collections 2" />
            </div>
            <div className="carousel-item">
              <img src={imgHero3} className="d-block w-100 img-fluid" alt="Bridal Collections 3" />
            </div>
          </div>
        </div>
        <div className="sub-hero-strip ">
          <img src={imgCat2} alt="Sub Hero 1" className="sub-hero-img" />
          <img src={imgCat3} alt="Sub Hero 2" className="sub-hero-img" />
          <img src={imgCat6} alt="Sub Hero 3" className="sub-hero-img" />
          <img src={imgCat4} alt="Sub Hero 4" className="sub-hero-img" />
        </div>
      </section>

      {/* Discover By Category */}
      <section className="container py-5">
        <h2 className="section-title mb-3">Discover By Category</h2>
        <div className="row justify-content-center">
          {categories.map((cat, idx) => (
            <div className="col-auto mb-3" key={idx}>
              <CategoryCard cat={cat} />
            </div>
          ))}
        </div>
      </section>

      {/* Latest Collection */}
      <section className="container pb-4">
        <h2 className="section-title">Latest Collection</h2>
        <div className="row">
          {products.map((item, idx) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={idx}>
              <ProductCard item={item} />
            </div>
          ))}
        </div>
      </section>

      {/* Banners (Mens Chain & Rings) */}
      <section className="container pb-5">
        <div className="row g-3">
          <div className="col-md-8">
            <div className="banner-hover-wrapper h-100">
              <img src={imgRect23} alt="Men's Chain" />
              <div className="banner-hover-overlay">
                <div className="banner-hover-title">Men's Chain Collection</div>
                <Link to="#" className="banner-hover-btn text-decoration-none">
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex flex-column gap-3">
            <div className="banner-hover-wrapper" style={{ height: 'calc(50% - 0.5rem)' }}>
              <img src={imgRect24} alt="Collection 1" />
              <div className="banner-hover-overlay">
                <div className="banner-hover-title">Gold Coins Collection</div>
                <Link to="#" className="banner-hover-btn text-decoration-none">
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
            <div className="banner-hover-wrapper" style={{ height: 'calc(50% - 0.5rem)' }}>
              <img src={imgRect25} alt="Collection 2" />
              <div className="banner-hover-overlay">
                <div className="banner-hover-title">Rings Collection</div>
                <Link to="#" className="banner-hover-btn text-decoration-none">
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="center-text-banner">
        <div className="container">
          <h3>"Endearing hearts glow quietly in the dark.<br />They murmur stories of infinite longing."</h3>
          {/* <div style={{ color: '#5b1524', fontWeight: 'bold', fontSize: '24px' }}>P</div> */}
        </div>
      </section>

      {/* 9kt Banner */}
      <section className="home-banner w-100 mb-5">
        <img src={img9ktBanner} alt="9KT Affordable Gold" className="w-100 img-fluid" style={{ objectFit: 'cover' }} />
      </section>

      {/* Special Selection For You */}
      <section className="container pb-5">
        <h2 className="section-title">Special Selection For You</h2>
        <div className="row">
          {specialSelection.map((item, idx) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={idx}>
              <ProductCard item={item} />
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Pravesh Gold */}
      <section className="bg-light-pink py-5" style={{ backgroundColor: '#f0e0e3' }}>
        <div className="container">
          <h2 className="section-title mb-4">Why Choose Pravesh Gold?</h2>
          <div className="row justify-content-center">
            {features.map((feat, idx) => (
              <div className="col-md-2 col-4 mb-3" key={idx}>
                <FeatureBox feat={feat} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Our Customer Says */}
      <section className="container py-5">
        <h2 className="section-title mb-4">What Our Customer Says</h2>
        <div className="row">
          {testimonials.map((testi, idx) => (
            <div className="col-md-4 mb-4" key={idx}>
              <TestimonialCard testi={testi} />
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Gallery Row */}
      <section className="gallery-row w-100">
        {[imgCat1, imgCat2, imgCat3, imgCat4, imgCat5].map((imgUrl, i) => (
          <div className="gallery-item" key={i}>
            <img src={imgUrl} alt={`Gallery ${i + 1}`} />
            <div className="gallery-overlay">
              <div className="gallery-icon"><Instagram size={28} /></div>
              <div className="gallery-text">Visit Our Instagram</div>
            </div>
          </div>
        ))}
      </section>

      {/* App Promo Container */}
      <div className="container">
        <div className="app-banner-container row mt-5 mb-5 align-items-center">
          <div className="col-md-4 text-center">
            <img src={imgMobile} alt="Mobile App" style={{ maxHeight: '300px' }} />
          </div>
          <div className="app-banner-content col-md-8 ps-md-5 mt-4 mt-md-0">
            {/* <h2>Jewellers in your pocket!</h2> */}
            {/* <p>Make your shopping experience easier and faster.<br />Click to get the app now.</p> */}
            {/* <div className="d-flex flex-wrap gap-2">
              <Link to="#" className="store-btn text-decoration-none">
                <PlayCircle size={18} className="me-2" /> App Store
              </Link>
              <Link to="#" className="store-btn text-decoration-none">
                <PlayCircle size={18} className="me-2" /> Google Play
              </Link>
            </div> */}
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <Footer />

    </div>
  );
}
