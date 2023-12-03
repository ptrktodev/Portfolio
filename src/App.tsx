import "./css/reset.css";
import Nav from "./Components/Nav/Nav";
import Main from "./Components/Main/Main";
import Section from "./Components/Section/Section";
import Projetos from "./Components/Projetos/Projetos";
import Servicos from "./Components/Servicos/Serv";
import Tech from "./Components/Techs/Tech";
import Footer from "./Components/Footer/Footer";

function App() {
    return (
        <>
            <Nav />
            <Main />
            <Section />
            <Projetos />
            <Servicos />
            <Tech />
            <Footer />
        </>
    );
}

export default App;
