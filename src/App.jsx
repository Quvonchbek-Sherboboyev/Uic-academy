// App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AuthForm from './components/AuthForm';
import Home from './components/Home';
import NotFound from './components/pages/notfound/Notfound';
import Course from './components/pages/course1/course1'; // Import the Course component
import { Snackbar, Alert } from '@mui/material';
import './App.css';
import Loader from "./components/pages/loader/Loader";

function App() {
  const [message, setMessage] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loaders, setLoaders] = useState(true); // changed Loaders to loaders
  const [site, setSite] = useState(false); // changed Site to site

  useEffect(() => {
    const storedAuthStatus = localStorage.getItem('isAuthenticated');
    if (storedAuthStatus) {
      setIsAuthenticated(JSON.parse(storedAuthStatus));
    }
  }, []);

  setTimeout(() => {
    setLoaders(false);
    setSite(true);
  }, 4000);

  const showMessage = (success, text) => {
    const type = success ? 'success' : 'error';
    setMessage({ text, type });
    if (success) {
      setTimeout(() => {
        setMessage(null);
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', JSON.stringify(true));
      }, 3000);
    } else {
      setTimeout(() => setMessage(null), 3000);
    }
  };

  const handleSuccessfulAuth = () => {
    showMessage(true, 'Ro\'yhatdan o\'tishingiz tasdiqlandi');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <div className="App">
      {loaders ? (
        <Loader />
      ) : site ? (
        <Router>
          <Routes>
            <Route path="/" element={!isAuthenticated ? <AuthForm showMessage={showMessage} handleSuccessfulAuth={handleSuccessfulAuth} /> : <Navigate to="/home" />} />
            <Route path="/home" element={isAuthenticated ? <Home handleLogout={handleLogout} /> : <Navigate to="/" />} />
            <Route path="/Course" element={isAuthenticated ? <Course /> : <Navigate to="/" />} /> {/* Add Course route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      ) : null}
      <Snackbar
        open={!!message}
        autoHideDuration={6000}
        onClose={() => setMessage(null)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {message && (
          <Alert onClose={() => setMessage(null)} severity={message.type} sx={{ width: '100%' }}>
            {message.text}
          </Alert>
        )}
      </Snackbar>
    </div>
  );
}

export default App;
