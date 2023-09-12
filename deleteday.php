<?php
$connection = new mysqli("localhost:3306", "username", "password", "timetracker");
date_default_timezone_set("Asia/Calcutta");   //India time (GMT+5:30)
$currentDateTime = date("Y-m-d");

$table = $connection->query("DELETE FROM `tracker` WHERE `log_time`LIKE '".$currentDateTime."%'");

if ($table === TRUE) {
    echo "Records deleted successfully.";
} else {
    echo "Error: " . $connection->error;
}

$connection->close();
?>
