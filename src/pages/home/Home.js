import React from "react";
import NoseQuePoner from "../../Componentes/componente1";
import NoseQuePonerimagen2 from "../../Componentes/Componente2";
import NoseQuePonerBoton from "../../Componentes/Componente3";
import NoseQuePonerTexto from "../../Componentes/Componente4";
import NoseQuePonerTriste from "../../Componentes/Componente5";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="container">
            <NoseQuePoner />
            <br />
            <NoseQuePonerimagen2 />
            <NoseQuePonerBoton /> 
            <NoseQuePonerTexto/>
            <NoseQuePonerTriste/> {/* Componente de botón agregado */}

            {/* Enlace a la página de Contenido */}
            <Link to="/Contenido">Puedes ir a contenido aquí</Link>
            <br />

            {/* Enlace a la página de inicio */}
            <Link to="/main">Iniciar</Link>
        </div>
    );
};

export default Home;