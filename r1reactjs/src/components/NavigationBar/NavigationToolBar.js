import React from 'react';
import { ArrowDownCircle } from 'react-feather';
import { ArrowUpCircle } from 'react-feather';
import { MessageCircle } from 'react-feather';
import './NavigationToolBar.css';
import '../Root.css';

const NavigationToolBar = () => {
  const pageHeader = "Sai Tej Sunkara";
  let isArrowDown = false;
  return (
    <nav className="navbar navbar-expand-lg fixed-top navigationPrimaryBackground">
        <div className="container">
            <span className="navbar-brand navigationBrand clickableObject order-lg-1">{pageHeader}</span>
            <div className='ms-auto me-auto order-lg-4'>
              <ul className="navbar-nav mb-lg-0 ms-auto me-auto">
                  <li className="nav-item mx-lg-5 my-2 my-lg-0 navigationText ms-auto me-auto ms-lg-0 me-lg-0">
                        <button type="button" className="btn navigationContactButtonBackground rootDesktop">
                          <span className="px-0 px-lg-5">Connect</span>
                        </button>
                        <span className="navbar-toggler rootMobile clickableObject">
                          <MessageCircle /><span className="mobileConnectText ms-1 navigationText clickableObject">Connect</span>
                        </span>
                  </li>
                </ul>
            </div>
            <span className="navbar-toggler order-lg-2" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
             aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
               {
                 isArrowDown?<ArrowUpCircle />:<ArrowDownCircle />
               }
            </span>
            <div className="collapse navbar-collapse ms-auto order-lg-3" id="navbarCollapse">
              <ul className="navbar-nav mb-lg-0 ms-auto me-auto">
                <li className="nav-item mx-0 mx-lg-5 my-2 my-lg-0 navigationText clickableObject">Home</li>
                <li className="nav-item mx-0 mx-lg-5 my-2 my-lg-0 navigationText clickableObject">Projects</li>
                <li className="nav-item mx-0 mx-lg-5 my-2 my-lg-0 navigationText clickableObject">Experience</li>
              </ul>
            </div>
        </div>
    </nav>
  );
};

export default NavigationToolBar;
