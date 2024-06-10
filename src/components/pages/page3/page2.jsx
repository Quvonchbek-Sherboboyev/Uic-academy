import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import salom from "../img/banner_1.jpg"
import bit1 from '../img/Без названия.jpg'
import bit2 from '../img/bit1.jpg'
import bit3 from '../img/Без названия (1).jpg'
import bit4 from "../img/Без названия (2).jpg";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
            <h1 className='t1'>Bizning bitiruvchilar</h1>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}

      >
        <SwiperSlide>
          <div className='first'>
             <img src={bit1} alt="" />
          </div>
          <div className='first'>
             <img src={bit2} alt="" />
          </div>
          <div className='first'>
             <img src={bit3} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='first'>
             <img src={bit4} alt="" />
          </div>
          <div className='first'>
             <img src={salom} alt="" />
          </div>
          <div className='first'>
             <img src={bit1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='first'>
             <img src={bit2} alt="" />
          </div>
          <div className='first'>
             <img src={bit4} alt="" />
          </div>
          <div className='first'>
             <img src={bit3} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
