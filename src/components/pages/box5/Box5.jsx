// Box5.jsx
import React, { useState, useEffect } from "react";
import './style.css';
import Uzum from "../img/svgexport-4.png";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Box5() {
  const [texts, setTexts] = useState([]);
  const [link, setLink] = useState('http://localhost:3000/Course');
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const req = await fetch(link);
        const data = await req.json();
        setTexts(data);
      } catch (error) {
        console.error(`Siz Olmoqchi bo'lgan ma'lumotda Xatolik bor`, error);
      }
    };
    dataFetch();
  }, [link]);

  const generateRandomCode = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const [course, setCourse] = useState('');
  const [user, setUser] = useState('');
  const [number, setNumber] = useState('');
  const [randomCode, setRandomCode] = useState(generateRandomCode());
  const [randomInput, setRandomInput] = useState('');
  const [message, setMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validCourses = ['Mobile Plus Level Up', 'Backend Plus Level Up', 'Frontend Plus Level Up', 'Front end', 'Grand'];
    if (!validCourses.includes(course)) {
      showMessage(`Kurs topilmadi`, 'error');
      return;
    }

    if (!/^[A-Z]/.test(user)) {
      showMessage('Ismingizning 1-harfi katta bo\'lishi kerak', 'error');
      return;
    }

    if (!/^\+998\d{9}$/.test(number)) {
      showMessage('+998 dan keyin 9 ta raqam bo\'lishi kerak', 'error');
      return;
    }

    if (randomInput !== randomCode) {
      showMessage('Random kod xato', 'error');
      return;
    }

    showMessage('Muvaffaqiyatli bazamizga yuborildi', 'success');
  };

  const showMessage = (text, type) => {
    setMessage({ text, type });
    setTimeout(() => {
      setMessage(null);
    }, 3000); 
  };

  const handleDivClick = () => {
    navigate('/Course'); // Navigate to the Course component
  };

  return (
    <div className='box5' id='kurslar'>
      <h1>Kurslarimiz bilan tanishing</h1>
      <div onClick={handleDivClick} className="box5-child"> {/* Add onClick handler */}
        {texts.map((text) => (
          <div className='mobile-plus' key={text.id}>
            <img src={text.img} alt="" width={'80px'} />
            <h2>{text.text}</h2>
          </div>
        ))}
        <div id='inputField'></div>
      </div>
      <div className='box5-child2'>
        <div className='child1'>
          <p>SIZGA QANDAY YORDAM BERA OLAMIZ?</p>
          <h2>Biz bilan kurs tanlang!</h2>
          <h3>Quyidagi homiyimiz orqali <br />kurslarimizni sotib oling:</h3>
          <div className='child'>
            <img src={Uzum} alt="Uzum" width={"50px"} />
            <p><a target="_blank" href="https://uzumnasiya.uz/">Uzum nasiya</a> orqali muddatli to’lov asosida xarid qilishingiz mumkin</p>
          </div>
        </div>
        <div className="child2">
          <input
            type="text"
            className="course"
            placeholder="Kursni yozing"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
          <input
            type="text"
            className="user"
            placeholder="Ismingizni kiriting"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <input
            type="text"
            className="number"
            placeholder="+998"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <div className="check">
            <input
              type="text"
              className="random-code"
              value={randomCode}
              readOnly
            />
            <input
              type="text"
              className="random-input"
              placeholder="Random kodni kiriting"
              value={randomInput}
              onChange={(e) => setRandomInput(e.target.value)}
            />
          </div>
          <button className="btn" onClick={handleSubmit}>
            Ariza yuborish
          </button>
        </div>
      </div>
      <Snackbar
        open={!!message}
        autoHideDuration={6000}
        onClose={() => setMessage(null)}
      >
        {message && (
          <Alert onClose={() => setMessage(null)} severity={message.type}>
            {message.text}
          </Alert>
        )}
      </Snackbar>
    </div>
  );
}
