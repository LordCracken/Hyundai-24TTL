import React from 'react';
import heroBg from '../images/hero-bg.jpg';
import heroVideo from '../video/hero.mp4';
import heroVideoWebm from '../video/hero.webm';

const Hero = () => (
  <section className="hero">
    <div className="container">
      <div className="hero-content">
        <h1 className="title hero__title">
          Hyundai Azera 
          <span className="subtitle hero__subtitle">Redefine success.</span>
        </h1>
      </div>
    </div>
    <video loop muted autoPlay poster={heroBg} className="hero__video">
      <source src={heroVideo} type="video/mp4" />
      <source src={heroVideoWebm} type="video/webm" />
    </video>
  </section>
);

export default Hero;
