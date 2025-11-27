"use client";

import React, { useEffect, useState } from "react";
import "./Awesome-style.css";

export default function AwesomeHome() {

    const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  function formatDate(d) {
    return d.toLocaleDateString();
  }
  function formatTime(d) {
    return d.toLocaleTimeString();
  }

  return (
    <div className="awesome-page">
      <div id="container">

        <img className="bg" src="/img/bg-90s.png" alt="fundo decorativo" />

        <div className="header">
          <img className="foto" src="/img/foto90s.jpg" alt="foto Cassio" />

          <h1>
            the
            <br />
            Cassio Rodrigues
            <br />
            portfolio
          </h1>

          <ul className="menu">
            <li>
              <a href="./awesome-about.html">Sobre</a>
            </li>
            <li>
              <a href="./awesome-portfolio.html">Portfólio</a>
            </li>
            <li>
              <a href="./awesome-contact.html">Contato</a>
            </li>
          </ul>
        </div>

        <div className="gif-portfolio">
          <img src="/img/portfolio.gif" alt="gif portfolio" />
        </div>

        <div className="barra-gradiente" />

        <div className="data-e-hora">
          <span id="data-hoje">{formatDate(now)}</span>
          <span id="hora-agora">{formatTime(now)}</span>
        </div>

        <div className="selos">
          <img src="/img/bemvindo.gif" alt="bem vindo" />
          <img src="/img/selo1.png" alt="selo 1" />
          <img src="/img/selo2.png" alt="selo 2" />
          <img src="/img/selo3.gif" alt="selo 3" />
        </div>

        <footer className="rodape">
          <p>Proudly designed by Cassio Rodrigues</p>
        </footer>
      </div>
    </div>
  );
}
