import React, { useState } from 'react';
import '../styles/SignIn.css';
import '../styles/SignUp.css';

function AuthForm({ showMessage, handleSuccessfulAuth }) {
  const [isSignUp, setIsSignUp] = useState(true);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateForm = (event) => {
    event.preventDefault();

    if (isSignUp) {
      if (fullName !== 'Quvonchbek') {
        showMessage(false, 'Ism noto\'g\'ri kiritildi');
        return;
      }
      if (!email.includes('@')) {
        showMessage(false, 'Emailni to\'ldiring');
        return;
      }
      if (password !== 'uzbekistan') {
        showMessage(false, 'Parolingiz noto\'g\'ri');
        return;
      }
    } else {
      if (!email.includes('@')) {
        showMessage(false, 'Emailni to\'ldiring');
        return;
      }
      if (password !== 'uzbekistan') {
        showMessage(false, 'Parolingiz noto\'g\'ri');
        return;
      }
    }

    handleSuccessfulAuth();
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="form-container">
      <h2>{isSignUp ? 'Ro\'yhatdan o\'ting' : 'Tizimga kiring'}</h2>
      <form onSubmit={validateForm}>
        {isSignUp && (
          <input
            type="text"
            placeholder="Ismingiz"
            className="input"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        )}
        <input
          type="email"
          placeholder="Emailingiz"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Parolingiz"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="button">
          {isSignUp ? 'Ro\'yhatdan o\'ting' : 'Tizimga kirish'}
        </button>
      </form>
      <p className="toggle-text" onClick={toggleForm}>
        {isSignUp ? 'Sizda allaqachon akkaount bormi ? Tizimga kiring' : "Akkauntingiz yo'qmi? Ro\'yhatdan o\'ting"}
      </p>
    </div>
  );
}

export default AuthForm;
