//Build Helpers
import React, { useState, useEffect } from 'react';

//images
import heart from '../../assets/icons/heart.svg';
import heartOn from '../../assets/icons/heart-on.svg';
import commentIcon from '../../assets/icons/bubble.svg';

const ArticleCard = (props) => {

  const [isLiked, setLiked] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [subMenuActiveClass, setSubMenuActiveClass] = useState("not-active");
  const [heartClassName, setHeartClassName] = useState("img-btn");
  const [likedIcon, setLikedIcon] = useState(heart);
  const [likedCount, setLikedCount] = useState(props.likes);
  const [commentCount] = useState(props.comments);
  const [isLikeListChecked, setlikedList] = useState(false);

  useEffect(() => {
    checkForLikedArticles();
    isLiked === true ? setLikedIcon(heartOn)  : setLikedIcon(heart);
    subMenuOpen === true ? setSubMenuActiveClass("is-active") : setSubMenuActiveClass("not-active");
  });

  const checkForLikedArticles=()=>{
    if(isLikeListChecked === false && localStorage.getItem('myArticles') !== null){
      let likedJSON = JSON.parse(localStorage.getItem('myArticles'));
      likedJSON.map((obj)=>{
        if(obj.id === props.id){
          console.log('alpha: ',obj.id);
          console.log('beta: ',props.id);
          setLiked(true);
        }
        return void(0);
      })
      setlikedList(true);
    }
  }

  const saveLikes=()=>{

    let artObj = {
      id:props.id,
      img:props.img,
      title:props.title,
      comments: props.comments,
      likes: props.likes,
      description:props.description,
      content: props.content
    }

    let likedArticlesRefs = localStorage.getItem('myArticles');
    if(likedArticlesRefs === null){
      localStorage.setItem('myArticles', '[]');
      likedArticlesRefs = '[]';
    }
    likedArticlesRefs = JSON.parse(likedArticlesRefs);
    
    if(isLiked === true){
      setLikedCount(likedCount-1);
      setHeartClassName("img-btn");

      let id = props.id;
      let index = likedArticlesRefs.map(x => {
        return x.id;
      }).indexOf(id);
      likedArticlesRefs.splice(index, 1);


    }else{
     setLikedCount(likedCount+1);
     setHeartClassName("img-btn push-anim");
      likedArticlesRefs.push(
        artObj
      );
    }

    setLiked(!isLiked);
    localStorage.setItem('myArticles', JSON.stringify(likedArticlesRefs));
  };

  return (
    <div data-id={props.id} className="Articles-Card-C">
      <div className="articles-card-hero" style={{backgroundImage:`url(${props.img})`}}>
        <button id="js-like-btn" onClick={()=>{saveLikes()}} className={heartClassName} aria-pressed={isLiked}>
          <img className="mr-2 d-inline" alt="Liked article button"  src={likedIcon} />
          {likedCount}
        </button>
      </div>
      <div className="articles-card-panel">
        <div className="p-4">
          <h3 className="text-dark-blue mb-2">{props.title}</h3>
          <p className="text-grey">
            {props.description}
          </p>
        </div>
        <div className="article-card-bottom-panel">
          <span className="text-dark-blue comment-count-panel">
            <img alt={`${commentCount} comments`} src={commentIcon} className="mr-3 d-inline"/>
            {commentCount} comments
          </span>
          <button onClick={()=>{setSubMenuOpen(!subMenuOpen)}} aria-pressed={subMenuOpen} className="h2 article-card-menu">
            ...
          </button>
          <div onMouseLeave={()=>{setSubMenuOpen(!subMenuOpen)}} className={`article-sub-menu-content ${subMenuActiveClass}`}>
            <button id="js-article-sub-menu-content-like-btn" className="article-sub-menu-content-like-btn" onClick={()=>{saveLikes()}} aria-pressed={isLiked}>
              <img className="mr-1 d-inline" alt="Liked article button"  src={likedIcon} />
              Like Article 
            </button>
            <a className="a-2" aria-label="Full article link" href={`/article/${parseInt(props.id,10)-1}`}>Read more</a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ArticleCard;