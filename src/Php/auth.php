<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization');

    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(200);
        exit();
    }

    $email = "";
    $password = "";
    $response = array();

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $data = json_decode(file_get_contents('php://input'), true);
        $email = $data['email'];
        $password = $data['password'];
    }

    $conn = new mysqli("localhost", "root", "", "cinescape");

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } else {
        $sql = "SELECT * FROM users WHERE user_email = '$email' AND user_password = '$password'";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $response['status'] = "success";
        } else {
            $response['status'] = "error";
        }
    }

    header('Content-Type: application/json');
    echo json_encode($response);
?>
