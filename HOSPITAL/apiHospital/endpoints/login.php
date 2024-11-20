<?php
    //require("../includes/conexion.php");

    switch ($request_method) {
        case 'POST':
            //Obtener Datos de los usuarios
            // Obtener los datos del inicio de sesión desde el cuerpo de la solicitud
            $data = json_decode(file_get_contents("php://input"), true);
            //echo json_encode($data);
            $usuario = $data['name'];
            $contrasena = $data['password'];

            //echo json_encode($userData);
            
            // Función para verificar el inicio de sesión
            function login($usuario, $contrasena) {
                global $db;
                try{
                    $stmt = $db->prepare("SELECT * FROM users WHERE name = :name AND password = :password");
                    $stmt->bindParam(':name', $usuario);
                    $stmt->bindParam(':password', $contrasena);
                    $stmt->execute();

                    if ($stmt->rowCount() > 0 ) {
                        //usuario encontrado
                        $row = $stmt->fetch(PDO::FETCH_ASSOC);
                        //echo json_encode($row);
                        return $row;
                    }

                    return false;
                }catch( PDOExeption $e ){
                    // Manejar errores de la base de datos
                    die("Error al verificar el inicio de sesión: " . $e->getMessage());
                }
            }

            // Verificar el inicio de sesión
            $userData = login($usuario, $contrasena);
            if ($userData) {
                // Usuario autenticado, devolver los datos del usuario en formato JSON
                http_response_code(200);
                echo json_encode($userData);
            } else {
                // Credenciales incorrectas
                http_response_code(401);
                echo json_encode(array("message" => "Credenciales incorrectas"));
            }
        break;
        case "GET":
            // Crear producto (solo permitido para administradores)
            // Recibir datos del producto desde el cuerpo de la solicitud
            $data = json_decode(file_get_contents("php://input"), true);
            $name = $data['name'];
            $email = $data['email'];
            $password = $data['password'];
            $user_type = "patient";
            
            //funcion para crear productos en la base de datos
            function createUsers($name, $email, $password, $user_type){
                global $db;
                $stmt = $db->prepare("INSERT INTO users (name, email, password, user_type) VALUES (:name, :email, :password, :user_type)");
                $stmt->bindParam(':name', $name);
                $stmt->bindParam(':email', $email);
                $stmt->bindParam(':password', $password);
                $stmt->bindParam(':user_type', $user_type);
                $stmt->execute();
                echo json_encode(array("message" => "Usuario creado con exito"));
            }
            //pasar los datos a la funcion
            createUsers($name, $email, $password, $user_type);
        break;
        default:
            echo json_encode(["message" => "Method not allowed"]);
        break;
    }