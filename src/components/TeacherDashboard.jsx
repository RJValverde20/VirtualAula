// src/components/TeacherDashboard.jsx
import React from 'react';
import '../styles/Dashboard.css'; // Usa el mismo archivo CSS para todos los paneles

const TeacherDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Aula Virtual del Profesor</h1>
      <div className="dashboard-content">
        <section>
          <h2>Gestión de Clases</h2>
          <p>En esta sección puedes gestionar tus clases, agregar o eliminar cursos y administrar los horarios.</p>
          {/* Agrega aquí el contenido específico para la gestión de clases */}
        </section>
        
        <section>
          <h2>Notas y Tareas</h2>
          <p>Administra las notas de tus estudiantes y asigna nuevas tareas.</p>
          {/* Agrega aquí el contenido específico para gestionar notas y tareas */}
        </section>
        
        <section>
          <h2>Reportes</h2>
          <p>Genera reportes sobre el progreso de los estudiantes y el rendimiento de las clases.</p>
          {/* Agrega aquí el contenido específico para generar reportes */}
        </section>
      </div>
    </div>
  );
};

export default TeacherDashboard;
