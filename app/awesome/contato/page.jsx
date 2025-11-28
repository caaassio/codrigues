"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function AwesomeContato() {
  return (
    <div id="container">

      <div className="contato-gif">
        <img src="/img/contato.gif" alt="Contato" />
      </div>

      <div className="form">
        <form id="meuFormulario" action="https://formspree.io/f/mwpobqnz" method="POST">
          <h2>Formulário de contato</h2>

          <div className="form-content">
            <div className="form-group">
              <label htmlFor="nome">Nome</label>
              <input type="text" name="nome" id="nome" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Endereço de correio eletrônico</label>
              <input type="email" name="email" id="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea name="mensagem" id="mensagem" rows={10} required />
            </div>

            <input type="text" name="_honey" style={{ display: 'none' }} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_replyto" value="caaassio@gmail.com" />

            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>

      <div className="barra-gradiente" style={{ marginTop: '110px' }}></div>

      <a className="btn-voltar" href="/awesome">
        <img src="/img/voltar.gif" alt="Voltar" />
      </a>

      <footer className="rodape">
        <p>Proudly designed by Cassio Rodrigues</p>
      </footer>

      <div id="popupObrigado" className="popup">
        <div className="popup-content">
          <p>
            Obrigado pelo contato! <i className="fa-solid fa-thumbs-up"></i>
          </p>
          <button className="btn-popup" onClick={() => {
            document.getElementById('popupObrigado').style.display = 'none';
          }}>
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}