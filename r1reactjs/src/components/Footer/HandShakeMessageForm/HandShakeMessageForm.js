import React from 'react';
import { useState } from 'react';
import './HandShakeMessageForm.css';

const HandShakeMessageForm = ({name, setName, email, setEmail, message, setMessage, handleFormSubmit, autoFocusReference}) => {
    let [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const handleOnNameChange = (e) => {
        const newName = e.target.value;
        setName(newName);
    }
    const handleOnEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
    }
    const handleOnMessageChange = (e) => {
        const newMessage = e.target.value;
        setMessage(newMessage);
    }
    const handleFormSubmitMessage = () => {
        setIsFormSubmitted(true);
        autoFocusReference.current.focus();
    }
    return (
        <form className="handShakeMessageForm" onSubmit={(e)=>handleFormSubmit(e)}>
            <div>
                <label htmlFor="name" className='form-label'>Name:</label>
                <input ref={autoFocusReference} type="text" required autoFocus value={name} onChange={(e)=>handleOnNameChange(e)} placeholder='Enter your name here' className='form-control' />
                <label className='form-text'></label>
            </div>
            <div>
                <label htmlFor="email" className='form-label'>Email:</label>
                <input type="email" required value={email} onChange={(e)=>handleOnEmailChange(e)} placeholder='Enter your email here' className='form-control' />
                <label className='form-text'></label>
            </div>
            <div>
                <label htmlFor="message" className='form-label'>Message:</label>
                <textarea type="text" required value={message} onChange={(e)=>handleOnMessageChange(e)} placeholder='Enter your message here' className='form-control' />
                <label className='form-text'></label>
            </div>
            <div>
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
