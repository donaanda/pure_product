<?php
require_once('./header.php');
$postdata = file_get_contents("php://input"); //to get axios call data
$request = json_decode($postdata, true); // decode json
?>