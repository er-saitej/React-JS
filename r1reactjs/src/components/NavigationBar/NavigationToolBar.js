import React from 'react';
import { useState } from 'react';
import { navigationLinks } from './NavigationLinks'; //getNavigationToolbarData
import { ArrowDownCircle } from 'react-feather';
import { ArrowUpCircle } from 'react-feather';
import { MessageCircle } from 'react-feather';
import { TrinityRingsSpinner } from 'react-epic-spinners';
import './NavigationToolBar.css';
import '../Root.css';

const NavigationToolBar = (props) => {
  const pageHeader = props.headingBrand;
  let [ arrowDown, setArrowDown ] = useState(true);
  let navigationItems = navigationLinks; // Directly data taking from js
  let toggleArrowDown = () => {
    setArrowDown(!arrowDown);
  }
  // useEffect(()=>{
  //   const fetchNavigationLinks = async () => { // If navigation links come from server
  //     try {
  //       let response = await fetch(getNavigationToolbarData.url);
  //       if(!response.ok) throw Error('Navigation links data is being updated');
  //       else {
  //         response = await response.json();
  //         if(response.length) setNavigationItems(response);
  //         else setNavigationItems(navigationLinks);
  //       }
  //     }
  //     catch(error) {
  //       console.log(error.stack);
  //       setNavigationItems(navigationLinks);
  //     }
  //   }
  //   fetchNavigationLinks();
  // }, [])
  return (
    <nav className="navbar navbar-expand-lg fixed-top navigationPrimaryBackground">
        <div className="container">
            <span className="rootDesktop"><TrinityRingsSpinner size={35} animationDuration={5000} color="#D3B1C2" /></span>
            <span className="navbar-brand navigationBrand clickableObject order-lg-1 ms-0 ms-lg-2">{pageHeader}</span>
            <div className='ms-auto me-auto order-lg-4'>
              <ul className="navbar-nav mb-lg-0 ms-auto me-auto">
                  <li className="nav-item mx-lg-5 my-2 my-lg-0 navigationText ms-auto me-auto ms-lg-0 me-lg-0">
                        <button type="button" className="btn navigationContactButtonBackground rootDesktop">
                          <span className="px-0 px-lg-5">Contact</span>
                        </button>
                        <span className="navbar-toggler rootMobile clickableObject">
                          <MessageCircle /><span className="mobileConnectText ms-1 navigationText clickableObject">Contact</span>
                        </span>
                  </li>
                </ul>
            </div>
            <span className="navbar-toggler order-lg-2" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
             aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" onClick={()=>toggleArrowDown()}>
               {
                 arrowDown?<ArrowDownCircle />:<ArrowUpCircle />
               }
            </span>
            <div className="collapse navbar-collapse ms-auto order-lg-3" id="navbarCollapse">
              <ul className="navbar-nav mb-lg-0 ms-auto me-auto">
                {navigationItems.map((link)=>(
                  <li key={link.id} className="nav-item mx-0 mx-lg-5 my-2 my-lg-0 navigationText clickableObject">{link.heading}</li>
                ))}
              </ul>
            </div>
        </div>
    </nav>
  );
};

NavigationToolBar.defaultProps = {
  headingBrand: "Portfolio"
}

export default NavigationToolBar;
