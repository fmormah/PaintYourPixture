//Build Helpers
import React, { useState, useEffect, useRef } from 'react';
import Slider from "react-slick";

//images
import sliderArrowLeft from '../../assets/icons/slider-arrow-left.svg';
import sliderArrowRight from '../../assets/icons/slider-arrow-right.svg';

//Components
import ArticleCard from '../ArticleCard/ArticleCard.jsx';

const ArticleSlider = (props) => {

  const sliderRef = useRef();

  const getCards=()=>{
    let articleCards = [];
    for(let i=0;i < 10; i++){
      articleCards.push(
        <ArticleCard 
          key={i}
          header="Header Title"
          mainCopy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        />
      );
    }
    return articleCards;
  }

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    margin: 15,
    arrows: false,
    accessibility: true,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 3000,
        settings: {
          slidesToShow: 4,
          margin: 15,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          margin: 15,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          margin: 15,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className={`Article-Slider-C section-block ${props.className}`}>
      
      <h2 className="mb-5">

        {/* Arrow Buttons */}
        <button aria-pressed="Show Previews Slide Item" onClick={() => { sliderRef.current.slickPrev(); }} className="img-btn mr-3 ml-3">
          <img alt="slider button left" src={sliderArrowLeft} />
        </button>
        <button aria-pressed="Show Next Slide Item" onClick={() => { sliderRef.current.slickNext(); }} className="img-btn mr-3">
          <img alt="slider button right" src={sliderArrowRight} />
        </button>

        {/* Section title */}
        {props.header}
      </h2>

      <Slider ref={slider => (sliderRef.current = slider)} {...sliderSettings}>
        {getCards()}
      </Slider>
    </section>
  );
}
export default ArticleSlider;