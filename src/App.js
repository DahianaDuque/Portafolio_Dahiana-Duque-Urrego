import React from 'react';
import './Style/Global.css';

function App() {
  return (
    <div className="app">
      {/* Menú de navegación */}
      <nav className="navbar">
        <a href="#home">Inicio</a>
        <a href="#projects">Proyectos</a>
        <a href="#about">Sobre mí</a>
      </nav>

      {/* Secciones */}
      <section id="home" className="section home">
        <h1>Bienvenido a mi Portafolio</h1>
        <p>¡Hola! Soy una desarrolladora en proceso del salir del cascaron.</p>
      </section>

      <section id="projects" className="section projects">
        <h1>Proyectos</h1>
        <p>Aquí puedes ver algunos de mis pequeños avances:</p>
        <ul>
          <li>
            <a 
              href="https://github.com/DahianaDuque/DahianaDesarrolloweb.git" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Proyecto en GitHub: DahianaDesarrolloWeb
            </a>
          </li>
        </ul>
      </section>

      <section id="about" className="section about">
        <h1>Sobre mí</h1>
        <p>Soy un desarrolladora apasionada por los gatos y por intentar crear un mundo mas dinamico y divertido a la hora de programar.</p>
        <p>Me encanta resolver problemas y aprender nuevas tecnologías.</p>
      </section>
    </div>
  );
}

export default App;