import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Root.css';

const Root = () => {
    let [color, setColor] = useState('white');
    const changeColor = (e) => {
        let newValue = e.target.value;
        setColor(newValue);
    }
  return (
    <div className='text-center d-flex align-items-center justify-content-center mt-5'>
        <div className="row">
            <div className='box' style={{background:color}}>
                <div>{color}</div>
            </div>
        </div>
        <div className="row">
            <input type="text" name="colorText" value={color} onChange={(e)=>changeColor(e)} />
        </div>
    </div>
  );
};

export default Root;
