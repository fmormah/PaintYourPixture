import React from 'react';

import HomeHero from '../../components/HomeHero/HomeHero';
import ArticleSlider from '../../components/ArticleSlider/ArticleSlider';

const Home = () => {

  // Side Menu Items Array
  const sideMenuItems = [
    <a aria-label="pageContent" className="home-hero-side-bar-item a-1" key={0} href="#slideAnchor">Paint your pixture</a>
  ];

  return (
    <div>

      {/* Hero/Header */}
      <HomeHero sideMenuItems={sideMenuItems} className="mb-5">
        <h2 className="mb-1 mb-sm-3">
          Humble Beginnings
        </h2>
        <div className="row">
          <div className="col-12 col-md-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. 
            </p>
          </div>
          <div className="col-12 col-md-6 text-left text-md-right">
            <span className="home-hero-date">
              April 19th 2016
            </span>
          </div>
        </div>
      </HomeHero>

      {/* Article Slider 1 */}
      <ArticleSlider  header="Title Lorem" className="mb-5"/>

      {/* Copy content 1 */}
      <section className="section-block mb-5 mt-5 pt-5 pb-5">
        <div className="section-date-label">
          <p>
            <span className="text-dark-blue">29th</span> September 2009
          </p>
        </div>
        <div className="container content-container">
            <div className="row">
              <div className="col-12 col-md-6">
                <p>
                  Coming out of my cage  And I've been doing just fine
                  Gotta gotta be down Because I want it all
                  It started out with a kiss How did it end up like this?
                  It was only a kiss, it was only a kiss Now I'm falling asleep
                  And she's calling a cab While he's having a smoke
                  And she's taking a drag Now they're going to bed  And my stomach is sick
                  And it's all in my head But she's touching his chest now
                  He takes off her dress now Let me go And I just can't look, it's killing me
                  And taking control
                </p>
                <p>
                  Jealousy, turning saints into the sea Swimming through sick lullabies
                  Choking on your alibis But it's just the price I pay Destiny is calling me
                  Open up my eager eyes 'Cause I'm Mr. Brightside
                </p>
              </div>
              <div className="col-12 col-md-6">
                <p>
                  I'm coming out of my cage And I've been doing just fine
                  Gotta gotta be down Because I want it all It started out with a kiss How did it end up like this?
                  (It was only a kiss), it was only a kiss Now I'm falling asleep And she's calling a cab
                  While he's having a smoke And she's taking a drag Now they're going to bed And my stomach is sick
                  And it's all in my head But she's touching his chest now He takes off her dress now
                  Let me go 'Cause I just can't look, it's killing me
                  And taking control
                </p>
                <p>
                  Jealousy, turning saints into the sea Swimming through sick lullabies
                  Choking on your alibi But it's just the price I pay Destiny is calling me Open up my eager eyes
                </p>
                <p>
                  'Cause I'm Mr. Brightside<br/>
                  I never<br/>
                  I never<br/>
                  I never<br/>
                  I never<br/>
                </p>
              </div>
            </div>
        </div>
      </section>

      {/* Article Slider 2 */}
      <ArticleSlider  header="Title Lorem" className="mb-5"/>

      {/* Copy content 2 */}
      <section className="section-block mb-5 mt-5 pt-5 pb-5">
        <div className="section-date-label">
          <p>
            <span className="text-dark-blue">27th</span> July 1987
          </p>
        </div>
        <div id="slideAnchor" className="container content-container">
            <div className="row">
              <div className="col-12 col-md-3">
                <h2 className="mb-4">Start-Up Resources</h2>
                <p>
                  We're no strangers to love
                  You know the rules and so do I
                  A full commitment's what I'm thinking of
                  You wouldn't get this from any other guy
                  I just wanna tell you how I'm feeling
                  Gotta make you understand
                </p>
                <p>
                  Never gonna give you up<br/>
                  Never gonna let you down<br/>
                  Never gonna run around and desert you<br/>
                  Never gonna make you cry<br/>
                  Never gonna say goodbye<br/>
                  Never gonna tell a lie and hurt you
                </p>
              </div>
              <div className="col-12 col-md-3">
                <h2 className="mb-4">Training &amp; Funding</h2>
                <p>
                  We've known each other for so long
                  Your heart's been aching but you're too shy to say it
                  Inside we both know what's been going on
                  We know the game and we're gonna play it
                  And if you ask me how I'm feeling
                  Don't tell me you're too blind to see
                </p>
                <p>
                  Never gonna give you up<br/>
                  Never gonna let you down<br/>
                  Never gonna run around and desert you<br/>
                  Never gonna make you cry<br/>
                  Never gonna say goodbye<br/>
                  Never gonna tell a lie and hurt you
                </p>
              </div>
              <div className="col-12 col-md-3">
                <h2 className="mb-4">Connect</h2>
                <p>
                  Never gonna give you up<br/>
                  Never gonna let you down<br/>
                  Never gonna run around and desert you<br/>
                  Never gonna make you cry<br/>
                  Never gonna say goodbye<br/>
                  Never gonna tell a lie and hurt you<br/>
                  Never gonna give, never gonna give<br/>
                  (Give you up)
                </p>
                <p>        
                  We've known each other for so long
                  Your heart's been aching but you're too shy to say it
                  Inside we both know what's been going on
                  We know the game and we're gonna play it
                  I just wanna tell you how I'm feeling
                  Gotta make you understand
                </p>
              </div>
              <div className="col-12 col-md-3">
                <h2 className="mb-4">Communicate</h2>
                <p>
                  Never gonna give you up<br/>
                  Never gonna let you down<br/>
                  Never gonna run around and desert you<br/>
                  Never gonna make you cry<br/>
                  Never gonna say goodbye<br/>
                  Never gonna tell a lie and hurt you<br/>
                  Never gonna give, never gonna give<br/>
                  (Give you up)
                </p>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
}
export default Home;