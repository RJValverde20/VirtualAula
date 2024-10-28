<?php
header('Content-Type: application/json');
$id = isset($_POST['id']) ? $_POST['id'] : '';

// Conectar a la base de datos
// $conn = new mysqli('localhost', 'usuario', 'contraseña', 'base_de_datos');

// Consulta SQL para recuperar PIN y carnet
// $sql = "SELECT pin, carnet FROM students WHERE id = '$id'";
// $result = $conn->query($sql);
// $data = $result->fetch_assoc();

// Ejemplo de datos (reemplaza esto con la consulta a la base de datos)
$data = [
    'pin' => '1234',
    'carnet' => '5678'
];

echo json_encode($data);
?>
