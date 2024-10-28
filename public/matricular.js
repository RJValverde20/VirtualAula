document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío por defecto del formulario
    
    // Obtener los valores del formulario
    const firstName = document.getElementById('studentFirstName').value;
    const lastName = document.getElementById('studentLastName').value;
    const fatherFirstName = document.getElementById('fatherFirstName').value;
    const fatherLastName = document.getElementById('fatherLastName').value;
    const motherFirstName = document.getElementById('motherFirstName').value;
    const motherLastName = document.getElementById('motherLastName').value;
    const fatherPhone1 = document.getElementById('fatherPhone1').value;
    const fatherPhone2 = document.getElementById('fatherPhone2').value;
    const motherPhone1 = document.getElementById('motherPhone1').value;
    const motherPhone2 = document.getElementById('motherPhone2').value;
    const dob = document.getElementById('studentDOB').value;
    const city = document.getElementById('studentCity').value;
    const grade = document.getElementById('studentGrade').value;

    // Validar los datos
    if (firstName && lastName && fatherFirstName && fatherLastName && motherFirstName && motherLastName && fatherPhone1 && motherPhone1 && dob && city && grade) {
        // Generar PIN y carnet
        const dobYear = new Date(dob).getFullYear();
        const pin = `${firstName.charAt(0).toUpperCase()}${dobYear}`;
        const year = grade.split(' ')[0]; // Extraer año del grado
        const carnet = `${year}-${Math.floor(1000 + Math.random() * 9000)}`; // Carnet más corto

        // Mostrar el resultado
        document.getElementById('result').innerHTML = `
            <h3>Estudiante Registrado</h3>
            <p><strong>Nombre:</strong> ${firstName} ${lastName}</p>
            <p><strong>Nombre del Padre:</strong> ${fatherFirstName} ${fatherLastName}</p>
            <p><strong>Nombre de la Madre:</strong> ${motherFirstName} ${motherLastName}</p>
            <p><strong>Carnet:</strong> ${carnet}</p>
            <p><strong>PIN:</strong> ${pin}</p>
        `;
    } else {
        document.getElementById('result').innerHTML = `
            <p class="error-message">Por favor, completa todos los campos obligatorios.</p>
        `;
    }
});
