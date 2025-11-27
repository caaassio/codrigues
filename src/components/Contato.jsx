"use client";

import React from "react";
import "./Contato.css";

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
          <form id="meuFormulario" action="https://formspree.io/f/mwpobqnz" method="POST">
            <h2>Formulário de contato</h2>
            <div className="form-content">
              <div className="form-group">
                <label htmlFor="nome">Nome</label>
                <input type="text" name="nome" id="nome" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" id="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="mensagem">Mensagem</label>
                <textarea name="mensagem" id="mensagem" rows={10} required />
              </div>

              {/* honeypot anti-spam */}
              <input type="text" name="_honey" style={{ display: "none" }} />

              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_replyto" value="caaassio@gmail.com" />

              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
