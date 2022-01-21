import React from 'react';
import { ArrowDownCircle } from 'react-feather';
import { ArrowUpCircle } from 'react-feather';
import './NavigationToolBar.css';

const NavigationToolBar = () => {
  const pageHeader = "Sai Tej Sunkara";
  let isArrowDown = false;

  function changeArrowState() {
    console.log(isArrowDown);
    isArrowDown = !isArrowDown;
    console.log(isArrowDown);
  }

  return (
    <nav className="navbar navbar-expand-lg fixed-top navigationPrimaryBackground">
        <div className="container">
            <span className="navbar-brand navigationBrand">{pageHeader}</span>
            <span className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
             aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" onClick={changeArrowState()}>
               {
                 isArrowDown?<ArrowUpCircle />:<ArrowDownCircle />
               }
            </span>
            <div className="collapse navbar-collapse ms-auto" id="navbarCollapse">
              <ul className="navbar-nav mb-2 mb-lg-0 ms-auto me-auto">
                <li className="nav-item mx-0 mx-lg-5 my-2 my-lg-0 navigationText">Home</li>
                <li className="nav-item mx-0 mx-lg-5 my-2 my-lg-0 navigationText">Projects</li>
                <li className="nav-item mx-0 mx-lg-5 my-2 my-lg-0 navigationText">Experience</li>
              </ul>
              <ul className="navbar-nav mb-2 mb-lg-0 ms-auto me-auto">
                <li className="nav-item mx-lg-5 my-2 my-lg-0 navigationText ms-auto me-auto ms-lg-0 me-lg-0">
                      <button type="button" className="btn btn-primary navigationContactButtonBackground">
                        <span className="px-5">Connect</span>
                      </button>
                </li>
              </ul>
            </div>
        </div>
    </nav>
  );
};

export default NavigationToolBar;
