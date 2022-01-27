import React from 'react';
import TypeWriter from 'typewriter-effect';
import ReactParticles from './Particles/Particles';
import homeBanner from '../../assets/homeBanner.svg';
import { greetings } from './HomeLinks.js';
import '../Root.css';
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
        <div className="homeBanner mt-5 pt-5">
        <ReactParticles />
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-6 order-lg-2 mt-0 pt-0 mt-lg-5 pt-lg-5 justify-content-center text-center">
                  <img src={homeBanner} className='homeBannerImage' alt="working software engineer" />
                </div>
                <div className="col-12 col-lg-6 order-lg-1 mt-0 mt-md-5 mt-lg-0 text-center">
                  <div className="row">
                    <div className="helloText">{greetings.text}!</div>
                  </div>
                  <div className="row pt-5">
                    <div className="col-12 typeText pe-0"><TypeWriter options={{strings:greetings.roles, autoStart: true, loop:true}} /></div>
                  </div>
                  <div className="row pt-5">
                    <div className="col-12 typeTextSmall">I consciously convert caffeine into code. </div>
                  </div>
                  <div className="row pt-5 px-3">
                    <button type="button" className="btn navigationContactButtonBackground">
                          <span className="px-0 px-lg-5">Resume</span>
                        </button>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  );
};

export default Home;
