import React from "react";
import "./style.css";

import { ReactComponent as Git } from "./assets/git.svg";
import { ReactComponent as Insta } from "./assets/insta.svg";
import { ReactComponent as Link } from "./assets/linkedin.svg";
import { ReactComponent as Wpp } from "./assets/wpp.svg";

import Logo from "../Nav/Logo";

const Footer = () => {
  const socialMedias = [
    {
      id: 0,
      icon: <Git />,
      link: "https://github.com/ptrktodev",
      descr: "GitHub",
    },
    {
      id: 1,
      icon: <Insta />,
      link: "https://www.instagram.com/patrickrdz3103/",
      descr: "Instagram",
    },
    {
      id: 2,
      icon: <Link />,
      link: "https://www.linkedin.com/in/ptrktodev/",
      descr: "Linkedin",
    },
    {
      id: 3,
      icon: <Wpp />,
      link: "https://wa.me/5551980702533",
      descr: "Whatsapp",
    },
  ];

  return (
    <footer>
      <div className="containerFooter">
        <div className="FooterCard">
          {" "}
          <Logo wid="150" hei="60" />
          <p> ©Alguns direitos reservados.</p>
        </div>
        <div className="FooterCard">
          {socialMedias.map((i) => (
            <div key={i.id} className="socialItems">
              <span>{i.icon}</span>
              <a href={i.link} target="_blank" rel="noreferrer">
                {i.descr}
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
