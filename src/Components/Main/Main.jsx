import "./style.css";
import React from "react";
import Machine from "../components/MachineWrite";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(ScrollTrigger, TextPlugin);

const Main = () => {
    React.useLayoutEffect(() => {
        gsap.to(".main", {
            x: 0,
            opacity: 1,
            duration: 1.2,
        });
        return () => {
            gsap.killTweensOf(".main");
        };
    }, []);

    React.useLayoutEffect(() => {
        gsap.to(".interfaceDigital", {
            y: 0,
            opacity: 1,
            duration: 5,
        });
        return () => {
            gsap.killTweensOf(".interfaceDigital");
        };
    }, []);

    return (
        <header>
            <div className="container main">
                <h1>
                    Desenvolvendo{" "}
                    <span className="interfaceDigital">
                        interfaces digitais
                    </span>{" "}
                    <br /> de forma moderna e com <br />
                    alta qualidade.
                </h1>
                <Machine />
                <span className="barra-colorfull"></span>
            </div>
        </header>
    );
};

export default Main;
