import React, { useState, useEffect} from 'react';
import { Switch } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from "react-transition-group";

//Pages
import Nav from './components/Nav/Nav.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import Article from './pages/Article/Article.jsx';
import ArticleCardsPage from './pages/ArticleCardsPage/ArticleCardsPage.jsx';
import NoMatch from './pages/404/404.jsx';

//Css
import './App.css';


const App = (props) => {

  const [articles, setArticles] = useState([]);
  const [fetchedArticles,setFetchedArticles] = useState(false);
  const [didMount, setMount] = useState(false);
  const mockAPI = "https://raw.githubusercontent.com/fmormah/PaintYourPixture/master/src/data/articles.json";

  useEffect(() => {
    if(didMount === false){
      setMount(true);
      getArticles();
    }
  });

  const getArticles = () => {
    if(props.testing === void(0)){
      return;
    } 
    fetch(mockAPI)
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        setArticles([...data]);
        setFetchedArticles(true);
      });
  }

  if (fetchedArticles === false && props.testing === void(0)) {
    // Loading Animation
    return <div className="pt30 pb30 pl30 pr30">
      <div label="loading" className="lds-dual-ring"></div>
    </div>
  } else {
    return (
      <main id="be-epic-wrapper">
        <Nav />
        <Router>
          <TransitionGroup>
            <CSSTransition
              timeout={400}
              classNames="page"
            >
              <Switch>
                <Route exact path='/' component={() => <Home articles={articles} />} />
                <Route exact path='/article/*' component={() => <Article articles={articles} />} />

                {/* Bonus */}
                <Route exact path='/articles' component={() => <ArticleCardsPage articles={articles} />} />
                <Route exact path='/liked-articles' component={() => <ArticleCardsPage />} />
                <Route component={NoMatch} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
          <Footer />
        </Router>
      </main>
    );
  }


}
export default App;


