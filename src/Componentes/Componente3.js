import React from "react";

const NoseQuePonerBoton = () => {
    const handleClick = () => {
        alert("Hola soy un mensaje de alerta sin ninguna decoracion :( ");
    };

    return (
        <div>
            <button onClick={handleClick}>Presióname</button>
        </div>
    );
};

export default NoseQuePonerBoton;