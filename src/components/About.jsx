"use client";

import React from "react";
import './About.css'

export default function About(){

    return(

        <section id="about" className="reveal">

            <h1 className="section-title">
                Sobre mim
            </h1>
            <div className="about-content">
                <div className="txt-content">
                    <p className="reveal">
                        Olá! Me chamo Cássio Rodrigues, tenho 35 anos e sou desenvolvedor front-end.
                        <br /><br />
                    </p>
                    <p className="reveal">
                        Tenho uma base sólida em HTML, CSS, JavaScript e React.js, além de conhecimento de PHP e SASS. Minha formação em design gráfico complementa minhas habilidades técnicas, trazendo um olhar apurado para estética, usabilidade e experiência do usuário.<br /><br />
                    </p>
                    <p className="reveal">
                        Tenho familiaridade com versionamento usando Git/GitHub e utilizo metodologias de organização de código, além de explorar boas práticas de acessibilidade e SEO on-page.<br /><br />
                    </p>
				    <p className="reveal">
                        Gosto de criar interfaces responsivas, que se adaptam bem a diferentes dispositivos, sempre priorizando uma navegação intuitiva e fluida. Tenho como foco a construção de experiências funcionais, estéticas e acessíveis, combinando código limpo com boas práticas de usabilidade.<br /><br />
                    </p>
                    <p className="reveal">
                        Valorizo a comunicação clara, o trabalho em equipe e a resolução criativa de problemas.
                        Estou sempre aprendendo e evoluindo, buscando desafios que me permitam aplicar e expandir meus conhecimentos, colaborando em projetos que façam a diferença.
                    </p>
                </div>

            </div>

        </section>
    )
}