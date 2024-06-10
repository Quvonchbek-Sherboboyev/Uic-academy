import React, { useState, useEffect } from 'react';
import './style.css';
import chart from '../img/rocket-2-svgrepo-com.png';
import world from '../img/world.png';
import fire from '../img/fast-delivery-svgrepo-com.png';
import logo from '../img/uic.png';
import users from '../img/users.png';
import pen from '../img/icon.png';
import comp from '../img/icon-1.png';
import slayd from '../img/icon-2.png';
import piece from '../img/icon-3.png';
import { Link as ScrollLink } from 'react-scroll';

export default function Box3() {
  const [texts, setTexts] = useState([]);
  const [link, setLink] = useState('http://localhost:3000/Box3');

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

  return (
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
      <div className='box3-1'>
        <h1>Shuningdek</h1>
        <div className='box3-1child'>
          <div className='child1'>
            <h3>Loyihalarni topish, tenderlarda qatnashish va loyihani muvaffaqiyatli bajarish</h3>
            <hr />
            <div className='child2'>
              <img src={world} alt="" width={"70px"} />
              <ScrollLink to="inputField" smooth={true} duration={500}>
                <button className='btn'>
                  Ariza berish
                </button>
              </ScrollLink>
            </div>
          </div>
          <div className='child12'>
            <h3>UI/UX bilimlarini o’rganib <br /> saytlarni go’zallashtirish</h3>
            <hr />
            <div className='child2'>
              <img src={pen} alt="" width={"70px"} />
              <ScrollLink to="inputField" smooth={true} duration={500}>
                <button className='btn'>
                  Ariza berish
                </button>
              </ScrollLink>
            </div>
          </div>
          <div className='child1'>
            <h3>Freelance platformalarda <br /> ishlash va ulardan loyihalar <br /> topish</h3>
            <hr />
            <div className='child2'>
              <img src={comp} alt="" width={"70px"} />
              <ScrollLink to="inputField" smooth={true} duration={500}>
                <button className='btn'>
                  Ariza berish
                </button>
              </ScrollLink>
            </div>
          </div>
          <div className='child1'>
            <h3>Loyihalarni topish, tenderlarda qatnashish va loyihani muvaffaqiyatli bajarish</h3>
            <hr />
            <div className='child2'>
              <img src={slayd} alt="" width={"70px"} />
              <ScrollLink to="inputField" smooth={true} duration={500}>
                <button className='btn'>
                  Ariza berish
                </button>
              </ScrollLink>
            </div>
          </div>
          <div className='child12'>
            <h3>Project management asoslarini mutaxasisidan o’rganish</h3>
            <hr />
            <div className='child2'>
              <img src={slayd} alt="" width={"70px"} />
              <ScrollLink to="inputField" smooth={true} duration={500}>
                <button className='btn'>
                  Ariza berish
                </button>
              </ScrollLink>
            </div>
          </div>
          <div className='child12'>
            <h3>SEO optimizatsiya qilib saytlarda savdoni oshirish</h3>
            <hr />
            <div className='child2'>
              <img src={piece} alt="" width={"70px"} />
              <ScrollLink to="inputField" smooth={true} duration={500}>
                <button className='btn'>
                  Ariza berish
                </button>
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
