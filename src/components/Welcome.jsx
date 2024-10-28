import React from 'react';
import schoolLogo from '../assets/logo.jpg'; // Ruta del logo
import '../styles/Welcome.css';

const Welcome = ({ userRole }) => {
  return (
    <div className="welcome-container">
      {/* Video de fondo */}
      <video autoPlay muted loop className="background-video">
        <source src="/vfon.mp4" type="video/mp4" /> {/* Video desde la carpeta public */}
        Tu navegador no soporta el video.
      </video>

      {/* Contenedor del logo y el título */}
      <div className="header">
        <img src={schoolLogo} alt="Logo del Colegio" className="school-logo" />
        <h1>Bienvenidos al Aula Virtual</h1>
        <h2>Colegio Cristiano Nicaraguense, León</h2>
      </div>

      <p>Estamos emocionados de tenerte con nosotros para una nueva aventura educativa.</p>
    </div>
  );
};

export default Welcome;
