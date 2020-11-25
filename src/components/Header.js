import React from 'react';
import './Header.css';
import './Slider.css';
import Logo from '../assets/desktop/logo.svg';
import Moon from '../assets/desktop/icon-moon.svg';
import Sun from '../assets/desktop/icon-sun.svg';

const Header = () => {
  return (
    <header className='header'>
      <img className='logo' src={Logo} alt='logo'></img>
      <label class='switch'>
        <input type='checkbox' />
        <span class='slider round'></span>
      </label>
      <img className='icon-moon' src={Moon} alt='moon-icon'></img>
      <img className='icon-sun' src={Sun} alt='sun-icon'></img>
    </header>
  );
};

export default Header;
