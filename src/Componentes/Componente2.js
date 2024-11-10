import React, { useEffect, useState } from "react";

const NoseQuePonerimagen2 = () => {
    const [text, setText] = useState("Aquí iría un texto");

    useEffect(() => {
        setText("Otro texto nuevamente, hay textos infinitos");
    }, []);

    return (
        <div style={{ margin: "20px", backgroundColor: "lightPurple" }}>
            <p>{text}</p>
            <img src="https://i.pinimg.com/564x/c5/a3/5c/c5a35ca62310f963cd0f7649937a0bd8.jpg" alt="Imagen"/>
        </div>
    );
};

export default NoseQuePonerimagen2;