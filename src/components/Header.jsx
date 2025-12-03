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

  const rafRef = useRef(null);
  const tickingRef = useRef(false);

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

  function normalizeHash(h) {
    if (!h) return "";
    return h.startsWith("#") ? h.toLowerCase() : `#${h.toLowerCase()}`;
  }

  function computeActiveFromLocationOrScroll() {
    if (typeof window === "undefined") return "home";

    const path = window.location.pathname || pathname || "/";
    const hash = normalizeHash(window.location.hash || "");

    if (path.startsWith("/awesome")) return "awesome";

    if (hash.includes("spawn-contato") || hash === "#contato") return "contato";

    if (hash && (hash === "#home" || hash === "#about" || hash === "#portfolio" || hash === "#contato")) {
      return hash.replace("#", "");
    }

    const sections = ["home", "about", "portfolio", "contato"];
    const offset = Math.max(80, Math.round(window.innerHeight * 0.15));
    let best = "home";
    let bestDist = Infinity;

    for (const sec of sections) {
      const el = document.getElementById(sec);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      const dist = Math.abs(rect.top - offset);
      if (rect.top - offset <= window.innerHeight * 0.6 && dist < bestDist) {
        bestDist = dist;
        best = sec;
      }
    }

    return best;
  }

  useEffect(() => {
    function onScroll() {
      if (tickingRef.current) return;
      tickingRef.current = true;
      rafRef.current = requestAnimationFrame(() => {
        const active = computeActiveFromLocationOrScroll();
        setActiveSection((prev) => (prev !== active ? active : prev));
        tickingRef.current = false;
      });
    }

    function maybeAttachScroll() {
      if (typeof window === "undefined") return;
      if (window.location.pathname === "/" || window.location.pathname === "") {
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
      }
    }

    maybeAttachScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [pathname]);

  useEffect(() => {
    function onLocationChange() {
      const active = computeActiveFromLocationOrScroll();
      setActiveSection(active);
      setMenuOpen(false);
    }

    if (typeof window === "undefined") return;

    onLocationChange();

    window.addEventListener("hashchange", onLocationChange);
    window.addEventListener("popstate", onLocationChange);

    return () => {
      window.removeEventListener("hashchange", onLocationChange);
      window.removeEventListener("popstate", onLocationChange);
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
