"use client";

import { useEffect, useRef, useState } from "react";
import './BackToTop.css'

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 200);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleClick(e) {
    e.preventDefault();
    setActive(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setActive(false);
    }, 800);
  }

  return (
    <a href="#" onClick={handleClick} aria-label="Voltar ao topo">
      <div
        id="backToTop"
        className={`btt ${visible ? "show" : ""} ${active ? "active" : ""}`}
      >
        <i className="fa-solid fa-rocket rocket"></i>
        <i className="fa-solid fa-fire flame"></i>
      </div>
    </a>
  );
}