<?php
//include_once '../includes/db.php';
global $db;

switch ($request_method) {
    case 'GET':
        // Obtener todos los doctores
        $stmt = $db->query("SELECT * FROM Doctors");
        $doctors = $stmt->fetchAll();
        echo json_encode($doctors);
        break;

    case 'POST':
        // Crear un nuevo doctor
        $data = json_decode(file_get_contents("php://input"), true);
        $user_id = $data["user_id"];
        $specialty_id = $data["specialty_id"];

        $stmt = $db->prepare("INSERT INTO Doctors (user_id, specialty_id) VALUES (?, ?)");
        if ($stmt->execute([$user_id, $specialty_id])) {
            echo json_encode(["message" => "Doctor created successfully"]);
        } else {
            echo json_encode(["message" => "Error creating doctor"]);
        }
        break;

    case 'PUT':
        // Actualizar un doctor
        $data = json_decode(file_get_contents("php://input"), true);
        $id = $data["id"];
        $user_id = $data["user_id"];
        $specialty_id = $data["specialty_id"];

        $stmt = $pdo->prepare("UPDATE Doctors SET user_id = ?, specialty_id = ? WHERE id = ?");
        if ($stmt->execute([$user_id, $specialty_id, $id])) {
            echo json_encode(["message" => "Doctor updated successfully"]);
        } else {
            echo json_encode(["message" => "Error updating doctor"]);
        }
        break;

    case 'DELETE':
        // Eliminar un doctor
        $data = json_decode(file_get_contents("php://input"), true);
        $id = $data["id"];

        $stmt = $pdo->prepare("DELETE FROM Doctors WHERE id = ?");
        if ($stmt->execute([$id])) {
            echo json_encode(["message" => "Doctor deleted successfully"]);
        } else {
            echo json_encode(["message" => "Error deleting doctor"]);
        }
        break;

    default:
        echo json_encode(["message" => "Method not allowed"]);
        break;
}