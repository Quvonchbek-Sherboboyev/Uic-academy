// Layout.jsx
import React from 'react';
import Navbar from './pages/footer/Footer'; // Ensure the correct import path
import Footer from './pages/footer/Footer'; // Ensure the correct import path


const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="main-content">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
