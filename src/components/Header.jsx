"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import './Header.css'

export default function Header(){

    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        if (typeof window === "undefined") return;

        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
        setDarkMode(true);
        document.documentElement.classList.add("dark");
        }
    }, []);

    useEffect(() => {
        if (typeof window === "undefined") return;

        if (darkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    const handleToggleTheme = () => {
        setDarkMode((prev) => !prev);
    };

    const handleLinkClick = (section) => {
        setActiveSection(section);
        setMenuOpen(false);
    };

    return(
        <header>
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
                    onClick={()=>setMenuOpen((prev) => !prev)}
                >

                    <i className="fa-solid fa-bars"></i>
                </button>

                <ul
                    id="menu"
                    className={menuOpen ? "show" : ""}
                >
                    <li>
                        <a
                            href="#home"
                            className={`internal-link ${activeSection === "home" ? "active" : ""}`}
                            onClick={() => handleLinkClick("home")}
                        >
                            HOME
                        </a>
                    </li>

                    <li>
                        <a
                            href="#about"
                            className={`internal-link ${activeSection === "about" ? "active" : ""}`}
                            onClick={() => handleLinkClick("about")}
                        >
                            SOBRE
                        </a>
                    </li>

                    <li>
                        <a
                            href="#portfolio"
                            className={`internal-link ${activeSection === "portfolio" ? "active" : ""}`}
                            onClick={() => handleLinkClick("portfolio")}
                        >
                            PORTFÓLIO
                        </a>
                    </li>

                    <li>
                        <a
                            href="#contato"
                            className={`internal-link ${activeSection === "contato" ? "active" : ""}`}
                            onClick={() => handleLinkClick("contato")}
                        >
                            CONTATO
                        </a>
                    </li>
                    <li> 
                        <label 
                            className="switch" 
                            id="themeSwitch" 
                            aria-label="Alternar tema" 
                        > 
                        <input 
                            type="checkbox" 
                            id="themeToggle" 
                            checked={darkMode} 
                            onChange={handleToggleTheme} 
                        /> 
                        <i 
                            className="fa-solid fa-moon" 
                            aria-hidden="true"
                        ></i> 
                        </label> 
                    </li>
                </ul>
            </nav>
        </header>
    );
}