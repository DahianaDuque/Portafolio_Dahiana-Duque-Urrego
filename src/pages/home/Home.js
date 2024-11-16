import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <h1>Bienvenido a mi Portafolio</h1>
      <p>¡Hola! Soy una desarrolladora en proceso conoceme!.</p>
      <Link to="/main">Ver Proyectos</Link>
    </div>
  );
}

export default Home;