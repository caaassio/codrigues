// app/(main)/Header.jsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react"; 
import { useActiveSection } from "./ActiveSectionProvider"; // ← IMPORTANTE
import "./Header.css";

export default function Header() {
  const pathname = usePathname();
  const { activeSection } = useActiveSection(); // ← pega o estado do Provider
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // ==================== TEMA CORRIGIDO (NUNCA MAIS VAI DAR document is not defined) ====================
  useEffect(() => {
    // Só roda no cliente
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
  }, []); // roda só uma vez na montagem

  useEffect(() => {
    // Atualiza as classes e salva no localStorage quando darkMode mudar
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

  const handleToggleTheme = () => setDarkMode(prev => !prev);

  // ==================== FUNÇÃO AUXILIAR PRA SABER SE É ATIVO ====================
  const isActive = (section) => {
    // página /awesome tem tratamento especial
    if (pathname.startsWith("/awesome")) {
      return section === "awesome";
    }
    return activeSection === section;
  };

  // ==================== RENDER ====================
  return (
    <header className="site-header">
      <Link href="/#home" className="link-logo">
        <div className="logo-n">
          <span className="letter-c">c</span>
          <span className="rest">odrigues.</span>
          <span className="full-name">assior</span>
        </div>
      </Link>

      <nav>
        <button
          id="menu-btn"
          type="button"
          aria-label="Abrir menu"
          onClick={() => setMenuOpen(p => !p)}
        >
          <i className="fa-solid fa-bars" />
        </button>

        <ul id="menu" className={menuOpen ? "show" : ""}>
          <li>
            <Link
              href="/#home"
              className={`internal-link ${isActive("home") ? "active" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              HOME
            </Link>
          </li>

          <li>
            <Link
              href="/#about"
              className={`internal-link ${isActive("about") ? "active" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              SOBRE
            </Link>
          </li>

          <li>
            <Link
              href="/#portfolio"
              className={`internal-link ${isActive("portfolio") ? "active" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              PORTFÓLIO
            </Link>
          </li>

          <li>
            <Link
              href="/#contato"
              className={`internal-link ${isActive("contato") ? "active" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              CONTATO
            </Link>
          </li>

          {/* Switch de tema */}
          <li>
            <label
              className={`switch ${!darkMode ? "active" : ""}`}
              id="themeSwitch"
              aria-label="Alternar tema"
            >
              <input
                type="checkbox"
                id="themeToggle"
                checked={!darkMode}
                onChange={handleToggleTheme}
              />
              <i className="fa-solid fa-moon" aria-hidden="true" />
            </label>
          </li>
        </ul>
      </nav>
    </header>
  );
}