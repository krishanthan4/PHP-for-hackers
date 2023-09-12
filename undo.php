<?php

$connection = new mysqli("localhost:3306","username","password","timetracker");

$table = $connection->query("DELETE FROM `tracker` ORDER BY `id` DESC LIMIT 1");
if ($table === TRUE) {
    echo "Records deleted successfully.";
} else {
    echo "Error: " . $connection->error;
}

$connection->close();
?>