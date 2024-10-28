import React, { useState } from 'react';
import logo from '../assets/logo.jpg'; // Asegúrate de importar el logo
import '../styles/ImprimirNotas.css'; // Asegúrate de tener este archivo CSS para estilos adicionales

const ImprimirNotas = () => {
  const [busqueda, setBusqueda] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [mostrarNotas, setMostrarNotas] = useState(false);
  const [yearsSelected, setYearsSelected] = useState({});

  const clasesPorAño = {
    'Séptimo Año': ['Matematica', 'Lengua y Literatura', 'Lengua Extranjera (Inglés)', 'Talleres de Arte y Cultura', 'Creciendo en Valores', 'Educación Física y Práctica Deportiva', 'Educación para Aprender, Emprender, Prosperar', 'Ciencias Naturales', 'Ciencias Sociales Historia', 'Informática', 'Conducta'],
    'Octavo Año': ['Matematica', 'Lengua y Literatura', 'Lengua Extranjera (Inglés)', 'Talleres de Arte y Cultura', 'Creciendo en Valores', 'Educación Física y Práctica Deportiva', 'Educación para Aprender, Emprender, Prosperar', 'Ciencias Naturales', 'Ciencias Sociales Geografía', 'Informática', 'Conducta'],
    'Noveno Año': ['Matematica', 'Lengua y Literatura', 'Lengua Extranjera (Inglés)', 'Derechos y Dignidad de la Mujer', 'Talleres de Arte y Cultura', 'Creciendo en Valores', 'Educación Física y Práctica Deportiva', 'Educación para Aprender, Emprender, Prosperar', 'Ciencias Naturales', 'Ciencias Sociales Sociología', 'Informática', 'Fe y Vida', 'Conducta'],
    'Cuarto Año': ['Matematica', 'Lengua y Literatura', 'Lengua Extranjera (Inglés)', 'Derechos y Dignidad de la Mujer', 'Creciendo en Valores', 'Educación Física y Práctica Deportiva', 'Educación para Aprender, Emprender, Prosperar', 'Biología', 'Química', 'Física', 'Ciencias Sociales Economía', 'Informática', 'Fe y Vida', 'Conducta'],
    'Quinto Año': ['Matematica', 'Lengua y Literatura', 'Lengua Extranjera (Inglés)', 'Derechos y Dignidad de la Mujer', 'Creciendo en Valores', 'Educación Física y Práctica Deportiva', 'Educación para Aprender, Emprender, Prosperar', 'Biología', 'Química', 'Física', 'Monografía', 'Ciencias Sociales Economía', 'Informática', 'Fe y Vida', 'Conducta'],
  };

  const estudiantesPorAño = {
    'Séptimo Año': ['Pedro Martínez García - Carnet: 1-123456-7', 'Ana López Pérez - Carnet: 2-654321-8'],
    'Octavo Año': ['Juan Ramírez Torres - Carnet: 1-234567-8', 'Lucía Gómez Cruz - Carnet: 2-345678-9'],
    'Noveno Año': ['Carlos Herrera Díaz - Carnet: 1-345678-9', 'Sofía Núñez Morales - Carnet: 2-456789-0'],
    'Cuarto Año': ['Diego Morales Álvarez - Carnet: 1-456789-0', 'Marta Fernández Rojas - Carnet: 2-567890-1'],
    'Quinto Año': ['Luis Torres Medina - Carnet: 1-567890-1', 'Elena Vargas Flores - Carnet: 2-678901-2'],
  };

  const generarNotasPorEstudiante = (clases) => {
    return clases.map(clase => {
      const semestre1Parcial1 = Math.floor(Math.random() * 41) + 60;
      const semestre1Parcial2 = Math.floor(Math.random() * 41) + 60;
      const semestre2Parcial1 = Math.floor(Math.random() * 41) + 60;
      const semestre2Parcial2 = Math.floor(Math.random() * 41) + 60;
      const notaFinal = (semestre1Parcial1 + semestre1Parcial2 + semestre2Parcial1 + semestre2Parcial2) / 4;

      return {
        clase,
        semestre1Parcial1: Math.round(semestre1Parcial1),
        semestre1Parcial2: Math.round(semestre1Parcial2),
        semestre2Parcial1: Math.round(semestre2Parcial1),
        semestre2Parcial2: Math.round(semestre2Parcial2),
        notaFinal,
      };
    });
  };

  const calcularPromedioGeneral = (notasPorClase) => {
    const sumaNotasFinales = notasPorClase.reduce((total, clase) => total + clase.notaFinal, 0);
    return (sumaNotasFinales / notasPorClase.length).toFixed(2);
  };

  const manejarBusqueda = (e) => {
    setBusqueda(e.target.value);
  };

  const estudiantesFiltrados = {};
  Object.keys(estudiantesPorAño).forEach((año) => {
    estudiantesFiltrados[año] = estudiantesPorAño[año].filter((estudiante) =>
      estudiante.toLowerCase().includes(busqueda.toLowerCase())
    );
  });

  const manejarImprimirNotas = () => {
    const content = document.getElementById('notas-to-print');
    const ventanaImpresion = window.open('', '', 'width=800,height=600');
    ventanaImpresion.document.write(`
      <html>
        <head>
          <title>Imprimir Notas</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            .logo { float: left; width: 100px; height: auto; }
            .title { text-align: center; }
            .signature { margin-top: 20px; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: center; }
            h3 { text-align: center; }
          </style>
        </head>
        <body>
          <img src="${logo}" class="logo" alt="Logo"/>
          <h1 class="title">Nombre del Colegio</h1>
          <div>${content.innerHTML}</div>
          <div class="signature">
            <p>Firma del Director</p>
            <p>Firma del Sub Director</p>
          </div>
        </body>
      </html>
    `);
    ventanaImpresion.document.close();
    ventanaImpresion.focus();
    ventanaImpresion.print();
    ventanaImpresion.close();
  };

  const manejarCambioYear = (estudiante, year) => {
    setYearsSelected((prev) => ({
      ...prev,
      [estudiante]: year,
    }));
  };

  return (
    <div className="imprimir-notas-container">
      <h1>Informe de Notas de Estudiantes</h1>
      
      <input
        type="text"
        placeholder="Buscar estudiante..."
        value={busqueda}
        onChange={manejarBusqueda}
        className="search-bar"
      />

      <h2>Estudiantes Matriculados</h2>
      <ul className="estudiantes-list">
        {Object.keys(estudiantesFiltrados).map((año, indexAño) => (
          estudiantesFiltrados[año].map((estudiante, indexEstudiante) => (
            <li key={indexEstudiante} className="estudiante-item">
              <button onClick={() => {setSelectedStudent(estudiante); setMostrarNotas(true);}}>Ver Notas</button>
              {estudiante}
              <button onClick={() => {setSelectedStudent(estudiante); setMostrarNotas(true);}}>Imprimir Notas</button>
              <select 
                value={yearsSelected[estudiante] || "Elegir opción"} 
                onChange={(e) => manejarCambioYear(estudiante, e.target.value)} 
                className="select-year">
                <option value="Elegir opción">Elegir opción</option>
                <option value="Todos los años">Todos los años</option>
                {Object.keys(clasesPorAño).map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </li>
          ))
        ))}
      </ul>

      {mostrarNotas && (
        <div className="notas-container" id="notas-to-print">
          <h3>Notas de {selectedStudent}</h3>
          <div className="scrollable-content">
            {Object.keys(clasesPorAño).map((año) => {
              const yearSelected = yearsSelected[selectedStudent] || "Elegir opción";
              return (
                yearSelected === "Todos los años" || yearSelected === año ? (
                  <div key={año} className="notas-year">
                    <h4>{año}</h4>
                    <table className="notas-table">
                      <thead>
                        <tr>
                          <th>Clase</th>
                          <th>Semestre 1 Parcial 1</th>
                          <th>Semestre 1 Parcial 2</th>
                          <th>Semestre 2 Parcial 1</th>
                          <th>Semestre 2 Parcial 2</th>
                          <th>Nota Final</th>
                        </tr>
                      </thead>
                      <tbody>
                        {generarNotasPorEstudiante(clasesPorAño[año]).map((nota, indexNota) => (
                          <tr key={indexNota}>
                            <td>{nota.clase}</td>
                            <td>{nota.semestre1Parcial1}</td>
                            <td>{nota.semestre1Parcial2}</td>
                            <td>{nota.semestre2Parcial1}</td>
                            <td>{nota.semestre2Parcial2}</td>
                            <td>{nota.notaFinal.toFixed(2)}</td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colSpan={5}>Promedio General</td>
                          <td>{calcularPromedioGeneral(generarNotasPorEstudiante(clasesPorAño[año]))}</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                ) : null
              );
            })}
          </div>
          <button onClick={manejarImprimirNotas} className="btn-imprimir">Imprimir Notas</button>
        </div>
      )}
    </div>
  );
};

export default ImprimirNotas;
