"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import "./Header.css";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  const observerRef = useRef(null);
  const sectionsRef = useRef([]);
  const popupHashRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      setDarkMode(false);
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  function handleToggleTheme() {
    setDarkMode((p) => !p);
  }

  useEffect(() => {
    function onHashOrPop() {
      const hash = (window.location.hash || "").toLowerCase();
      if (hash.includes("spawn-contato") || hash === "#contato") {
        setActiveSection("contato");
        setMenuOpen(false);
        popupHashRef.current = true;
        return;
      }
      if (hash === "#home" || hash === "#about" || hash === "#portfolio" || hash === "#contato") {
        setActiveSection(hash.replace("#", ""));
        setMenuOpen(false);
        popupHashRef.current = true;
        return;
      }
    }

    if (typeof window === "undefined") return;
    onHashOrPop();
    window.addEventListener("hashchange", onHashOrPop);
    window.addEventListener("popstate", onHashOrPop);
    return () => {
      window.removeEventListener("hashchange", onHashOrPop);
      window.removeEventListener("popstate", onHashOrPop);
    };
  }, [pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (pathname && pathname.startsWith("/awesome")) {
      setActiveSection("awesome");

      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
      return;
    }

    if (!(window.location.pathname === "/" || window.location.pathname === "")) {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
      return;
    }

    const ids = ["home", "about", "portfolio", "contato"];
    const elems = ids.map((id) => document.getElementById(id)).filter(Boolean);
    sectionsRef.current = elems;

    if (elems.length === 0) return;

    if (popupHashRef.current) {
      requestAnimationFrame(() => {
        popupHashRef.current = false;
      });
    }

    const io = new IntersectionObserver(
      (entries) => {
        let best = null;
        for (const ent of entries) {
          if (!best || ent.intersectionRatio > best.intersectionRatio) best = ent;
        }
        if (best && best.isIntersecting) {
          const id = best.target.id;
          if (id) setActiveSection(id);
        }
      },
      {
        root: null,
        rootMargin: "0", 
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    elems.forEach((el) => io.observe(el));
    observerRef.current = io;

    // cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [pathname]);

  const handleLinkClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <Link href="/#home" className="link-logo" onClick={() => handleLinkClick("home")}>
        <div className="logo-n">
          <span className="letter-c">c</span>
          <span className="rest">odrigues.</span>
          <span className="full-name">assior</span>
        </div>
      </Link>

      <nav>
        <button id="menu-btn" type="button" onClick={() => setMenuOpen((p) => !p)}>
          <i className="fa-solid fa-bars" />
        </button>

        <ul id="menu" className={menuOpen ? "show" : ""}>
          <li>
            <Link
              href="/#home"
              className={`internal-link ${activeSection === "home" ? "active" : ""}`}
              onClick={() => handleLinkClick("home")}
            >
              HOME
            </Link>
          </li>

          <li>
            <Link
              href="/#about"
              className={`internal-link ${activeSection === "about" ? "active" : ""}`}
              onClick={() => handleLinkClick("about")}
            >
              SOBRE
            </Link>
          </li>

          <li>
            <Link
              href="/#portfolio"
              className={`internal-link ${activeSection === "portfolio" ? "active" : ""}`}
              onClick={() => handleLinkClick("portfolio")}
            >
              PORTFÓLIO
            </Link>
          </li>

          <li>
            <Link
              href="/#contato"
              className={`internal-link ${activeSection === "contato" ? "active" : ""}`}
              onClick={() => handleLinkClick("contato")}
            >
              CONTATO
            </Link>
          </li>

          <li>
            <label className={`switch ${!darkMode ? "active" : ""}`} id="themeSwitch" aria-label="Alternar tema">
              <input type="checkbox" id="themeToggle" checked={!darkMode} onChange={handleToggleTheme} />
              <i className="fa-solid fa-moon" aria-hidden="true" />
            </label>
          </li>
        </ul>
      </nav>
    </header>
  );
}
