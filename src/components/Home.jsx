// Home.jsx
import React, { useState } from 'react';
import Box from './pages/box/Box';
import Box2 from './pages/box2/Box2';
import Box3 from './pages/box3/Box3';
import Page3 from './pages/page3/page2';
import Box5 from './pages/box5/Box5';
import Box6 from './pages/box6/Box6';
import Loader from "./pages/loader/Loader";
import Navbar from "./pages/navbar/navbar";
import Footer from "./pages/footer/Footer";
import '../styles/Home.css';
import { FaHeadset, FaSignOutAlt, FaGoogle, FaUserPlus, FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Home({ handleLogout }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showBox5Child2, setShowBox5Child2] = useState(false);
  const [Loaders, setLoaders] = useState(true);
  const [Site, setSite] = useState(false);
  const navigate = useNavigate();

  setTimeout(() => {
    setLoaders(false);
    setSite(true);
  }, 5000);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOutClick = () => {
    handleLogout();
    navigate('/');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:info@uic.academy';
  };

  const handleShowBox5Child2 = () => {
    setShowBox5Child2(true);
    const element = document.getElementById('inputField');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHomeClick = () => {
    navigate('/home');
  };

  return (
    <div className="container">
      {Loaders && <Loader />}
      {Site && (
        <>  
        <Navbar/>
          <Box />
          <Box2 />
          <Box3 />
          <Page3 />
          <Box5 showBox5Child2={showBox5Child2} />
          <Box6 />
          <Footer/>
          <div className="fab-container">
            <div className={`floating-action-button ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
              <FaHeadset />
            </div>
            {isOpen && (
              <div className="fab-options">
                <div className="fab-option" onClick={handleHomeClick}>
                  <FaHome />
                </div>
                <div className="fab-option" onClick={handleSignOutClick}>
                  <FaSignOutAlt />
                </div>
                <div className="fab-option" onClick={handleEmailClick}>
                  <FaGoogle />
                </div>
                <div className="fab-option" onClick={handleShowBox5Child2}>
                  <FaUserPlus />
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
