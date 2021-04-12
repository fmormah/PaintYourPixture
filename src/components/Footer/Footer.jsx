//Build Helpers
import React from 'react';

const Footer = (props) => {

  return (
    <footer>
      <div className="upper-footer">
        <div className="upper-footer-copy">
          <div className="h2">TEXTURES BY</div>
          <div className="h1 mb-3">Jordan Hetzer</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="bottom-footer pt-5">
        <div className="section-block">
          <div className="container content-container">
            <div className="row">
              <div className="col-12 col-md-4">
                <h3 className="text-blue mb-3">About</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>
              <div className="col-12 col-md-3">
                <h3 className="text-blue  mb-3">History</h3>
                <ul>
                  <li>
                    <a className="a-1" href="/">Resources</a>
                  </li>
                  <li>
                    <a className="a-1" href="/">Downloads &amp; Updates</a>
                  </li>
                  <li>
                    <a className="a-1" href="/">Manuals</a>
                  </li>
                  <li>
                    <a className="a-1" href="/">Tech Specs</a>
                  </li>
                  <li>
                    <a className="a-1" href="/">System Status</a>
                  </li>
                  <li>
                    <a className="a-1" href="/">Accessibility</a>
                  </li>
                  <li>
                    <a className="a-1" href="/">Support Site Map</a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-5">
                <h3 className="text-blue  mb-3">Contact</h3>
                <p>
                  Apple Store (Education Institutions)<br />
                1300-551-927<br />
                Apple Store (Small Business)<br />
                1300-369-095
              </p>
              </div>
              <div className="col-12 mt-5 mb-5">
                <p className="text-off-purple">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>
            </div>
           
          </div>
        </div>

      </div>
    </footer>
  );
}
export default Footer;