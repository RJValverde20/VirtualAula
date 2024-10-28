document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form');
    const studentForm = document.getElementById('student-form');
    const recoverButton = document.getElementById('recover-pin-carnet');

    searchForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const studentId = document.getElementById('student-id').value;

        // Buscar estudiante
        const response = await fetch('buscar_estudiante.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({ id: studentId })
        });

        const data = await response.json();

        // Mostrar los datos del estudiante
        document.getElementById('student-name').value = data.name;
        document.getElementById('student-grade').value = data.grade;
        document.getElementById('student-pin').value = data.pin || 'No disponible';
        document.getElementById('student-carnet').value = data.carnet || 'No disponible';
        document.getElementById('student-access').value = data.access;
        document.getElementById('student-photo').src = data.photo || 'default.jpg';
    });

    studentForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const studentId = document.getElementById('student-id').value;
        const name = document.getElementById('student-name').value;
        const grade = document.getElementById('student-grade').value;
        const access = document.getElementById('student-access').value;

        // Actualizar estudiante
        const response = await fetch('actualizar_estudiante.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                id: studentId,
                name: name,
                grade: grade,
                access: access
            })
        });

        const result = await response.json();

        if (result.status === 'success') {
            alert('Datos actualizados correctamente');
        } else {
            alert('Error al actualizar datos');
        }
    });

    recoverButton.addEventListener('click', async () => {
        const studentId = document.getElementById('student-id').value;

        // Recuperar PIN y carnet
        const response = await fetch('recuperar_pin_carnet.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({ id: studentId })
        });

        const data = await response.json();

        document.getElementById('student-pin').value = data.pin;
        document.getElementById('student-carnet').value = data.carnet;
    });
});
