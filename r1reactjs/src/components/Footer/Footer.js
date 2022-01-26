import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { socialContactItems } from './SocialItems';
import HandShakeMessageForm from './HandShakeMessageForm/HandShakeMessageForm';
import '../Root.css';
import './Footer.css';

const Footer = () => {
  let autoFocusReference = useRef();
  let initialHandShakeFormValues = {
      name: '',
      email: '',
      message: ''
  }
  let [handShakeForm, setHandShakeForm] = useState(initialHandShakeFormValues);
  let socialContacts = socialContactItems;
  let handleContactFormSubmit = (e) => {
      e.preventDefault();
      let formValues = e.target[0].value;
      console.log(formValues);
      setHandShakeForm(initialHandShakeFormValues);
  }
  let getFullYear = () => {
    const date = new Date();  
    return date.getFullYear();
  }
  return (
    <div className='footerPrimaryBackground footerPrimaryHeight'>
        <section className="container">
            <article className='py-3'>
                <div className="row">
                    <div className="col-0 col-lg-1"></div>
                    <div className="col-12 col-lg-4 order-2 order-lg-1">
                        <section className="px-3 py-1 mb-2 jumbotronBackground rounded-3 text-center">
                            <span className="mailHeading">Drop a Handshake</span>
                        </section>
                        <section className="px-3 py-3 jumbotronBackground rounded-3">
                            <HandShakeMessageForm handShakeForm={handShakeForm} setHandShakeForm={setHandShakeForm} handleFormSubmit={handleContactFormSubmit} autoFocusReference={autoFocusReference} />
                        </section>
                    </div>
                    <div className="col-0 col-lg-1 order-lg-2"></div>
                    <div className="col-12 col-lg-6 order-1 order-lg-3">
                        <section className="p-3 rounded-3">
                            <span className="socialContactsHeading">Connect Socially!</span>
                            <div className="row">
                                { socialContacts.map((item) => (
                                    <div key={item.id} className='col-6 col-lg-4 text-center mt-3 mb-3 clickableObject'>
                                        <div className="socialConnectText">
                                            <img src={item.icon} className='iconStyle mt-4 mb-2' aria-label={item.name} />
                                            <br/>
                                            <span className='socialConnectPrimaryText'>{item.name}</span><br/>
                                            <span className='socialConnectSecondaryText'>{item.username}</span>
                                        </div>
                                    </div>
                                )) }
                            </div>
                        </section>
                    </div>
                </div>
            </article>
        </section>
        <div className='mt-3 py-3 text-center setBorderTop'>
            <section className="container">
                <span>Designed and developed by Sai Tej Sunkara.</span>
                <div className="rootMobile"></div>
                <span> &copy; {getFullYear()} </span>
            </section>
        </div>
    </div>
  );
};

export default Footer;
