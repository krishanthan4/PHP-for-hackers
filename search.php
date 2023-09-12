<?php 

$dayOfWeek = date("l");

if ($dayOfWeek == "Sunday") {
    $dayId = 1;
} elseif ($dayOfWeek == "Monday") {
    $dayId = 2;
} elseif ($dayOfWeek == "Tuesday") {
    $dayId = 3;
} elseif ($dayOfWeek == "Wednesday") {
    $dayId = 4;
} elseif ($dayOfWeek == "Thursday") {
    $dayId = 5;
} elseif ($dayOfWeek == "Friday") {
    $dayId = 6;
} elseif ($dayOfWeek == "Saturday") {
    $dayId = 7;
}
   $phpResponseArray = array();
   $connection2 = new mysqli("localhost:3306", "username", "password", "timetracker");

   $table2 = $connection2->query("SELECT `task`, `log_time` FROM `tracker`  WHERE `week_id`='".$dayId."'");

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

?>