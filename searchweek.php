<?php 
if (isset($_GET["task"])) {
$weekid = $_GET['weekid'];
   $phpResponseArray = array();
   $connection2 = new mysqli("localhost:3306", "username", "password", "timetracker");
   if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
}
   $table2 = $connection2->query("SELECT `task`, `log_time` FROM `tracker` WHERE `week_id`=".$weekid."");

   if ($table2->num_rows > 0) {
       while ($row = $table2->fetch_assoc()) {
           $taskObject = new stdClass();
           $taskObject->task = $row['task'];

           $phpDateTimeObject = strtotime($row['log_time']);
           $timestr = date("h:i A", $phpDateTimeObject);
           $taskObject->log_time = $timestr;
           $phpResponseArray[] = $taskObject;
       }
   }

   echo json_encode($phpResponseArray);
}
?>