import "./style.css";
import CineMagic from "./assets/cine.png";
import Linksme from "./assets/linksme.png";
import Picsure from "./assets/picsure.png";
import Tasks from "./assets/TaskApp.png";
import AppMobileParty from "./assets/mobileApp.png";

const Projetos = () => {
    const infosProjetos = [
        {
            id: 0,
            title: "CineMagic",
            descr: "Neste Universo do CineMagic você pode obter informações sobre filmes e séries.",
            link: "https://cinemagic.bohr.io/",
            img: CineMagic,
            colorBorder: "#ff1f1f",
        },
        {
            id: 1,
            title: "PicSure",
            descr: "Em uma pequena galeria, você tem acesso a milhões de imagens.",
            link: "https://picsure.bohr.io/",
            img: Picsure,
            colorBorder: "#3b8cff",
        },
        {
            id: 2,
            title: "Little Links",
            descr: "Mini Projeto que contém link úteis para entrar em contato comigo.",
            link: "https://littlelinks.bohr.io/",
            img: Linksme,
            colorBorder: "#31ff62",
        },
        {
            id: 3,
            title: "To-do.Tasks",
            descr: "Anote suas tarefas, edite ou apague. Ganhe mais agilidade no dia a dia.",
            link: "https://github.com/ptrktodev/taskApp",
            img: Tasks,
            colorBorder: "#f6d000",
        },
        {
            id: 4,
            title: "Party Royal",
            descr: "Aplicativo mobile para marcar as suas festas mais divertidas.",
            link: "https://github.com/ptrktodev/PartyRoyal-AppMobile",
            img: AppMobileParty,
            colorBorder: "#9827ff",
        },
    ];

    return (
        <section id="projetos">
            <div className="containerAuto">
                <h1>
                    Projetos <span className="grad">.</span>
                </h1>
                <div className="CardsProjetos">
                    {infosProjetos.map((i) => (
                        <div
                            key={i.id}
                            className="Cards"
                            style={{ border: `1px solid ${i.colorBorder}` }}
                        >
                            <h2>{i.title}</h2>
                            <p>{i.descr}</p>
                            <a
                                href={i.link}
                                target="_blank"
                                style={{ color: ` ${i.colorBorder}` }}
                            >
                                Visualizar Projeto
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projetos;
