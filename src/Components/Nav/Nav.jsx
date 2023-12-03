import "./style.css";
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Nav = () => {
    React.useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".menu-ul", {
            y: 0,
            opacity: 1,
        });
        return () => {
            gsap.killTweensOf(".menu-ul");
        };
    }, []);

    return (
        <nav className="nav">
            <div className="container navScreenMedia">
                <h1 className="logo">
                    TechWeb <br />
                    Sync{" "}
                </h1>
                <nav className="navig">
                    <ul className="menu-ul">
                        <a href="#projetos">Projetos</a>
                        <a href="#servicos">Serviços</a>
                        <a href="#tecnologias">Tecnologias</a>
                    </ul>
                </nav>
            </div>
        </nav>
    );
};

export default Nav;
