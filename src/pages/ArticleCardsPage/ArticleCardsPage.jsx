//Build Helpers
import React from 'react';

//Components
import ArticleCard from '../../components/ArticleCard/ArticleCard.jsx';


const ArticleCardsPage = (props) => {

  const getCards=()=>{
    let articleCards = [];
    let localSrc = JSON.parse(localStorage.getItem('myArticles'));
    if(localSrc === null){
      localSrc = [];
    }
    let usedList = localSrc;
    if(props.articles){
      usedList = props.articles;
    }

    usedList.map((obj)=>{
      articleCards.push(
        <div className="col-12 col-md-4 mb-5">
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
        </div>
      );
      return void(0);
    }); 
    return articleCards;
  }

  return (
    <div>
      <div className="content-container list-page-header">
        <h1 className="mb-5 pb-5">
          List Page
        </h1>
      </div>
      <section className="section-block mb-5 mt-5 pt-5 pb-5">
        <div className="container content-container">
          <div className="row">
              {getCards()}
          </div>
        </div>
      </section>
    </div>


  );
}
export default ArticleCardsPage;