import React from 'react'
import './sty.css'
import { Link as ScrollLink } from 'react-scroll';
export default function     () {
  return (
    <div id="top" className='box1'>
     
      <div className='child'>
      <p>13 yillik tajriba, 200dan ortiq loyihalar,
          <br />
          9 yil xalqaro IT loyihalar bilan ishlash va $23 000 dollarlik resurs bitta kursda</p>
      <h1>UIC GROUP VA UIC IT ACADEMY</h1>
      <p className='text1'>Agar kurslar haqida ma'lumot olmoqchi bo'lsangiz quyidagi forma orqaliy ariza qoldiring</p>
      <ScrollLink to="inputField" smooth={true} duration={500}>
  
    <a className="btn-flip" data-back="Bosing" data-front="Ariza berish"></a>
  
</ScrollLink>
     
      </div>
      
        

    </div>
  )

}
