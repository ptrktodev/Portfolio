import React from "react";
import "./style.css";
import Code from "./assets/code.png";
import Motion from "./assets/motion.png";
import Pen from "./assets/pen.png";

const Serv = () => {
  const infosServicos = [
    {
      id: 0,
      title: "Design",
      descr:
        "Desenho de sites profissionais, blogs, portfólios e landing pages.",
      img: Pen,
    },
    {
      id: 1,
      title: "Desenvolvimento",
      descr:
        "Desenvolvo a interface de modo que ela seja clara, objetiva e, acima de tudo, intuitiva para o usuário.",
      img: Code,
    },
    {
      id: 3,
      title: "Motion",
      descr:
        "Animações e interações com sensação de modernidade que chamam a atenção do usuário.",
      img: Motion,
    },
  ];

  return (
    <section className="serv" id="servicos">
      <div className="containerServ">
        <h1>
          Serviços <span className="grad">.</span>
        </h1>
        <div className="cardServicos">
          {infosServicos.map((i) => (
            <div className="cardUnique" key={i.id}>
              <div className="cardUniqueImg">
                <img src={i.img} alt="Img" />
              </div>
              <h2>{i.title}</h2>
              <p>{i.descr}</p>
              <span className={i.title}></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Serv;
