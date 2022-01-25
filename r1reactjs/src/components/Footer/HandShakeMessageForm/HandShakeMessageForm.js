import React from 'react';
import { useState } from 'react';
import './HandShakeMessageForm.css';

const HandShakeMessageForm = ({handShakeForm, setHandShakeForm, handleFormSubmit, autoFocusReference}) => {
    let [isFormSubmitted, setIsFormSubmitted] = useState(false);
    let errors = {
        isNameError: false,
        isEmailError: false,
        isMessageError: false,
        ifFormValid: false
    }
    let [formErrors, setFormErrors] = useState(errors);
    const handleHandShakeForm = (e) => {
        const {name, value} = e.target;
        validateForm(name, value);
        setHandShakeForm({...handShakeForm, [name]: value});
    }
    const handleFormSubmitMessage = () => {
        setIsFormSubmitted(true);
        autoFocusReference.current.focus();
    }
    const validateForm = (name, value) => {
        const emailRegularExpression = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
        if(name==='name') {
            if(value.length<2 || value.length>30) setFormErrors({...formErrors, isNameError: true});
            else setFormErrors({...formErrors, isNameError: false});
        }
        if(name==='email') {
            if(emailRegularExpression.test(value)) setFormErrors({...formErrors, isEmailError: false});
            else setFormErrors({...formErrors, isEmailError: true});
        }
        if(name==="message") {
            if(value.length<7 || value.length>100) setFormErrors({...formErrors, isMessageError: true});
            else setFormErrors({...formErrors, isMessageError: false});
        }
    }
    return (
        <form className="handShakeMessageForm" onSubmit={(e)=>handleFormSubmit(e)}>
            <div>
                <label htmlFor="name" className='form-label'>Name:</label>
                <input name="name" ref={autoFocusReference} type="text" required autoFocus value={handShakeForm.name} onChange={(e)=>handleHandShakeForm(e)} placeholder='Enter your name here' className='form-control' />
                {formErrors.isNameError?<label className='form-text text-danger'>Name should be minimum of 2 characters and maximum of 30 characters.</label>:<label className='form-text'></label>}
            </div>
            <div>
                <label htmlFor="email" className='form-label'>Email:</label>
                <input name="email" type="email" required value={handShakeForm.email} onChange={(e)=>handleHandShakeForm(e)} placeholder='Enter your email here' className='form-control' />
                {formErrors.isEmailError?<label className='form-text text-danger'>Invalid email provided.</label>:<label className='form-text'></label>}
            </div>
            <div>
                <label htmlFor="message" className='form-label'>Message:</label>
                <textarea name="message" type="text" required value={handShakeForm.message} onChange={(e)=>handleHandShakeForm(e)} placeholder='Enter your message here' className='form-control' />
                {formErrors.isMessageError?<label className='form-text text-danger'>Message should be a minimum of 7 characters and maximum of 100 characters.</label>:<label className='form-text'></label>}
            </div>
            <div className='mt-3'>
                <button className='btn btn-success form-control' type="submit" onClick={()=>handleFormSubmitMessage()}>
                    <span className='px-lg-5'>Submit</span>
                </button>
            </div>
            <div className='mt-2 text-center'>
                {isFormSubmitted?<label className="form-label">Your handshake has been sent successfully!</label>:<label className='form-label'></label>}
            </div>
        </form>
    );
};

export default HandShakeMessageForm;
