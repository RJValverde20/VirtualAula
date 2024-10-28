// src/components/Matricula.jsx
import React, { useState } from 'react';
import '../styles/Matricula.css'; // Archivo CSS específico para los estilos de Matricula

const Matricula = () => {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    fechaNacimiento: '',
    añoCursar: '',
    direccion: '',
    nombrePadre: '',
    telefonoPadre: '',
    nombreMadre: '',
    telefonoMadre: '',
  });

  const [matriculaGenerada, setMatriculaGenerada] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const generateCarnetAndPIN = () => {
    const { nombres, fechaNacimiento } = formData;
    const birthYear = new Date(fechaNacimiento).getFullYear();
    const carnet = `${nombres.slice(0, 4).toUpperCase()}-${birthYear}`;
    const pin = `${birthYear}-${nombres.slice(0, 4).toUpperCase()}`;
    return { carnet, pin };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Generar carnet y PIN
    const { carnet, pin } = generateCarnetAndPIN();
    
    // Crear el contenido para el archivo .txt
    const fileContent = `
      Nombres: ${formData.nombres}
      Apellidos: ${formData.apellidos}
      Fecha de Nacimiento: ${formData.fechaNacimiento}
      Año a Cursar: ${formData.añoCursar}
      Dirección: ${formData.direccion}
      Nombre del Padre: ${formData.nombrePadre}
      Teléfono del Padre: ${formData.telefonoPadre}
      Nombre de la Madre: ${formData.nombreMadre}
      Teléfono de la Madre: ${formData.telefonoMadre}
      Carnet: ${carnet}
      PIN: ${pin}
    `;

    // Crear un blob con el contenido
    const blob = new Blob([fileContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    
    // Crear un enlace para descargar el archivo
    const a = document.createElement('a');
    a.href = url;
    a.download = 'matricula.txt';
    a.click();
    URL.revokeObjectURL(url);

    // Establecer la matrícula generada en el estado
    setMatriculaGenerada({ carnet, pin });
    
    console.log('Datos enviados:', formData);
  };

  return (
    <div className="matricula-dashboard-container">
      {/* Panel del aula virtual del administrador */}
      <nav className="sidebar">
        <h2>Aula Virtual - Administrador</h2>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#matricular-estudiantes">Matricular Estudiantes</a></li>
          <li><a href="#administrar-estudiantes">Administrar Estudiantes</a></li>
          <li><a href="#ver-notas">Ver Notas</a></li>
          <li><a href="#imprimir-notas">Imprimir Notas</a></li>
          <li><a href="#configuracion">Configuración</a></li>
          <li><button id="logout-button">Cerrar sesión</button></li>
        </ul>
      </nav>

      {/* Formulario de matrícula */}
      <div className="matricula-container">
        <h1>Matriculación de Estudiantes</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-section">
            <h2>Información del Estudiante</h2>
            {/* Campos del formulario */}
            <label>
              Nombres:
              <input
                type="text"
                name="nombres"
                value={formData.nombres}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Apellidos:
              <input
                type="text"
                name="apellidos"
                value={formData.apellidos}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Fecha de Nacimiento:
              <input
                type="date"
                name="fechaNacimiento"
                value={formData.fechaNacimiento}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Año a cursar:
              <select
                name="añoCursar"
                value={formData.añoCursar}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona el año</option>
                <option value="7mo">7mo</option>
                <option value="8vo">8vo</option>
                <option value="9no">9no</option>
                <option value="10mo">10mo</option>
                <option value="11mo">11mo</option>
              </select>
            </label>
            <label>
              Dirección:
              <input
                type="text"
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="form-section">
            <h2>Datos Familiares</h2>
            {/* Campos del formulario */}
            <label>
              Nombre del Padre:
              <input
                type="text"
                name="nombrePadre"
                value={formData.nombrePadre}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Teléfono del Padre:
              <input
                type="tel"
                name="telefonoPadre"
                value={formData.telefonoPadre}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Nombre de la Madre:
              <input
                type="text"
                name="nombreMadre"
                value={formData.nombreMadre}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Teléfono de la Madre:
              <input
                type="tel"
                name="telefonoMadre"
                value={formData.telefonoMadre}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <button type="submit">Guardar Matrícula</button>
        </form>
        {matriculaGenerada && (
          <div className="matricula-result">
            <h2>Matrícula Generada</h2>
            <p><strong>Carnet:</strong> {matriculaGenerada.carnet}</p>
            <p><strong>PIN:</strong> {matriculaGenerada.pin}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Matricula;
