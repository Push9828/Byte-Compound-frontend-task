import React from 'react';
import './Header.css';
import Logo from '../assets/desktop/logo.svg';
import Slider from './Slider';

const Header = ({ toggle }) => {
  return (
    <header className='header'>
      <div className='header-container'>
        <img className='logo' src={Logo} alt='logo'></img>
        <Slider toggle={toggle} />
      </div>
    </header>
  );
};

export default Header;
