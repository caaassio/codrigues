"use client";

import React from "react";
import "./Contato.css";
import FormularioContato from "./FormularioContato";

export default function Contato() {
  return (
    <section id="contato" className="reveal">
      <h1 className="section-title">Contato</h1>

      <div className="wrapper-contato reveal">
        <div className="redes-sociais">
          <h2>Posso te ajudar com algum projeto?</h2>

          <a href="mailto:caaassio@gmail.com" className="email">
            <i className="fa-light fa-envelope" aria-hidden="true" />{" "}
            caaassio@gmail.com
          </a>

          <div className="social-icons reveal">
            <h2>Mídias sociais</h2>

            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/cassio-rodrigues-oliveira/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin linkedin" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="https://github.com/caaassio" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-square-github github" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/caaassio" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-square-instagram instagram" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/caaassio" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-square-facebook facebook" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="form reveal">
            <FormularioContato/>
        </div>
      </div>
    </section>
  );
}
