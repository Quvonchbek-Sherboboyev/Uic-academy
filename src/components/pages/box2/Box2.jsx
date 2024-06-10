import React, { useState, useEffect } from 'react';
import './style.css';

export default function Box2() {
  const [texts, setTexts] = useState([]);

  useEffect(() => {
    const fetchTexts = async () => {
      try {
        const response = await fetch('http://localhost:3000/Box2'); // JSON server manzili
        const data = await response.json();
        setTexts(data);
      } catch (error) {
        console.error('Ma\'lumotlarni olishda xatolik yuz berdi:', error);
      }
    };

    fetchTexts();
  }, []);

  return (
    <div className="box2">
      {texts.map((text, index) => (
        <div className="child" key={index}>
          <h1 className="Kotta">{text.text5}</h1>
          <p>{text.text6}</p>
        </div>
      ))}
    </div>
  );
}
