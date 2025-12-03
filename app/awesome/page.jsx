"use client";

import React, { useEffect, useState } from "react";
import styles from "./Awesome-style.module.css";
import Link from "next/link";

export default function AwesomeHome() {
  const [now, setNow] = useState(null);

  useEffect(() => {
    setNow(new Date());
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function formatTime(d) {
    if (!d) return "";
    return d.toLocaleTimeString("pt-BR");
  }

  function formatDateExtenso(d) {
    if (!d) return "";
    return d.toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  return (
    <div className={styles.root}>
      <div id="container">
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
              <Link href="/awesome/about">Sobre</Link>
            </li>
            <li>
              <Link href="/awesome/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/awesome/contato">Contato</Link>
            </li>
          </ul>
        </div>

        <div className="gif-portfolio">
          <img src="/img/portfolio.gif" alt="gif portfolio" />
        </div>

        <div className="barra-gradiente" />

        <div className="data-e-hora">
          <span id="data-hoje">{formatDateExtenso(now)}</span>
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
