import React from 'react';
import './Slider.css';
import Moon from '../assets/desktop/icon-moon.svg';
import Sun from '../assets/desktop/icon-sun.svg';

const Slider = ({ toggle }) => {
  return (
    <div>
      <img className='icon-sun' src={Sun} alt='sun-icon'></img>
      <label className='switch'>
        <input type='checkbox' onClick={toggle} />
        <span className='slider round'></span>
        <img className='icon-moon' src={Moon} alt='moon-icon'></img>
      </label>
    </div>
  );
};

export default Slider;
