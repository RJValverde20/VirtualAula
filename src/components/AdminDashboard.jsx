import React, { useState } from 'react';
import MatricularEstudiantes from './MatricularEstudiantes'; // Componente de matriculación
import AdminEstudiantes from './AdminEstudiantes'; // Componente de administración de estudiantes
import '../styles/Dashboard.css';

const AdminDashboard = () => {
  const [selectedSection, setSelectedSection] = useState('inicio');

  const renderSectionContent = () => {
    switch (selectedSection) {
      case 'matricular-estudiantes':
        return <MatricularEstudiantes />; // Muestra el formulario de matrícula
      case 'administrar-estudiantes':
        return <AdminEstudiantes />; // Muestra la administración de estudiantes
      case 'ver-notas':
        return (
          <div className="card">
            <span className="card-icon">📊</span>
            <h2 className="card-title">Ver Notas</h2>
            <p className="card-description">Consulta las calificaciones de los estudiantes.</p>
          </div>
        );
      case 'configuracion':
        return (
          <div className="card">
            <span className="card-icon">⚙️</span>
            <h2 className="card-title">Configuración</h2>
            <p className="card-description">Ajusta las configuraciones del sistema.</p>
          </div>
        );
      default:
        return (
          <div className="dashboard-home">
            <h2>Bienvenido al Panel de Administración</h2>
            <p>Seleccione una opción del menú para comenzar.</p>
          </div>
        );
    }
  };

  return (
    <div className="dashboard-container">
      {/* Panel de navegación */}
      <nav className="sidebar">
        <h2>Aula Virtual - Administrador</h2>
        <ul>
          <li>
            <a href="#inicio" onClick={() => setSelectedSection('inicio')}>Inicio</a>
          </li>
          <li>
            <a href="#matricular-estudiantes" onClick={() => setSelectedSection('matricular-estudiantes')}>
              Matricular Estudiantes
            </a>
          </li>
          <li>
            <a href="#administrar-estudiantes" onClick={() => setSelectedSection('administrar-estudiantes')}>
              Administrar Estudiantes
            </a>
          </li>
          <li>
            <a href="#ver-notas" onClick={() => setSelectedSection('ver-notas')}>Ver Notas</a>
          </li>
          <li>
            <a href="#configuracion" onClick={() => setSelectedSection('configuracion')}>Configuración</a>
          </li>
          <li>
            <button id="logout-button">Cerrar sesión</button>
          </li>
        </ul>
      </nav>

      {/* Contenido Principal */}
      <div className="main-content">
        {renderSectionContent()}
      </div>
    </div>
  );
};

export default AdminDashboard;