//Build Helpers
import React, { useState, useEffect } from 'react';

//Images
import arrow from '../../assets/icons/arrow.svg';
import logo from '../../assets/images/logo.png';

const HomeHero = (props) => {

  const [sideMenuActiveClass, setSideMenuActiveClass] = useState('active');
  const sideMenuFadeThresholdY = 100;

  useEffect(() => {
    window.addEventListener('scroll', function(e) {
      if(window.scrollY > sideMenuFadeThresholdY){
        setSideMenuActiveClass('inactive');
      }else{
        setSideMenuActiveClass('active');
      }
    });
  },[]);

  return (
    <header className={`section-block ${props.className}`}>
      <div className="HomeHero-C">
        <nav className={`home-hero-nav ${sideMenuActiveClass}`}>
          <img alt="menu arrow" className="hero-slider-arrow" src={arrow}/>
          {props.sideMenuItems}
        </nav>
        <h1>
          <img alt="PAINT YOUR PIXTURE" className="hero-logo" src={logo} />
        </h1>
        <div className="container content-container on-hero">
          {props.children}
        </div>
      </div>
    </header>
  );
}
export default HomeHero;