import React from "react";
import "./style.css";
import { ReactComponent as Insta } from "./icons/Insta.svg";
import { ReactComponent as Outl } from "./icons/outl.svg";
import { ReactComponent as Link } from "./icons/link.svg";
import { ReactComponent as Github } from "./icons/github.svg";
import Me from "./icons/me.png";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Section = () => {
    React.useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".sectionAbout", {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".sectionAbout",
                start: "top 600px",
                end: "bottom 900px",
                scrub: true,
            },
        });
        return () => {
            gsap.killTweensOf(".sectionAbout");
        };
    }, []);

    return (
        <section id="sobre">
            <div className="container sectionAbout">
                <div className="imgMe">
                    <img src={Me} />
                </div>

                <div className="infosMe">
                    <h2>Quem sou</h2>
                    <h1>PATRICK SILVA</h1>
                    <h2>Frontend Developer & UI Designer</h2>
                    <span className="barra-colorfull barSection"></span>
                    <p>
                        Meu nome é Patrick Silva, conhecido como "ptrktodev", e
                        sou o fundador da{" "}
                        <span className="destaque-purple">TechWeb Sync</span>,
                        um empreendimento pessoal voltado para a criação de
                        websites personalizados destinados a empresas locais e
                        digitais que buscam{" "}
                        <span className="destaque-purple">
                            ampliar sua presença online
                        </span>
                        . Atualmente, atuo como profissional autônomo nas áreas
                        de Desenvolvimento Frontend e Design de Interface. Minha
                        especialidade consiste na elaboração de{" "}
                        <span className="destaque-purple">
                            interfaces modernas e de excelência
                        </span>
                        , com foco em desempenho, animação e inovação.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Section;
