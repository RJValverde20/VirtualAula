import React, { useState, useEffect } from 'react';
import '../styles/AdminEstudiantes.css';

const AdminEstudiantes = () => {
  const [estudiantes, setEstudiantes] = useState(() => {
    const savedEstudiantes = localStorage.getItem('estudiantes');
    return savedEstudiantes ? JSON.parse(savedEstudiantes) : [
      { id: 1, nombre: 'Juan', apellido: 'Perez', correo: 'juan@example.com', telefono: '123-456-7890', grado: '10mo', foto: null },
      { id: 2, nombre: 'Ana', apellido: 'Gomez', correo: 'ana@example.com', telefono: '987-654-3210', grado: '11mo', foto: null },
      { id: 3, nombre: 'Carlos', apellido: 'Rodriguez', correo: 'carlos@example.com', telefono: '456-789-0123', grado: '9no', foto: null },
      { id: 4, nombre: 'Maria', apellido: 'Lopez', correo: 'maria@example.com', telefono: '321-654-9870', grado: '8vo', foto: null },
      { id: 5, nombre: 'Luis', apellido: 'Garcia', correo: 'luis@example.com', telefono: '741-852-9630', grado: '7mo', foto: null },
    ];
  });

  const [selectedEstudiante, setSelectedEstudiante] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    grado: '',
    foto: null,
  });
  const [successMessage, setSuccessMessage] = useState(''); // Para el mensaje de éxito
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    localStorage.setItem('estudiantes', JSON.stringify(estudiantes));
  }, [estudiantes]);

  const handleSelectEstudiante = (estudiante) => {
    setSelectedEstudiante(estudiante.id);
    setFormData({
      nombre: estudiante.nombre,
      apellido: estudiante.apellido,
      correo: estudiante.correo,
      telefono: estudiante.telefono,
      grado: estudiante.grado,
      foto: estudiante.foto,
    });
    setEditMode(false);
    setSuccessMessage(''); // Limpiar el mensaje de éxito al seleccionar un nuevo estudiante
  };

  const handleEdit = (id) => {
    setEditMode(id); // Activar el modo de edición para el estudiante seleccionado
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          foto: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setEstudiantes(estudiantes.map(est => est.id === selectedEstudiante ? { ...est, ...formData } : est));
    setEditMode(false);

    // Mostrar mensaje de éxito y hacerlo desaparecer
    setSuccessMessage('Cambios Guardados con Éxito');
    setTimeout(() => {
      setSuccessMessage(''); // Ocultar el mensaje después de 3 segundos
    }, 3000); // 3000ms = 3 segundos
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filtrar estudiantes según el término de búsqueda
  const filteredEstudiantes = estudiantes.filter(est =>
    est.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    est.apellido.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="admin-estudiantes-container">
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

      <div className="main-content">
        <h1>Administrar Estudiantes</h1>

        {/* Barra de Búsqueda */}
        <input
          type="text"
          className="search-bar"
          placeholder="Buscar estudiante por nombre o apellido..."
          value={searchTerm}
          onChange={handleSearch}
        />

        <div className="estudiantes-list">
          <h2>Lista de Estudiantes</h2>
          <ul>
            {filteredEstudiantes.map(estudiante => (
              <li key={estudiante.id}>
                <button onClick={() => handleSelectEstudiante(estudiante)}>
                  {estudiante.nombre} {estudiante.apellido}
                </button>
                
                {/* Mostrar formulario de edición justo debajo del estudiante seleccionado */}
                {selectedEstudiante === estudiante.id && (
                  <div className="student-details">
                    {editMode === estudiante.id ? (
                      <div className="edit-form">
                        <h2>Editar Información del Estudiante</h2>
                        <label>
                          Nombre:
                          <input
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                          />
                        </label>
                        <label>
                          Apellido:
                          <input
                            type="text"
                            name="apellido"
                            value={formData.apellido}
                            onChange={handleChange}
                          />
                        </label>
                        <label>
                          Correo Electrónico:
                          <input
                            type="email"
                            name="correo"
                            value={formData.correo}
                            onChange={handleChange}
                          />
                        </label>
                        <label>
                          Teléfono:
                          <input
                            type="text"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleChange}
                          />
                        </label>
                        <label>
                          Grado:
                          <select
                            name="grado"
                            value={formData.grado}
                            onChange={handleChange}
                          >
                            <option value="7mo">7mo</option>
                            <option value="8vo">8vo</option>
                            <option value="9no">9no</option>
                            <option value="10mo">10mo</option>
                            <option value="11mo">11mo</option>
                          </select>
                        </label>
                        <label>
                          Foto de Perfil:
                          <input
                            type="file"
                            name="foto"
                            onChange={handleFileChange}
                          />
                        </label>
                        {formData.foto && (
                          <div className="profile-pic">
                            <img src={formData.foto} alt="Foto del Estudiante" className="circular-image" />
                          </div>
                        )}
                        <button onClick={handleSave}>Guardar Cambios</button>
                        {successMessage && <p className={`success-message ${!successMessage ? 'hidden' : ''}`}>{successMessage}</p>}
                      </div>
                    ) : (
                      <div>
                        {estudiante.foto && (
                          <div className="profile-pic">
                            <img src={estudiante.foto} alt={`${estudiante.nombre} ${estudiante.apellido}`} className="circular-image" />
                          </div>
                        )}
                        <p><strong>Nombre:</strong> {estudiante.nombre}</p>
                        <p><strong>Apellido:</strong> {estudiante.apellido}</p>
                        <p><strong>Correo:</strong> {estudiante.correo}</p>
                        <p><strong>Teléfono:</strong> {estudiante.telefono}</p>
                        <p><strong>Grado:</strong> {estudiante.grado}</p>
                        <button className="edit-button" onClick={() => handleEdit(estudiante.id)}>Editar</button>
                      </div>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminEstudiantes;
