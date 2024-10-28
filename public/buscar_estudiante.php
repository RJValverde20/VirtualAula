<?php
header('Content-Type: application/json');
$query = isset($_POST['query']) ? $_POST['query'] : '';

// Conectar a la base de datos
// $conn = new mysqli('localhost', 'usuario', 'contraseña', 'base_de_datos');

// Consulta SQL para buscar estudiante por nombre o carnet
// $sql = "SELECT * FROM students WHERE name LIKE '%$query%' OR carnet LIKE '%$query%'";
// $result = $conn->query($sql);

// Ejemplo de datos (reemplaza esto con la consulta a la base de datos)
$data = [
    'id' => '1',
    'name' => 'Juan Pérez',
    'grade' => '10mo',
    'pin' => '1234',
    'carnet' => '5678',
    'access' => 'Acceso Completo',
    'photo' => 'foto-juan.jpg'
];

echo json_encode($data);
?>
