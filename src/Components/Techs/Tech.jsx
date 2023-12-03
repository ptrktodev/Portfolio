import "./style.css";
import Figma from "./assets/Figma.png";
import HTML5 from "./assets/HTML5.png";
import CSS3 from "./assets/CSS3.png";
import Bootstrap from "./assets/Bootstrap.png";
import JavaScript from "./assets/Javascript.png";
import ReactLogo from "./assets/React.png";

const Tech = () => {
    const Imagens = [Figma, HTML5, CSS3, Bootstrap, JavaScript, ReactLogo];

    return (
        <section className="Techs" id="tecnologias">
            <div className="containerServ">
                <h1>
                    Tecnologias <span className="grad">.</span>
                </h1>
                <div className="cardImagens">
                    {Imagens.map((i, ind) => (
                        <div className="cardImg" key={ind}>
                            <img src={i} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tech;
