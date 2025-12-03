"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../Awesome-style.module.css";

export default function AwesomeAbout() {

    return(

        <div className={styles.root}>
            <div id="container">

                <div className="cubo"><p>Sobre o <br />Cassio</p></div>
                
                <img className="img-foto" src="/img/avatar90s.png" alt="avatar90s" />
                
                <div className="conteudo-texto">
                            <p>
                                Olá, meu caro internauta! Sou o Cássio Rodrigues, tenho 35 anos e sou desenvolvedor front-end.
                                <br /><br />
                                Trabalho com HTML, CSS, JavaScript e React.js e também tenho conhecimento de PHP e SASS. Tenho formação em design gráfico, o que me ajuda a deixar as interfaces mais supimpas e fáceis de usar.
                                <br /><br />
                                Entendo de Git/GitHub pra versionar meus códigos e gosto de caprichar na organização, acessibilidade e SEO.
                                <br /><br />
                                Gosto de criar interfaces responsivas, que funcionem bem em qualquer tela, sempre pensando numa navegação simples e fluida. Minha ideia é sempre juntar estética com funcionalidade.
                                <br /><br />
                                Sou fã de uma boa comunicação, trabalho em equipe e de pensar fora da caixa pra resolver as pendengas. Tô sempre antenado em aprender mais, encarar novos desafios e participar de projetos que paguem um pixulé.
                            </p>
                </div>


                <div className="barra-gradiente"
                    style={{ marginTop: '110px'}}
                ></div>

                <Link href="/awesome" >
                    <img className="btn-voltar" src="/img/voltar.gif" alt=""/>
                </Link>
            
                <footer className="rodape"><p>Proudly designed by Cassio Rodrigues</p></footer>

            </div>
        </div>
    );
}