import React from "react";
import { Link as ScrollLink } from 'react-scroll';
import "./sty.css";

export default function Box6() {
  return (
    <div className="box6">
      <h1 className="text122">
        UIC IT Akademiyasi yordamida <a target="_blank" href="https://youtu.be/8TA9E-4cHkg?si=MOhCU8_Qz7KfP-Bb"> 476+</a> kishi o‘z <br />{" "}
        hayotini o‘zgartirdi. Siz ham sinab ko‘rasizmi?
      </h1>
      <ScrollLink to="inputField" smooth={true} duration={500}>
        <button>Boshlash</button>
      </ScrollLink>
    </div>
  );
}
