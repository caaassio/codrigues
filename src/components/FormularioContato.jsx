"use client";

import React, { useEffect, useRef, useState } from "react";
import './FormularioContato.css';

export default function FormularioContato() {
  const formRef = useRef(null);
  const nomeRef = useRef(null);
  const emailRef = useRef(null);

  const [showObrigado, setShowObrigado] = useState(false);
  const [showAlerta, setShowAlerta] = useState(false);
  const popupJaExibidoRef = useRef(false);
  const sendingRef = useRef(false);

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (sendingRef.current) return;
      sendingRef.current = true;

      try {
        const response = await fetch(form.action, {
          method: form.method || "POST",
          headers: { Accept: "application/json" },
          body: new FormData(form),
        });

        if (response.ok) {
          setShowObrigado(true);
          form.reset();
        } else {
          alert("Algo deu errado. Tente novamente.");
        }
      } catch (err) {
        console.error("Erro:", err);
        alert("Ocorreu um erro ao enviar o formulário.");
      } finally {
        sendingRef.current = false;
      }
    };

    form.addEventListener("submit", handleSubmit);
    return () => {
      form.removeEventListener("submit", handleSubmit);
    };
  }, []);

  useEffect(() => {
    const nome = nomeRef.current;
    const email = emailRef.current;
    if (!nome || !email) return;

    const onEmailFocus = () => {
      if (popupJaExibidoRef.current) return;
      if (nome.value.trim() !== "") {
        setShowAlerta(true);
        popupJaExibidoRef.current = true;
      }
    };

    email.addEventListener("focus", onEmailFocus);
    return () => {
      email.removeEventListener("focus", onEmailFocus);
    };
  }, []);

  return (
    <>
      <div className="form reveal">
        <form
          id="meuFormulario"
          ref={formRef}
          action="https://formspree.io/f/mwpobqnz"
          method="POST"
        >
          <h2>Formulário de contato</h2>

          <div className="form-content">
            <div className="form-group">
              <label htmlFor="nome">Nome</label>
              <input ref={nomeRef} type="text" name="nome" id="nome" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                ref={emailRef}
                type="email"
                name="email"
                id="email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea name="mensagem" id="mensagem" rows={10} required />
            </div>

            <input type="text" name="_honey" style={{ display: "none" }} />

            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_replyto" value="caaassio@gmail.com" />

            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>

      {showObrigado && (
        <div
          id="popupObrigado"
          className="popup"
          role="dialog"
          aria-modal="true"
          style={{ display: "flex" }}
        >
          <div className="popup-content">
            <h3>Obrigado!</h3>
            <br/>
            <p>Sua mensagem foi enviada com sucesso. Responderei em breve.</p>
            <button
              className="btn-popup"
              onClick={() => setShowObrigado(false)}
              aria-label="Fechar popup de obrigado"
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      {/* Popup Alerta */}
      {showAlerta && (
        <div
          id="popupAlerta"
          className="popup"
          role="dialog"
          aria-modal="true"
          style={{ display: "flex" }}
        >
          <div className="popup-content">
            <h3>Sério?</h3>
            <p>
                <br/>
              Formulário em 2025? Então tá...
            </p>
            <button
              id="fecharPopupAlerta"
              className="btn-popup"
              onClick={() => setShowAlerta(false)}
              aria-label="Fechar alerta sobre formulário"
            >
              Continuar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
