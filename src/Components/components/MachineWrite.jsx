import React, { useState, useEffect } from "react";
import "./machine.css";

const Typewriter = ({ text, speed }) => {
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        let currentIndex = 0;

        const intervalId = setInterval(() => {
            if (currentIndex <= text.length) {
                setDisplayText(text.slice(0, currentIndex));
                currentIndex += 1;
            } else {
                clearInterval(intervalId);
            }
        }, speed);

        return () => clearInterval(intervalId);
    }, [text, speed]);

    return <span className="write">{displayText}</span>;
};

const Machine = () => {
    const textToType =
        "Juntamos o visual, a construção do site e as habilidades profissionais, criamos uma mistura que vai destacar o seu produto ou serviço no digital.";
    const typingSpeed = 50; // velocidade em milissegundos entre cada caractere
    const delayBeforeTyping = 1000; // atraso em milissegundos antes de começar a máquina de escrever

    const [startTyping, setStartTyping] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setStartTyping(true);
        }, delayBeforeTyping);

        return () => clearTimeout(timeoutId);
    }, [delayBeforeTyping]);

    return (
        <div>
            {startTyping && (
                <p className="write-p">
                    <Typewriter text={textToType} speed={typingSpeed} />
                </p>
            )}
        </div>
    );
};

export default Machine;
