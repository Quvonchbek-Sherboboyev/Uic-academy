import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from 'react-scroll';
import "./sty.css";

export default function Footer() {
  const [texts, setTexts] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const req = await fetch('db.json');
        const data = await req.json();
        setTexts(data.Footer);
      } catch (error) {
        console.error(`Siz Olmoqchi bo'lgan ma'lumotda Xatolik bor`, error);
      }
    };
    dataFetch();
  }, []);

  return (
    <div className="footer">
      <div className="footer-child1">
      <div className="child">
          <div className="child-1">
            {texts.map((text, index) => (
              <div className="child-2" key={index}>
                <ScrollLink to="top" smooth={true} duration={500}>
                  <img src={text.img} alt=""  />
                </ScrollLink>
                <ScrollLink to="top" smooth={true} duration={500}>
                  <img src={text.img1} alt="" width="auto" height="50px" />
                </ScrollLink>
              </div>
            ))}
            <p>{texts.length > 0 && texts[0].text1}</p>
          </div>
        </div>
        <div className="child1">
          <ScrollLink to="kurslar" smooth={true} duration={500}>
            <p>Kurslar</p>
          </ScrollLink>
          <ScrollLink to="afzallik" smooth={true} duration={500}>
            <p>Afzalliklari</p>
          </ScrollLink>
        </div>
        <div className="child1">
          <a href="mailto:info@uic.academy">
            <p>Gmail: info@uic.academy</p>
          </a>
          <a href="tel:+9983380559">
            <p>Tel: +998 33 805 59</p>
          </a>
        </div>
      </div>
      <iframe
        className="map"
        src="https://yandex.uz/map-widget/v1/?ll=69.267904%2C41.340995&mode=whatshere&whatshere%5Bpoint%5D=69.267412%2C41.341230&whatshere%5Bzoom%5D=17&z=18"
        allowFullScreen
        title="map"
      />
      <div className="footer-child2">
        <hr width="1200px" color="gray" />
        <div className="child3">
          <p>© 2024 UIC IT Academy</p>
          <div className="child4">
            <a href="https://www.facebook.com/uicgroup.org">
              <img
                width="34"
                height="34"
                src="https://img.icons8.com/color/48/facebook-new.png"
                alt="facebook-new"
              />
            </a>
            <a href="https://t.me/uicitacademy">
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-telegram-is-a-cloud-based-instant-messaging-and-voice-over-ip-service-logo-color-tal-revivo.png"
                alt="telegram"
              />
            </a>
            <a href="https://www.instagram.com/uicitacademy/">
              <img
                width="34"
                height="34"
                src="https://img.icons8.com/fluency/48/instagram-new.png"
                alt="instagram-new"
              />
            </a>
            <a href="https://twitter.com/UIC_Group">
              <img
                width="34"
                height="34"
                src="https://img.icons8.com/color/48/twitter--v1.png"
                alt="twitter"
              />
            </a>
            <a href="https://ru.linkedin.com/company/uic-group">
              <img
                width="34"
                height="34"
                src="https://img.icons8.com/color/48/linkedin.png"
                alt="linkedin"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

