<?php
//include_once '../includes/db.php';
global $db;

switch ($request_method) {
    case 'GET':
        // Obtener todas las citas
        $stmt = $db->query("SELECT * FROM Appointments");
        $appointments = $stmt->fetchAll();
        echo json_encode($appointments);
        break;

    case 'POST':
        // Crear una nueva cita
        $data = json_decode(file_get_contents("php://input"), true);
        $patient_id = $data["patient_id"];
        $doctor_id = $data["doctor_id"];
        $appointment_date = $data["appointment_date"];
        $appointment_time = $data["appointment_time"];
        $status = $data["status"];

        $stmt = $db->prepare("INSERT INTO Appointments (patient_id, doctor_id, appointment_date, appointment_time, status) VALUES (?, ?, ?, ?, ?)");
        if ($stmt->execute([$patient_id, $doctor_id, $appointment_date, $appointment_time, $status])) {
            echo json_encode(["message" => "Appointment created successfully"]);
        } else {
            echo json_encode(["message" => "Error creating appointment"]);
        }
        break;

    case 'PUT':
        // Actualizar una cita
        $data = json_decode(file_get_contents("php://input"), true);
        $id = $data["id"];
        $patient_id = $data["patient_id"];
        $doctor_id = $data["doctor_id"];
        $appointment_date = $data["appointment_date"];
        $appointment_time = $data["appointment_time"];
        $status = $data["status"];

        $stmt = $db->prepare("UPDATE Appointments SET patient_id = ?, doctor_id = ?, appointment_date = ?, appointment_time = ?, status = ? WHERE id = ?");
        if ($stmt->execute([$patient_id, $doctor_id, $appointment_date, $appointment_time, $status, $id])) {
            echo json_encode(["message" => "Appointment updated successfully"]);
        } else {
            echo json_encode(["message" => "Error updating appointment"]);
        }
        break;

    case 'DELETE':
        // Eliminar una cita
        $data = json_decode(file_get_contents("php://input"), true);
        $id = $data["id"];

        $stmt = $db->prepare("DELETE FROM Appointments WHERE id = ?");
        if ($stmt->execute([$id])) {
            echo json_encode(["message" => "Appointment deleted successfully"]);
        } else {
            echo json_encode(["message" => "Error deleting appointment"]);
        }
        break;

    default:
        echo json_encode(["message" => "Method not allowed"]);
        break;
}