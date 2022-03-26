import React from "react";
import "./style.css";
import { useGlobalState } from "../../Hooks/GlobalStateProvider";

export default function Home() {

    const [responses, setResponses] = useState([]);

    setResponses("Olá Mundo");
    console.log(responses);

    return(
        <main id="home">
            <h3>Bem-Vindo(a) a Plataforma</h3>
            <p>Para prosseguir basta clicar em "continuar"</p>
            <button>Continuar</button>
        </main>
    )
}