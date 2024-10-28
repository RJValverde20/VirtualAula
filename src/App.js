import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, Navigate } from 'react-router-dom';

// Importa los componentes correspondientes
import AdminDashboard from './components/AdminDashboard';
import MatricularEstudiantes from './components/MatricularEstudiantes';
import VerNotas from './components/VerNotas';
import AdminEstudiantes from './components/AdminEstudiantes';
import Configuracion from './components/Configuracion';
import ImprimirNotas from './components/ImprimirNotas';
import Welcome from './components/Welcome';
import Login from './components/Login';
import TeacherDashboard from './components/TeacherDashboard'; // Importa el aula del maestro
import StudentDashboard from './components/StudentDashboard'; // Importa el aula del estudiante

function Sidebar({ onLogout }) {
  return (
    <div className="sidebar">
      <h2>Aula Virtual - Administrador</h2>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/matricular-estudiantes">Matricular Estudiantes</Link></li>
        <li><Link to="/admin-estudiantes">Administrar Estudiantes</Link></li>
        <li><Link to="/ver-notas">Ver Notas</Link></li>
        <li><Link to="/imprimir-notas">Imprimir Notas</Link></li>
        <li><Link to="/configuracion">Configuración</Link></li>
      </ul>
      <button className="logout-button" onClick={onLogout}>Cerrar sesión</button>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para manejar si está logueado
  const [userRole, setUserRole] = useState(''); // Estado para manejar el rol del usuario
  const navigate = useNavigate(); // Navegación programática

  // Función que maneja el logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole(''); // Resetea el rol al cerrar sesión
    navigate('/login'); // Redirige al login
  };

  // Función que maneja el login
  const handleLogin = (role) => {
    setIsLoggedIn(true);
    setUserRole(role); // Establece el rol del usuario
    // Redirige a la página correspondiente según el rol
    switch (role) {
      case 'admin':
        navigate('/'); // Redirige al aula del administrador
        break;
      case 'teacher':
        navigate('/teacher-dashboard'); // Redirige al aula del maestro
        break;
      case 'student':
        navigate('/student-dashboard'); // Redirige al aula del estudiante
        break;
      default:
        navigate('/'); // Redirige a la página de inicio como un caso predeterminado
        break;
    }
  };

  return (
    <div className="app-container">
      {isLoggedIn ? (
        <>
          <Sidebar onLogout={handleLogout} />
          <div className="content">
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/matricular-estudiantes" element={<MatricularEstudiantes />} />
              <Route path="/admin-estudiantes" element={<AdminEstudiantes />} />
              <Route path="/ver-notas" element={<VerNotas />} />
              <Route path="/imprimir-notas" element={<ImprimirNotas />} />
              <Route path="/configuracion" element={<Configuracion />} />
              <Route path="/teacher-dashboard" element={<TeacherDashboard />} /> {/* Ruta del maestro */}
              <Route path="/student-dashboard" element={<StudentDashboard />} /> {/* Ruta del estudiante */}
              <Route path="*" element={<Navigate to="/" />} /> {/* Redirige cualquier ruta no válida a inicio */}
            </Routes>
          </div>
        </>
      ) : (
        <Routes>
          {/* Si no está autenticado, muestra siempre el login */}
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="*" element={<Navigate to="/login" />} /> {/* Redirige cualquier ruta no válida al login */}
        </Routes>
      )}
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
