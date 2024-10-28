<?php
header('Content-Type: application/json');
$id = isset($_POST['id']) ? $_POST['id'] : '';
$name = isset($_POST['name']) ? $_POST['name'] : '';
$grade = isset($_POST['grade']) ? $_POST['grade'] : '';
$access = isset($_POST['access']) ? $_POST['access'] : '';

// Conectar a la base de datos
// $conn = new mysqli('localhost', 'usuario', 'contraseña', 'base_de_datos');

// Consulta SQL para actualizar datos del estudiante
// $sql = "UPDATE students SET name = '$name', grade = '$grade', access = '$access' WHERE id = '$id'";
// $conn->query($sql);

echo json_encode(['status' => 'success']);
?>
