import "./style.css";
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ReactComponent as Wpp } from "../Nav/wpp.svg";
import Logo from "./Logo";

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
        <Logo wid="100" hei="60" />
        <nav className="navig">
          <ul className="menu-ul">
            <a href="#projetos">Projetos</a>
            <a href="#servicos">Serviços</a>
            <a href="#tecnologias">Tecnologias</a>
          </ul>
        </nav>
        <div className="whatsapp-icon">
          <a
            href="https://wa.me/5548996144267"
            target="_blank"
            rel="noreferrer"
          >
            <Wpp />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
