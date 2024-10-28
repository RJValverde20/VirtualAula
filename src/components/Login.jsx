import React, { useState } from 'react';
import '../styles/Login.css';

const Login = ({ onLogin }) => {
  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!role || !username || !password) {
      setErrorMessage('Por favor, complete todos los campos.');
      return;
    }
    
    // Aquí podrías agregar lógica de autenticación real si es necesario

    setErrorMessage('');
    onLogin(role);  // Llamar a la función `onLogin` con el rol seleccionado
  };

  return (
    <div className="login-container">
      <h1>Inicio de Sesión</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="role">Seleccione su rol:</label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        >
          <option value="">Seleccione...</option>
          <option value="admin">Administrador</option>
          <option value="teacher">Profesor</option>
          <option value="student">Estudiante</option>
        </select>

        <label htmlFor="username">Nombre de usuario:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Nombre de usuario"
          required
        />

        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          required
        />

        <button type="submit">Iniciar Sesión</button>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </form>
    </div>
  );
};

export default Login;
