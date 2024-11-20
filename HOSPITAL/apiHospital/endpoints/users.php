<?php
//include_once '../includes/db.php';
global $db;
switch ($request_method) {
    case 'GET':
        // Obtener todos los usuarios
        $stmt = $db->query("SELECT * FROM Users WHERE state = 'active'");
        $users = $stmt->fetchAll();
        echo json_encode($users);
    break;
    case 'POST':
        // Crear un nuevo usuario
        $data = json_decode(file_get_contents("php://input"), true);
        $name = $data["name"];
        $email = $data["email"];
        $password = $data["password"];
        $user_type = $data["userType"];
        $state = "active";

        $stmt = $db->prepare("INSERT INTO Users (name, email, password, user_type, state) VALUES (?, ?, ?, ?, ?)");
        if ($stmt->execute([$name, $email, $password, $user_type, $state])) {
            echo json_encode(["message" => "Usuario creado con exito"]);
        } else {
            echo json_encode(["message" => "Error al crear un usuario"]);
        }
    break;
    case 'PUT':
        // Actualizar un usuario
        $data = json_decode(file_get_contents("php://input"), true);
        $id = $data["id"];
        $name = $data["name"];
        $email = $data["email"];
        $password = $data["password"];
        $user_type = $data["userType"];
        $state = "active";

        $stmt = $db->prepare("UPDATE Users SET name = ?, email = ?, password = ?, user_type = ?, state = ? WHERE user_id = ?");
        if ($stmt->execute([$name, $email, $password, $user_type, $state, $id])) {
            echo json_encode(["message" => "Usuario actualizado con exito"]);
        } else {
            echo json_encode(["message" => "Error al actualizar el usuario"]);
        }
    break;
    case 'DELETE':
        // Eliminar un usuario
        $data = json_decode(file_get_contents("php://input"), true);
        $id = $data["id"];

        $stmt = $db->prepare("UPDATE Users SET state = ? WHERE user_id = ?");
        if ($stmt->execute(["inactive",$id])) {
            echo json_encode(["message" => "Usuario eliminado con exito"]);
        } else {
            echo json_encode(["message" => "Error al eliminar un usuario"]);
        }
    break;
    default:
        echo json_encode(["message" => "Method not allowed"]);
        break;
}
