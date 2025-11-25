"use client";

import './Footer.css'

export default function Footer(){
    return(
        <footer className="footer">
            <label className="toggle-awesome">
                <input type="ckeckbox" id="toggleAwesome" />
                <span className="slider-awesome"></span>
            </label>

            <p>2025 - Todos os direitos reservados</p>
        </footer>
    );
}