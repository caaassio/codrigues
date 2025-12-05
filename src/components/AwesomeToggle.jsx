"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import "./AwesomeToggle.css";

export default function AwesomeToggle() {
  const router = useRouter();
  const pathname = usePathname();

  const [isChecked, setIsChecked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const isHome = pathname === "/";
  const isAwesome = pathname === "/awesome";

  useEffect(() => {
    if (!isHome) {
      setIsVisible(false);
      return;
    }

    const target = document.getElementById("contato");

    if (!target) {
      // Se ainda não carregou, tenta de novo (fallback)
      const timer = setInterval(() => {
        const el = document.getElementById("contato");
        if (el) {
          clearInterval(timer);
          setupObserver(el);
        }
      }, 200);
      return () => clearInterval(timer);
    }

    const setupObserver = (el) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          // Só mostra quando a section contato estiver realmente visível na tela
          // (pelo menos 20% dela)
          if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
            setIsVisible(true);
          } else {
            setIsVisible(false); // AQUI TÁ O SEGREDO, CHAMP!
          }
        },
        {
          threshold: [0, 0.2, 0.5, 0.8, 1.0], // mais pontos = mais preciso
          rootMargin: "-15% 0px -15% 0px", // dá uma margem pra aparecer/sumir suavemente
        }
      );

      observer.observe(el);

      // Checagem inicial
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9 && rect.bottom > window.innerHeight * 0.1) {
        setIsVisible(true);
      }

      return () => observer.disconnect();
    };

    setupObserver(target);
  }, [isHome]);

  // sincroniza checkbox
  useEffect(() => {
    setIsChecked(isAwesome);
  }, [isAwesome]);

  // transição suave
  useEffect(() => {
    if (isAwesome !== isChecked) {
      const label = document.querySelector(".toggle-awesome");
      label?.classList.add("no-transition");
      setIsChecked(isAwesome);
      requestAnimationFrame(() => label?.classList.remove("no-transition"));
    }
  }, [isAwesome, isChecked]);

  const handleChange = () => {
    if (isAwesome) {
      router.replace("/#spawn-contato", { scroll: false });
    } else {
      router.push("/awesome");
    }
  };

  if ((!isHome && !isAwesome) || (isHome && !isVisible)) {
    return null;
  }

  return (
    <label className={`toggle-awesome ${isVisible ? "visible" : ""}`}>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      <span className="slider-awesome"></span>
    </label>
  );
}