// src/components/StudentDashboard.jsx
import React from 'react';
import '../styles/Dashboard.css'; // Usa el mismo archivo CSS para todos los paneles

const StudentDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Aula Virtual del Estudiante</h1>
      <div className="dashboard-content">
        <section>
          <h2>Mis Notas</h2>
          <p>Consulta tus notas en cada materia y revisa tu progreso académico.</p>
          {/* Agrega aquí el contenido específico para visualizar las notas */}
        </section>
        
        <section>
          <h2>Tareas</h2>
          <p>Revisa las tareas asignadas y sus fechas de entrega.</p>
          {/* Agrega aquí el contenido específico para revisar tareas */}
        </section>
        
        <section>
          <h2>Calendario Académico</h2>
          <p>Consulta el calendario de eventos importantes y fechas de exámenes.</p>
          {/* Agrega aquí el contenido específico para el calendario académico */}
        </section>
      </div>
    </div>
  );
};

export default StudentDashboard;
