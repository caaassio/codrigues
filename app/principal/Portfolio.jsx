"use client";

import React, { useState, useRef, useEffect } from "react";
import ReactDOM from 'react-dom';
import "./Portfolio.css";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Ana Carolline - Psicóloga",
      description: `Este site foi desenvolvido para a psicóloga Ana Carolline, apresentando sua trajetória, abordagem, relatos de pacientes, seu blog e facilitando o contato. Construído em React, prioriza uma navegação simples e responsiva, com conteúdo de fácil acesso. Todo o projeto visa fortalecer sua presença digital e transmitir segurança desde o primeiro contato.`,
      images: [
        "/img/portfolio/tela-port-1.1.jpg",
        "/img/portfolio/tela-port-1.2.jpg",
        "/img/portfolio/tela-port-1.3.jpg",
        "/img/portfolio/tela-port-1.4.jpg",
      ],
      demo: "https://caaassio.github.io/ana-carolline-psi/",
      repo: "https://github.com/caaassio/ana-carolline-psi",
    },
    {
      id: 2,
      title: "Spanbit",
      description: `Spanbit é um site desenvolvido com HTML e CSS, estruturado para garantir desempenho, acessibilidade e responsividade, proporcionando uma experiência eficiente na apresentação de soluções tecnológicas.`,
      images: [
        "/img/portfolio/tela-port-2.1.jpg",
        "/img/portfolio/tela-port-2.2.jpg",
        "/img/portfolio/tela-port-2.3.jpg",
      ],
      demo: "https://caaassio.github.io/tecblog/",
      repo: "https://github.com/caaassio/tecblog",
    },
    {
      id: 3,
      title: "Barbearia do Marcão",
      description: `O site da Barbearia do Marcão foi pensado para refletir o espírito do espaço: atendimento de qualidade, tradição e aquele ambiente onde o cliente se sente em casa. Além de mostrar os serviços, facilita o contato direto e o agendamento. Com um design limpo, responsivo e funcional, todo o projeto foi criado para fortalecer a imagem online da barbearia e conectar ainda mais com quem valoriza estilo e bom atendimento.`,
      images: [
        "/img/portfolio/tela-port-3.1.jpg",
        "/img/portfolio/tela-port-3.2.jpg",
        "/img/portfolio/tela-port-3.3.jpg",
        "/img/portfolio/tela-port-3.4.jpg",
        "/img/portfolio/tela-port-3.5.jpg",
      ],
      demo: "https://caaassio.github.io/barbearia-do-marcao/",
      repo: "https://github.com/caaassio/barbearia-do-marcao",
    },
    {
      id: 4,
      title: "Museu Nacional",
      description: `Este site foi desenvolvido para apresentar e divulgar o acervo, as exposições e as atividades do Museu Nacional. Construído com HTML, CSS e JavaScript, oferece uma navegação clara e responsiva, facilitando o acesso a informações sobre a história, a ciência e a cultura promovidas pela instituição. O projeto busca ampliar a visibilidade do museu e fortalecer sua conexão com o público, valorizando a preservação do patrimônio e o conhecimento.`,
      images: [
        "/img/portfolio/tela-port-4.1.jpg",
        "/img/portfolio/tela-port-4.2.jpg",
      ],
      demo: "https://caaassio.github.io/museu-nacional/",
      repo: "https://github.com/caaassio/museu-nacional",
    },
    {
      id: 5,
      title: "Bello Mimo - Centro Veterinário",
      description: `Este é o 1º site do Bello Mimo Centro Veterinário, uma clínica com 14 anos de história no cuidado animal. Construído com HTML, CSS e JS, foi pensado para ser leve, responsivo e fácil de navegar, reunindo informações essenciais sobre os serviços e a filosofia da clínica. O objetivo é fortalecer o vínculo com tutores, oferecendo um canal acessível que reflita a confiança e a dedicação construídas com os anos.`,
      images: [
        "/img/portfolio/tela-port-5.1.jpg",
        "/img/portfolio/tela-port-5.2.jpg",
        "/img/portfolio/tela-port-5.3.jpg",
        "/img/portfolio/tela-port-5.4.jpg",
        "/img/portfolio/tela-port-5.5.jpg",
      ],
      demo: "https://caaassio.github.io/vet/",
      repo: "https://github.com/caaassio/vet",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [carouselImages, setCarouselImages] = useState([]);
  const [current, setCurrent] = useState(0);
  const carouselRef = useRef(null);
  const modalRef = useRef(null);

  function openModal(imgs) {
    setCarouselImages(imgs);
    setCurrent(0);
    setIsModalOpen(true);
    document.body.classList.add("modal-aberto");
  }

  function closeModal() {
    setIsModalOpen(false);
    setCarouselImages([]);
    setCurrent(0);
    document.body.classList.remove("modal-aberto");
  }

  function showPrev() {
    if (carouselImages.length === 0) return;
    setCurrent((c) => (c - 1 + carouselImages.length) % carouselImages.length);
  }

  function showNext() {
    if (carouselImages.length === 0) return;
    setCurrent((c) => (c + 1) % carouselImages.length);
  }

  useEffect(() => {
    function handleOutsideClick(e) {
      if (!modalRef.current) return;
      if (e.target === modalRef.current) closeModal();
    }

    function handleKey(e) {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    }

    window.addEventListener("click", handleOutsideClick);
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("keydown", handleKey);
    };
  }, [carouselImages]);

  useEffect(() => {
    const carouselEl = carouselRef.current;
    if (!carouselEl) return;

    let startX = 0;
    let endX = 0;

    function onTouchStart(e) {
      startX = e.touches[0].clientX;
    }
    function onTouchMove(e) {
      endX = e.touches[0].clientX;
    }
    function onTouchEnd() {
      if (!startX || !endX) {
        startX = 0;
        endX = 0;
        return;
      }
      const diff = startX - endX;
      if (Math.abs(diff) > 50 && carouselImages.length > 1) {
        if (diff > 0) setCurrent((c) => (c + 1) % carouselImages.length);
        else setCurrent((c) => (c - 1 + carouselImages.length) % carouselImages.length);
      }
      startX = 0;
      endX = 0;
    }

    carouselEl.addEventListener("touchstart", onTouchStart);
    carouselEl.addEventListener("touchmove", onTouchMove);
    carouselEl.addEventListener("touchend", onTouchEnd);

    return () => {
      carouselEl.removeEventListener("touchstart", onTouchStart);
      carouselEl.removeEventListener("touchmove", onTouchMove);
      carouselEl.removeEventListener("touchend", onTouchEnd);
    };
  }, [carouselImages]);

  return (
    <section id="portfolio" className="reveal">
      <h1 className="section-title">Portfólio</h1>

      <div className="group-card">
        {projects.map((p) => (
          <div
            key={p.id}
            className="card reveal"
            onClick={() => openModal(p.images)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") openModal(p.images);
            }}
          >
            <picture>
              <img src={p.images[0]} alt={`${p.title} — preview`} />
            </picture>
            <p>{p.description}</p>
            <div className="card-icons">
              <a href={p.demo} target="_blank" rel="noopener noreferrer">
                <i className="fa-regular fa-globe" aria-hidden />
                <span className="sr-only">Link para demo</span>
              </a>
              <a href={p.repo} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github" aria-hidden />
                <span className="sr-only">Repositório no GitHub</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
        {typeof document !== "undefined" &&
            ReactDOM.createPortal(
                <div
                id="modal"
                ref={modalRef}
                className={`modal ${isModalOpen ? "active" : ""}`}
                style={{ display: isModalOpen ? "flex" : "none" }} // flex para centralizar
                role="dialog"
                aria-modal={isModalOpen ? "true" : "false"}
                >
                <div className={`modal-content ${isModalOpen ? "show" : ""}`}>
                    <button className="close-btn" onClick={closeModal} aria-label="Fechar modal">
                    ×
                    </button>

                    <div className="carousel">
                    <button className="carousel-btn prev" onClick={showPrev} aria-label="Imagem anterior">
                        ‹
                    </button>

                    <div className="carousel-images" ref={carouselRef}>
                        {carouselImages.map((src, idx) => (
                        <img
                            key={src + idx}
                            src={src}
                            alt={`Imagem ${idx + 1}`}
                            className={`carousel-image ${idx === current ? "active" : ""}`}
                            style={{ display: idx === current ? "block" : "none" }}
                        />
                        ))}
                    </div>

                    <button className="carousel-btn next" onClick={showNext} aria-label="Próxima imagem">
                        ›
                    </button>
                    </div>

                    <div className="carousel-dots">
                    {carouselImages.map((_, idx) => (
                        <button
                        key={idx}
                        className={`dot ${idx === current ? "active" : ""}`}
                        onClick={() => setCurrent(idx)}
                        aria-label={`Ir para imagem ${idx + 1}`}
                        />
                    ))}
                    </div>
                </div>
                </div>,
                document.body
            )}

    </section>
  );
}