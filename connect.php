<?php
// 1. Check if form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 2. Collect and sanitize form data
    $first_name = htmlspecialchars($_POST['first_name']);
    $last_name = htmlspecialchars($_POST['last_name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // 3. Connect to your database
    $servername = "localhost";  // Usually localhost
    $username = "root";         // Default for XAMPP is 'root'
    $password = "";             // Default is empty
    $dbname = "contact";        // your database name

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // 4. Insert form data into database
    $stmt = $conn->prepare("INSERT INTO contact_form (first_name, last_name, email, subject, message) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $first_name, $last_name, $email, $subject, $message);

    if ($stmt->execute()) {
        echo "Thank you, your message was sent successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }

    // 5. Close connection
    $stmt->close();
    $conn->close();
} else {
    echo "No form data submitted.";
}
?>