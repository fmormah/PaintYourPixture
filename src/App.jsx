import React from 'react';
import { Switch } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Pages
import Nav from './components/Nav/Nav.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import Article from './pages/Article/Article.jsx';
import ArticleCardsPage from './pages/ArticleCardsPage/ArticleCardsPage.jsx';
import NoMatch from './pages/404/404.jsx';

//Css
import './App.css';

const App = () => {


  return(
    <main id="be-epic-wrapper">
      <Nav/>
      <Router>
        <Switch>
          <Route exact path='/' component={() => <Home/>} />
          <Route exact path='/article/*' component={() => <Article/>} />

          {/* Bonus */}
          <Route exact path='/articles' component={() => <ArticleCardsPage/>} />
          <Route exact path='/favoured-articles' component={() => <ArticleCardsPage/>} />
          <Route component={NoMatch}/>
        </Switch>
        <Footer/>
      </Router>
    </main>
  );
}
export default App;


