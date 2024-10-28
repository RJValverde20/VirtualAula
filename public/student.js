document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío por defecto del formulario

    // Obtener los valores del formulario
    const carnet = document.getElementById('carnet').value;
    const pin = document.getElementById('pin').value;

    // Validar los datos (esto es solo un ejemplo y debería ser reemplazada por una autenticación real)
    if (carnet && pin) {
        // Aquí deberías verificar los datos en la base de datos
        // Enviar los datos al servidor para autenticación

        // Redirigir al aula virtual del estudiante si las credenciales son correctas
        window.location.href = 'student-dashboard.html';
    } else {
        // Mostrar mensaje de error si falta algún campo
        document.getElementById('error-message').innerText = 'Por favor, complete todos los campos.';
    }
});
