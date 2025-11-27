"use client";

import React from "react";
import './Hero.css'
import fotoHero from '../assets/foto-hero2.png'
export default function Hero(){
    return(
        <section id="home">
            <div className="home-left">
                <div className="txt-home-name">
                    <span>Cassio Rodrigues</span>
                    <span>Desenvolvedor Front-end</span>
                </div>

                <div className="btns-home">
                    <a 
                        href="./components/img/bemvindo.gif" download 
                        className="btn-cv"
                    >
                        Meu CV
                    </a>
                    <a 
                        href="#portfolio" className="btn-home"
                    >
                        Conheça meu trabalho
                    </a>
                </div>
                
            </div>
            
            <div className="home-right">

                <div className="img-home">
                    <img 
                        src={fotoHero?.src || fotoHero } 
                        loading="lazy"    
                    />
                </div>

                <div className="redes-home">
                    <ul>
                        <li>
                            <a 
                                href="https://www.linkedin.com/in/cassio-rodrigues-oliveira/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <i className="fa-brands fa-linkedin linkedin"></i>
                            </a>    
                        </li>
                        
                        <li>
                            <a 
                                href="https://github.com/caaassio" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <i className="fa-brands fa-square-github github"></i>
                            </a>
                        </li>

                        <li>
                            <a 
                                href="https://www.instagram.com/caaassio" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <i className="fa-brands fa-square-instagram instagram"></i>
                            </a>
                        </li>

                        <li>
                            <a 
                                href="https://www.facebook.com/caaassio" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <i className="fa-brands fa-square-facebook facebook"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}