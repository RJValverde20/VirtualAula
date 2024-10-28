document.addEventListener("DOMContentLoaded", () => {
    // Función para mostrar la vista seleccionada
    function mostrarVista(seccion) {
        const secciones = document.querySelectorAll('.dashboard-section');
        secciones.forEach(sec => sec.style.display = 'none');
        document.getElementById(seccion).style.display = 'block';
    }

    // Función para cargar las clases asignadas al profesor
    function cargarClasesAsignadas() {
        // Simulación de clases asignadas. Esta información debería venir del servidor.
        const clasesAsignadas = [
            { clase: 'Matemáticas', aula: '101', estudiantes: 25 },
            { clase: 'Literatura', aula: '102', estudiantes: 20 }
        ];

        const clasesSelect = document.getElementById('class-select');
        const clasesAsignadasTbody = document.getElementById('clases-asignadas');
        clasesAsignadas.forEach(clase => {
            // Agregar opción al select de clases para subir tareas
            const option = document.createElement('option');
            option.value = clase.clase;
            option.textContent = `${clase.clase} - Aula ${clase.aula}`;
            clasesSelect.appendChild(option);

            // Agregar fila a la tabla de clases asignadas
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${clase.clase}</td>
                <td>${clase.aula}</td>
                <td>${clase.estudiantes}</td>
            `;
            clasesAsignadasTbody.appendChild(row);
        });
    }

    // Función para cargar los estudiantes asignados al profesor
    function cargarEstudiantesAsignados() {
        // Simulación de estudiantes asignados. Esta información debería venir del servidor.
        const estudiantesAsignados = [
            { matricula: '001', nombre: 'Juan Pérez', correo: 'juan.perez@example.com', clase: 'Matemáticas' },
            { matricula: '002', nombre: 'María López', correo: 'maria.lopez@example.com', clase: 'Literatura' }
        ];

        const estudiantesTbody = document.getElementById('estudiantes-asignados');
        estudiantesAsignados.forEach(estudiante => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${estudiante.matricula}</td>
                <td>${estudiante.nombre}</td>
                <td>${estudiante.correo}</td>
                <td>${estudiante.clase}</td>
            `;
            estudiantesTbody.appendChild(row);
        });
    }

    // Manejo del formulario de subida de tareas
    const uploadForm = document.getElementById("upload-assignment-form");
    const fileInput = document.getElementById("assignment-file");

    uploadForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevenir el envío del formulario hasta verificar los archivos

        const claseSeleccionada = document.getElementById('class-select').value;
        const titulo = document.getElementById('assignment-title').value;
        const descripcion = document.getElementById('assignment-description').value;
        const fechaEntrega = document.getElementById('due-date').value;

        if (!claseSeleccionada) {
            alert("Debe seleccionar una clase.");
            return;
        }

        const files = fileInput.files;
        const maxFileSize = 10 * 1024 * 1024; // Tamaño máximo permitido por archivo (10MB)
        const allowedExtensions = ["jpg", "jpeg", "png", "gif", "mp4", "mov", "avi", "pdf", "doc", "docx", "xls", "xlsx"];

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const fileSize = file.size;
            const fileExtension = file.name.split(".").pop().toLowerCase();

            if (!allowedExtensions.includes(fileExtension)) {
                alert(`El archivo ${file.name} no es un tipo permitido.`);
                return;
            }

            if (fileSize > maxFileSize) {
                alert(`El archivo ${file.name} supera el tamaño máximo permitido de 10MB.`);
                return;
            }
        }

        // Enviar la tarea al servidor (aquí usarías fetch o AJAX para realizar la solicitud)
        alert(`Tarea para la clase ${claseSeleccionada} subida exitosamente.`);
    });

    // Manejo del botón de cerrar sesión
    const logoutButton = document.getElementById("logout-button");
    logoutButton.addEventListener("click", () => {
        window.location.href = 'index.html'; // Redirige al login
    });

    // Cargar datos iniciales
    cargarClasesAsignadas();
    cargarEstudiantesAsignados();

    // Mostrar la vista inicial
    mostrarVista('clases');
});
