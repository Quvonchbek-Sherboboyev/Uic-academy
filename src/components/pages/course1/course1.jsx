import React , {useState  , useEffect } from 'react'
import './sty.css'
import chart from '../img/rocket-2-svgrepo-com.png';
import world from '../img/world.png';
import fire from '../img/fast-delivery-svgrepo-com.png';
import logo from '../img/uic.png';
import users from '../img/users.png';
import teach1 from "../img/univerImg.jpeg";
import teach2 from "../img/univerImg2.jpeg";
import teach3 from "../img/tradeImg.png";
import { Link as ScrollLink } from 'react-scroll';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Uzum from "../img/svgexport-4.png";
import mas from '../img/massage-1.png';
import uic from '../img/logo.png';
import course from '../img/svgexport-1.png';
import sunIcon from '../img/icons8-sun-48 (3).png';
import moonIcon from '../img/icons8-moon-50.png';
import { FaHeadset, FaSignOutAlt, FaGoogle, FaUserPlus, FaHome } from 'react-icons/fa';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function course1() {
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
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
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

    // Validatsiya
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


  return (
    <div className='courses1'>
       <nav>
      <div className='course'>
        <img src={course} alt="" />
        <p className='kurs'>
          <ScrollLink to="inputField" smooth={true} duration={500}>
            Kurslarimiz
          </ScrollLink>
        </p>
      </div>
      <div className='uic'>
        <hr className='chiz' />
        <a href=''>
          <ScrollLink to="bosh" smooth={true} duration={500} >
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
    <div className='courses' id='bosh'>
      <div className='child1'>
          <h1 className='child'>Front-end</h1>
      </div>
     
   
     
    
    </div>
      <div className='child2'>
         <h1 className='child2'>Front-end kursimiz haqida malumot: </h1>
         <div className='accordion'>
      <Accordion className='acc1'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Front end haqida </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Front-end veb-dasturlash - bu foydalanuvchilar ko'radigan va bevosita o'zaro aloqada bo'ladigan veb-sahifalar va veb-ilovalar qismlarini ishlab chiqish san'ati va ilmi. Bu foydalanuvchilar bilan muloqot qiladigan va ularga vizual va interaktiv tajribani taqdim etadigan elementlarni yaratishga qaratilgan. Front-end rivojlanish quyidagi asosiy komponentlarni o'z ichiga oladi:
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='acc1'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Asosiy Texnologiyalar</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Veb-sahifaning tuzilishi va mazmuni uchun javobgar.
          HTML yordamida matn, rasm, havola, forma va boshqa elementlar yaratiladi.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  className='acc1'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>CSS (Cascading Style Sheets)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          HTML elementlarining ko'rinishi va joylashuvini boshqarish uchun ishlatiladi.
          Ranglar, shriftlar, maketlar va boshqa vizual jihatlarni belgilash imkonini beradi.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  className='acc1'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>JavaScript:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Veb-sahifalarga interaktivlik qo'shish uchun ishlatiladi.
          Foydalanuvchi hodisalariga (kliklar, sichqoncha harakati, klaviatura kirishlari) javob beradi.
          Dinamik tarkib yaratish va serverdan ma'lumotlarni asinxron yuklash imkonini beradi.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  className='acc1'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Yordamchi Texnologiyalar va Asboblar</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          React, Vue.js, Angular: Veb-ilovalarni tezroq va samaraliroq yaratish uchun ishlatiladi.
          jQuery: DOM manipulyatsiyasini soddalashtirish uchun ishlatiladigan kutubxona.
          Sass, LESS: Kaskadli uslub varaqlarini yanada qulay va kuchliroq qilish uchun ishlatiladi.
          Webpack, Parcel, Babel: Kodni qayta ishlash, birlashtirish va eski brauzerlar uchun moslash.
          Git: Kodni boshqarish va bir nechta dasturchilar bilan birgalikda ishlash uchun ishlatiladi.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  className='acc1'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Dizayn Asoslari</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Foydalanuvchi interfeysi (UI) va foydalanuvchi tajribasi (UX) dizayni.
Veb-sahifalarning chiroyli, foydalanishga qulay va intuativ bo'lishini ta'minlash.
Turli xil qurilmalar va ekran o'lchamlariga moslashish.
Media queries yordamida moslashuvchan maketlar yaratish.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  className='acc1'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Front-end Dasturchining Vazifalari</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Veb-saytlar va veb-ilovalar uchun foydalanuvchi interfeyslarini yaratish.
Dizaynerlar bilan hamkorlik qilib, maketlarni interaktiv sahifalarga aylantirish.
Foydalanuvchi tajribasini yaxshilash uchun interaktiv elementlarni qo'shish.
Kodning toza, qayta ishlatiladigan va kengaytiriladigan bo'lishini ta'minlash.
Yangi texnologiyalarni o'rganish va ularni amaliyotda qo'llash.
Front-end dasturlash foydalanuvchilar bilan bevosita muloqot qilish uchun veb-sahifalar va ilovalarni yaratish jarayoni bo'lib, bunda asosiy maqsad ularga samarali, chiroyli va qulay tajriba taqdim etishdir.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
     </div>
     <div className='box3' id='afzallik'>
      <div className='box3-' >
        <div className='box3-parent1'>
          <div className='parent1-child1'>
            <div className='child'>
              <p>Bizning jamoa</p>
              <h3>Eng tez o‘suvchi IT kompaniya</h3>
            </div>
            <img src={chart} alt="" width={"90px"} />
          </div>
          <div className='parent1-child2'>
            <p>Bizning jamoa</p>
            <h1>150+</h1>
          </div>
          <div className='parent1-child3'>
            <img src={world} alt="world" width={"30px"} />
            <p>AQSH, BAA, Singapur, UK, Yaponiya va O‘zbekiston</p>
            <p className='text'>Dunyo bo‘ylab xizmat ko‘rsatamiz</p>
          </div>
        </div>
        <div className='box3-parent2'>
          <div className='parent2-child1'>
            <div className='child'>
              <p>Bizning jamoa</p>
              <h3>Eng tezkor yetkazuvchi</h3>
            </div>
            <img src={fire} alt="" width={"90px"} className='fast' />
          </div>
          <div className='parent2-child2'>
            <img src={logo} alt="" />
          </div>
        </div>
        <div className='box3-parent3'>
          <div className='parent3-child1'>
            <div className='child'>
              <p>Bizning jamoa</p>
              <h3>Sifatli xizmat ko‘rsatuvchi</h3>
            </div>
            <img src={users} alt="" width={"90px"} />
          </div>
          <div className='parent3-child2'>
            <p>Bepul
              <br />
              Open Space’lar</p>
          </div>
          <div className='parent3-child3'>
            <div className='child'>
              <p>Ijtimoiy loyihalarga doimiy hamkor</p>
              <h3>100dan ortiq bepul <br /> loyihalar muallifi</h3>
            </div>
            <img src="https://uic.academy/loyha.png" alt="" width={"105px"} />
          </div>
        </div>
      </div>
    
    </div>
    <h1>O'qituvchilarimiz bilan tanishing</h1>
    <div className='cards'>
      
        <div className='card'>
          <img src={teach1} alt="pen" />
          <h3>Sharipov Kongratboy</h3>
          <p>TDIU rektori</p>
        </div>
        <div className='card'>
          <img src={teach2} alt="comp" />
          <h3>Musayev AmirTemurxon</h3>
          <p>Direktor o'rinbosari</p>
        </div>
        <div className='card'>
          <img src={teach3} alt="slayd" />
          <h3>Aziz Halikov</h3>
          <br />
          <p>AZ Kapital loyihasi asoschisi</p>
        </div>
        <div className='card'>
          <img src={teach2} alt="comp" />
          <h3>Musayev AmirTemurxon</h3>
          <p>Direktor o'rinbosari</p>
        </div>
      </div>
      <div className='cards' id='inputField'>
      <div className='card'>
          <img src={teach3} alt="slayd" />
          <h3>Aziz Halikov</h3>
          <br />
          <p>AZ Kapital loyihasi asoschisi</p>
        </div>
        <div className='card'>
          <img src={teach2} alt="comp" />
          <h3>Musayev AmirTemurxon</h3>
          <p>Direktor o'rinbosari</p>
        </div>
        <div className='card'>
          <img src={teach1} alt="pen" />
          <h3>Sharipov Kongratboy</h3>
          <p>TDIU rektori</p>
        </div>
        <div className='card'>
          <img src={teach3} alt="slayd" />
          <h3>Aziz Halikov</h3>
          <br />
          <p>AZ Kapital loyihasi asoschisi</p>
        </div>
      </div>
      
      <div className='box5-child2'>
        <div className='child1'>
          <p>SIZGA QANDAY YORDAM BERA OLAMIZ?</p>
          <h2>Biz bilan kurs tanlang!</h2>
          <h3>Quyidagi homiyimiz orqali <br />kurslarimizni sotib oling:</h3>
          <div className='child'>
            <img src={Uzum} alt="Uzum" width={"50px"} />
            <p><a href="https://uzumnasiya.uz/">Uzum nasiya</a> orqali muddatli to’lov asosida xarid qilishingiz mumkin</p>
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
      <div className="box6">
      <h1 className="text122">
        UIC IT Akademiyasi yordamida <a href="https://youtu.be/8TA9E-4cHkg?si=MOhCU8_Qz7KfP-Bb"> 476+</a> kishi o‘z <br />{" "}
        hayotini o‘zgartirdi. Siz ham sinab ko‘rasizmi?
      </h1>
      <ScrollLink to="inputField" smooth={true} duration={500}>
        <button>Boshlash</button>
      </ScrollLink>
    </div>
    <div className="footer">
      <div className="footer-child1">
      <div className="child">
          <div className="child-1">
            {texts.map((text, index) => (
              <div className="child-2" key={index}>
                <ScrollLink to="bosh" smooth={true} duration={500}>
                  <img src={text.img} alt=""  />
                </ScrollLink>
                <ScrollLink to="bosh" smooth={true} duration={500}>
                  <img src={text.img1} alt="" width="auto" height="50px" />
                </ScrollLink>
              </div>
            ))}
            <p>{texts.length > 0 && texts[0].text1}</p>
          </div>
        </div>
        <div className="child1">
          <ScrollLink to="inputField" smooth={true} duration={500}>
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
   
    </div>
  )
}
