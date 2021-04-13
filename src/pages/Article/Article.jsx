//Build Helpers
import React, { useState, useEffect} from 'react';
import ReactHtmlParser from 'react-html-parser';
 
const Article = (props) => {

  const [article, setArticle] = useState(null);

  useEffect(()=>{
    if(article===null){
      let id = /[^/]*$/.exec(window.location.href)[0];
      if(props.articles[id]){
        setArticle(props.articles[id]);
      }else{
        window.location = '/404';
      }
    }else{
      console.log(article);
    }
  });
  
  if (article === null) {
    // Loading Animation
    return <div className="pt30 pb30 pl30 pr30">
      <div className="lds-dual-ring"></div>
    </div>
    } else {
    return (
      <div className="Articles-Card-C big">
        <div className="articles-card-hero" style={{ backgroundImage: `url(${article.img})` }}>
          <div className="container content-container on-hero">
            <h1 className="mb-3">
             {article.title}
            </h1>
             {ReactHtmlParser(article.description)}
          </div>
        </div>
        <div className="articles-card-panel p-5">
          <div className="text-grey container full-article">
            {ReactHtmlParser(article.content)}
          </div>
        </div>
      </div>
    );
  }
}
export default Article;