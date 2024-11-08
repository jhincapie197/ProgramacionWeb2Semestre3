<?php
// Configuración de la base de datos
$host = 'localhost';
$dbname = 'memuerosalud';
$username = 'root';
$password = '';

 // Conexión a la base de datos
 try {
    $db = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die("Error de conexión a la base de datos: " . $e->getMessage());
}
