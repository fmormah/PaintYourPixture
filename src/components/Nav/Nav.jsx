//Build Helpers
import React, { useState, useEffect} from 'react';

//images
import logo from '../../assets/images/logo.png';

const Nav = (props) => {

  const [isMenuActive, setMenuActive] = useState(false);
  const [menuActiveClass, setMenuActiveClass] = useState('not-active');

  useEffect(()=>{
    isMenuActive === true ? setMenuActiveClass('is-active') : setMenuActiveClass('not-active');
    let wrapper = document.getElementById("be-epic-wrapper");
    if(wrapper != null){
      wrapper.className = menuActiveClass;
    }
  });

  const toggleMenu=()=>{
    setMenuActive(!isMenuActive);
  }

  return (
    <nav id="Nav-C" className={`nvc ${menuActiveClass}`}>
      
      {/* Burger Menu  */}
      <button id="nav-menu-toggler" aria-pressed={isMenuActive} onClick={()=>{toggleMenu();}} className={`hamburger hamburger--spin ${menuActiveClass}`} type="button">
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>

      {/* Page Links  */}
      <ul className="nav-list">
        <li>
          <a aria-label="homepage link" href="/">
            <img alt="logo" className="nav-logo" src={logo} />
          </a>
        </li>
        <li>
          <a aria-label="homepage link" className="a-1 text-center mt-3" href="/">
            Home
          </a>
        </li>
        <li>
          <a aria-label="Article page link" className="a-1 text-center mt-3" href="/articles">
            All Articles
          </a>
        </li>
        <li>
          <a aria-label="liked articles link" className="a-1 text-center mt-3" href="/liked-articles">
            liked Articles
          </a>
        </li>
      </ul>
      
    </nav>
  );
}
export default Nav;