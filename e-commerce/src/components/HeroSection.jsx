import React, { useState } from 'react';
import './HeroSection.css';

const slides = [
  {
    title: 'Shop the Latest Tech',
    description: 'Discover amazing deals on top electronics and gadgets.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Upgrade Your Style',
    description: 'Trendy smartwatches and accessories for every occasion.',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Unbeatable Audio',
    description: 'Experience music like never before with our premium headphones.',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80',
  },
];

function HeroSection() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const goTo = (idx) => setCurrent(idx);
  const prev = () => setCurrent((current - 1 + total) % total);
  const next = () => setCurrent((current + 1) % total);

  return (
    <div className="hero-carousel">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`hero-slide${idx === current ? ' active' : ''}`}
          style={{
            backgroundImage: `url(${slide.image})`,
            zIndex: idx === current ? 2 : 1,
          }}
        >
          <div className="hero-slide-content">
            <h1>{slide.title}</h1>
            <p>{slide.description}</p>
            <button className="cta-btn">Shop Now</button>
          </div>
        </div>
      ))}
      <button className="carousel-arrow left" onClick={prev} aria-label="Previous Slide">&#8592;</button>
      <button className="carousel-arrow right" onClick={next} aria-label="Next Slide">&#8594;</button>
      <div className="carousel-indicators">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`carousel-dot${idx === current ? ' active' : ''}`}
            onClick={() => goTo(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroSection; 