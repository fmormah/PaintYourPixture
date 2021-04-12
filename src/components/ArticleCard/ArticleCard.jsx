//Build Helpers
import React, { useState, useEffect } from 'react';

//images
import heart from '../../assets/icons/heart.svg';
import heartOn from '../../assets/icons/heart-on.svg';
import commentIcon from '../../assets/icons/bubble.svg';

const ArticleCard = (props) => {

  const [didMount, setMount] = useState(false);
  const [isFavoured, setFavoured] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [subMenuActiveClass, setSubMenuActiveClass] = useState("not-active");
  const [heartClassName, setHeartClassName] = useState("img-btn");
  const [favouredIcon, setFavouredIcon] = useState(heart);
  const [favouredCount, setFavouredCount] = useState(Math.floor(Math.random() * 999));
  const [commentCount, setCommentCount] = useState(0);

  useEffect(() => {
    if (didMount === false) {
      setMount(true);
      setCommentCount(Math.floor(Math.random() * 999));
    } else {
      isFavoured === true ? setFavouredIcon(heartOn)  : setFavouredIcon(heart);
      subMenuOpen === true ? setSubMenuActiveClass("is-active") : setSubMenuActiveClass("not-active");
    }
  });

  const handleClick=()=>{
    if(isFavoured === true){
      setFavouredCount(favouredCount-1);
      setHeartClassName("img-btn");
    }else{
     setFavouredCount(favouredCount+1);
     setHeartClassName("img-btn push-anim");
    }
    setFavoured(!isFavoured)
  };

  return (
    <div className="Articles-Card-C">
      <div className="articles-card-hero" style={{backgroundImage:"url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8866de82-76be-4b37-bf8a-1891212d63d7/deev0tc-0e6c93f9-d352-4c32-ae86-7ea5f2b7a98d.png/v1/fill/w_444,h_250,q_70,strp/uncertainty_engine_by_shnestor_deev0tc-250t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xMDgwIiwicGF0aCI6IlwvZlwvODg2NmRlODItNzZiZS00YjM3LWJmOGEtMTg5MTIxMmQ2M2Q3XC9kZWV2MHRjLTBlNmM5M2Y5LWQzNTItNGMzMi1hZTg2LTdlYTVmMmI3YTk4ZC5wbmciLCJ3aWR0aCI6Ijw9MTkyMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5ghtsgEoskyV8-cyq-70opHGxJrUsrF2k1f_CWxlfVs)"}}>
        <button id="js-like-btn" onClick={()=>{handleClick()}} className={heartClassName} aria-pressed={isFavoured}>
          <img className="mr-2 d-inline" alt="Favoured article button"  src={favouredIcon} />
          {favouredCount}
        </button>
      </div>
      <div className="articles-card-panel">
        <div className="p-4">
          <h3 className="text-dark-blue mb-2">{props.header}</h3>
          <p className="text-grey">
            {props.mainCopy}
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
            <button id="js-article-sub-menu-content-like-btn" className="article-sub-menu-content-like-btn" onClick={()=>{handleClick()}} aria-pressed={isFavoured}>
              <img className="mr-1 d-inline" alt="Favoured article button"  src={favouredIcon} />
              Like Article 
            </button>
            <a className="a-2" aria-label="Full article link" href="/article/something">Read more</a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ArticleCard;