import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './sty.css';
import mas from '../img/massage-1.png';
import uic from '../img/logo.png';
import course from '../img/svgexport-1.png';
import sunIcon from '../img/icons8-sun-48 (3).png';
import moonIcon from '../img/icons8-moon-50.png';

export default function Navbar() {
  // Initialize darkMode state based on localStorage value or default to false
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    // Apply the theme based on the current darkMode state
    if (darkMode) {
      document.documentElement.classList.add('darkMode');
    } else {
      document.documentElement.classList.remove('darkMode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  };

  return (
    <nav>
      <div className='course'>
        <img src={course} alt="" />
        <p className='kurs'>
          <ScrollLink to="kurslar" smooth={true} duration={500}>
            Kurslarimiz
          </ScrollLink>
        </p>
      </div>
      <div className='uic'>
        <hr className='chiz' />
        <a href=''>
          <ScrollLink to="top" smooth={true} duration={500} >
            <img src={uic} alt="uic logo" className='logo1' />
          </ScrollLink>
        </a>
        <hr className='chiz' />
      </div>
      <div className='tel'>
        <button className='massege'>
          <img src={mas} alt="" width={"23px"} className='mas' />
          <a href="tel: +998 33 805 59 95">
            <p className='nomer'>+998338055995</p>
          </a>
        </button>
        <img src={darkMode ? sunIcon : moonIcon} alt="" width={"50px"} onClick={toggleDarkMode} />
        <ScrollLink to="inputField" smooth={true} duration={500}>
          <button className='sign'>
            Ariza qoldirish
          </button>
        </ScrollLink>
      </div>
    </nav>
  );
}
