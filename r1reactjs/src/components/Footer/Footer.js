import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { socialContactItems } from './SocialItems';
import HandShakeMessageForm from './HandShakeMessageForm/HandShakeMessageForm';
import '../Root.css';
import './Footer.css';

const Footer = () => {
  let autoFocusReference = useRef();
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [message, setMessage] = useState('');
  let socialContacts = socialContactItems;
  let handleContactFormSubmit = (e) => {
      e.preventDefault();
      let formValues = e.target[0].value;
      console.log(formValues);
      setName('');
      setEmail('');
      setMessage('');
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
                    <div className="col-12 col-lg-6 order-2 order-lg-1">
                        <section className="px-3 py-1 mb-2 jumbotronBackground rounded-3">
                            <span className="mailHeading">Drop a Handshake</span>
                        </section>
                        <section className="px-3 py-3 jumbotronBackground rounded-3">
                            <HandShakeMessageForm name={name} setName={setName} email={email} setEmail={setEmail} message={message} setMessage={setMessage} handleFormSubmit={handleContactFormSubmit} autoFocusReference={autoFocusReference} />
                        </section>
                    </div>
                    <div className="col-12 col-lg-6 order-1 order-lg-2">
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
            <article className='py-3 text-center setBorderTop'>
                <span>Designed and developed by Sai Tej Sunkara.</span>
                <div className="rootMobile"></div>
                <span> &copy; {getFullYear()} </span>
            </article>
        </section>
    </div>
  );
};

export default Footer;
