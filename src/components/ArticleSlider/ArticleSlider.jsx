//Build Helpers
import React, { useRef } from 'react';
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
    props.articles.map((obj)=>{
      articleCards.push(
        <ArticleCard 
          key={obj.id}
          id={obj.id}
          img={obj.img}
          title={obj.title}
          description={obj.description}
          content={obj.content}
          comments={obj.comments}
          likes={obj.likes}
        />
      );
      return void(0);
    }); 
    return articleCards;
  };

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
      
      <h2 className="mb-5 text-uppercase">

        {/* Arrow Buttons */}
        <button aria-pressed="mixed" onClick={() => { sliderRef.current.slickPrev(); }} className="img-btn mr-3 ml-3">
          <img alt="slider button left" src={sliderArrowLeft} />
        </button>
        <button aria-pressed="mixed" onClick={() => { sliderRef.current.slickNext(); }} className="img-btn mr-3">
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