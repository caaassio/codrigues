"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../Awesome-style.module.css";

export default function AwesomePortfolio() {
  return (
            
    <div className={styles.root}>

      <div id="container">

        <div className="header-portfolio">
          <div className="foto">
            <img src="/img/avatar.png" alt="Cassio Rodrigues" />
          </div>
          <h1>Cassio Rodrigues portfolio</h1>
        </div>

        <div className="barra-gradiente" style={{ marginTop: '-420px' }}></div>

        <div className="galeria">
          <div className="img-port">
            <img src="/img/portfolio/tela-port-3.1.jpg" alt="Barbearia Marcão" />
            <p>barbearia-marcao.jpeg - 150kb</p>
          </div>

          <div className="img-port">
            <img src="/img/portfolio/tela-port-2.1.jpg" alt="TecBlog Spanbit" />
            <p>tecblog-spanbit.jpeg - 145kb</p>
          </div>

          <div className="img-port">
            <img src="/img/portfolio/tela-port-1.1.jpg" alt="Psicóloga Ana" />
            <p>psicologa-ana.jpeg - 160kb</p>
          </div>

          <div className="img-port">
            <img src="/img/portfolio/tela-port-4.1.jpg" alt="Museu Nacional" />
            <p>website-museu-nacional - 142kb</p>
          </div>

          <div className="img-port">
            <img src="/img/portfolio/tela-port-5.1.jpg" alt="Bello Mimo" />
            <p>website-bello-mimo - 135kb</p>
          </div>
        </div>

        <div className="barra-gradiente" style={{ marginTop: '110px' }}></div>

        <a className="btn-voltar" href="/awesome">
          <img src="/img/voltar.gif" alt="Voltar" />
        </a>

        <footer className="rodape">
          <p>Proudly designed by Cassio Rodrigues</p>
        </footer>
      </div>
    </div>
  );
}