<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Allow: GET, POST, OPTIONS, PUT, DELETE");
    $method = $_SERVER['REQUEST_METHOD'];
    if($method == "OPTIONS") {
        die();
    }

    require("includes/conexion.php");
    $ruta = $_GET['url'] ?? '';

$request_method = $_SERVER["REQUEST_METHOD"];
$request_uri = $_SERVER["REQUEST_URI"];

//echo $request_uri. " ". $request_method;
//login y register
if (strpos($request_uri, "/login") !== false) {
    include_once 'endpoints/login.php';
}else if(strpos($request_uri, "/users") !== false){
    include_once 'endpoints/users.php';
}else if (strpos($request_uri, "/doctors") !== false) {
    include_once 'endpoints/doctors.php';
}else if (strpos($request_uri, "/appointments") !== false) {
    include_once 'endpoints/citas.php';
} else {
    echo json_encode(["message" => "Endpoint not found"]);
}