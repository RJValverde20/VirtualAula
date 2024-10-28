import React, { useState } from 'react';
import '../styles/VerNotas.css'; // Asegúrate de tener este archivo CSS para estilos adicionales

const VerNotas = () => {
  const [busqueda, setBusqueda] = useState(''); // Estado para manejar la búsqueda

  // Clases y sus notas por cada año de secundaria
  const clasesPorAño = {
    'Séptimo Año': [
      'Matematica',
      'Lengua y Literatura',
      'Lengua Extranjera (Inglés)',
      'Talleres de Arte y Cultura',
      'Creciendo en Valores',
      'Educación Física y Práctica Deportiva',
      'Educación para Aprender, Emprender, Prosperar',
      'Ciencias Naturales',
      'Ciencias Sociales Historia',
      'Informática',
      'Conducta',
    ],
    'Octavo Año': [
      'Matematica',
      'Lengua y Literatura',
      'Lengua Extranjera (Inglés)',
      'Talleres de Arte y Cultura',
      'Creciendo en Valores',
      'Educación Física y Práctica Deportiva',
      'Educación para Aprender, Emprender, Prosperar',
      'Ciencias Naturales',
      'Ciencias Sociales Geografía',
      'Informática',
      'Conducta',
    ],
    'Noveno Año': [
      'Matematica',
      'Lengua y Literatura',
      'Lengua Extranjera (Inglés)',
      'Derechos y Dignidad de la Mujer',
      'Talleres de Arte y Cultura',
      'Creciendo en Valores',
      'Educación Física y Práctica Deportiva',
      'Educación para Aprender, Emprender, Prosperar',
      'Ciencias Naturales',
      'Ciencias Sociales Sociología',
      'Informática',
      'Fe y Vida',
      'Conducta',
    ],
    'Cuarto Año': [
      'Matematica',
      'Lengua y Literatura',
      'Lengua Extranjera (Inglés)',
      'Derechos y Dignidad de la Mujer',
      'Creciendo en Valores',
      'Educación Física y Práctica Deportiva',
      'Educación para Aprender, Emprender, Prosperar',
      'Biología',
      'Química',
      'Física',
      'Ciencias Sociales Economía',
      'Informática',
      'Fe y Vida',
      'Conducta',
    ],
    'Quinto Año': [
      'Matematica',
      'Lengua y Literatura',
      'Lengua Extranjera (Inglés)',
      'Derechos y Dignidad de la Mujer',
      'Creciendo en Valores',
      'Educación Física y Práctica Deportiva',
      'Educación para Aprender, Emprender, Prosperar',
      'Biología',
      'Química',
      'Física',
      'Monografía',
      'Ciencias Sociales Economía',
      'Informática',
      'Fe y Vida',
      'Conducta',
    ],
  };

  // Lista de estudiantes por año (5 estudiantes por año)
  const estudiantesPorAño = {
    'Séptimo Año': ['Pedro Martínez García - Carnet: 1-123456-7', 'Ana López Pérez - Carnet: 2-654321-8'],
    'Octavo Año': ['Juan Ramírez Torres - Carnet: 1-234567-8', 'Lucía Gómez Cruz - Carnet: 2-345678-9'],
    'Noveno Año': ['Carlos Herrera Díaz - Carnet: 1-345678-9', 'Sofía Núñez Morales - Carnet: 2-456789-0'],
    'Cuarto Año': ['Diego Morales Álvarez - Carnet: 1-456789-0', 'Marta Fernández Rojas - Carnet: 2-567890-1'],
    'Quinto Año': ['Luis Torres Medina - Carnet: 1-567890-1', 'Elena Vargas Flores - Carnet: 2-678901-2'],
  };

  // Función para generar notas aleatorias entre 60 y 100 por clase y parcial para cada estudiante
  const generarNotasPorEstudiante = (clases) => {
    return clases.map(clase => {
      const semestre1Parcial1 = Math.floor(Math.random() * 41) + 60; // Nota entre 60 y 100
      const semestre1Parcial2 = Math.floor(Math.random() * 41) + 60;
      const semestre2Parcial1 = Math.floor(Math.random() * 41) + 60;
      const semestre2Parcial2 = Math.floor(Math.random() * 41) + 60;
      const notaFinal = (semestre1Parcial1 + semestre1Parcial2 + semestre2Parcial1 + semestre2Parcial2) / 4;

      return {
        clase,
        semestre1Parcial1: Math.round(semestre1Parcial1), // Redondear a enteros
        semestre1Parcial2: Math.round(semestre1Parcial2),
        semestre2Parcial1: Math.round(semestre2Parcial1),
        semestre2Parcial2: Math.round(semestre2Parcial2),
        notaFinal, // Nota final con decimales (se mostrará redondeada)
      };
    });
  };

  // Función para calcular el promedio general de un estudiante
  const calcularPromedioGeneral = (notasPorClase) => {
    const sumaNotasFinales = notasPorClase.reduce((total, clase) => total + clase.notaFinal, 0);
    return (sumaNotasFinales / notasPorClase.length).toFixed(2); // Promedio con dos decimales
  };

  // Función para manejar la búsqueda de estudiantes
  const manejarBusqueda = (e) => {
    setBusqueda(e.target.value);
  };

  // Filtrar los estudiantes por la búsqueda
  const estudiantesFiltrados = {};
  Object.keys(estudiantesPorAño).forEach((año) => {
    estudiantesFiltrados[año] = estudiantesPorAño[año].filter((estudiante) =>
      estudiante.toLowerCase().includes(busqueda.toLowerCase())
    );
  });

  return (
    <div className="ver-notas-container">
      <h1>Notas de los Estudiantes</h1>
      
      <input
        type="text"
        placeholder="Buscar estudiante..."
        value={busqueda}
        onChange={manejarBusqueda}
        className="search-bar"
      />

      {Object.keys(estudiantesFiltrados).map((año, indexAño) => (
        <div key={indexAño}>
          <h2>{año}</h2>
          {estudiantesFiltrados[año].map((estudiante, indexEstudiante) => {
            const notasPorClase = generarNotasPorEstudiante(clasesPorAño[año]); // Generar notas para el año específico
            return (
              <div key={indexEstudiante} className="estudiante-section">
                <h3>{estudiante}</h3>
                <table className="notas-table">
                  <thead>
                    <tr>
                      <th>Clase</th>
                      <th>1er Semestre - Parcial 1</th>
                      <th>1er Semestre - Parcial 2</th>
                      <th>2do Semestre - Parcial 1</th>
                      <th>2do Semestre - Parcial 2</th>
                      <th>Nota Final</th>
                    </tr>
                  </thead>
                  <tbody>
                    {notasPorClase.map((clase, indexClase) => (
                      <tr key={indexClase}>
                        <td>{clase.clase}</td>
                        <td>{clase.semestre1Parcial1}</td>
                        <td>{clase.semestre1Parcial2}</td>
                        <td>{clase.semestre2Parcial1}</td>
                        <td>{clase.semestre2Parcial2}</td>
                        <td>{Math.round(clase.notaFinal)}</td> {/* Redondear la nota final */}
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="promedio-general">
                  <h4>Promedio General: {calcularPromedioGeneral(notasPorClase)}</h4>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default VerNotas;
