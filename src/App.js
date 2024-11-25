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
        <div className="image-container">
        <img src={require('./Imagenes/1.jpg')} alt="Imagen 1" />
        <img src={require('./Imagenes/2.jpg')} alt="Imagen 2" />
        <img src={require('./Imagenes/3.jpg')} alt="Imagen 3" />
        <img src={require('./Imagenes/4.jpg')} alt="Imagen 4" />
        </div>
        <h1>Sobre mí</h1>
        <p>Soy un desarrolladora apasionada por los gatos y por intentar crear un mundo mas dinamico y divertido a la hora de programar.</p>
        <p>Me encanta resolver problemas y aprender nuevas tecnologías.</p>
      </section>
    </div>
  );
}

export default App;