import "./style.css";

const Projetos = () => {
  const infosProjetos = [
    {
      id: 0,
      title: "CineMagic",
      descr:
        "Neste Universo do CineMagic você pode obter informações sobre filmes e séries.",
      link: "https://cinemagic.bohr.io/",
      colorBorder: "#ff1f1f",
    },
    {
      id: 1,
      title: "PicSure",
      descr: "Em uma pequena galeria, você tem acesso a milhões de imagens.",
      link: "https://picsure.bohr.io/",
      colorBorder: "#3b8cff",
    },
    {
      id: 2,
      title: "Little Links",
      descr:
        "Mini Projeto que contém link úteis para entrar em contato comigo.",
      link: "https://littlelinks.bohr.io/",
      colorBorder: "#31ff62",
    },
    {
      id: 3,
      title: "Studio Carol | Beauty",
      descr:
        "Site de apresentação do Studio Carol, um salão de beleza completo.",
      link: "https://studiocarol.vercel.app/",
      colorBorder: "#E74D89",
    },
    {
      id: 4,
      title: "To-do.Tasks",
      descr:
        "Anote suas tarefas, edite ou apague. Ganhe mais agilidade no dia a dia.",
      link: "https://github.com/ptrktodev/taskApp",
      colorBorder: "#f6d000",
    },
    {
      id: 5,
      title: "Party Royal",
      descr:
        "Aplicativo mobile para marcar as suas festas mais divertidas e convidar seus amigos.",
      link: "https://github.com/ptrktodev/PartyRoyal-AppMobile",
      colorBorder: "#9827ff",
    },
    {
      id: 6,
      title: "Suas Compras",
      descr:
        "App Web para organizar e anotar enquanto está no mercado fazendo suas compras.",
      link: "https://suascompras.vercel.app/",
      colorBorder: "#00F0FF",
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
                rel="noreferrer"
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
