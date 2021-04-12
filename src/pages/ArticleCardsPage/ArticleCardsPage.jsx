//Build Helpers
import React from 'react';

//Components
import ArticleCard from '../../components/ArticleCard/ArticleCard.jsx';


const ArticleCardsPage = (props) => {

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
            <div className="col-12 col-md-4">
              <ArticleCard
                header="Header Title"
                mainCopy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
              />
            </div>
          </div>
        </div>
      </section>
    </div>


  );
}
export default ArticleCardsPage;