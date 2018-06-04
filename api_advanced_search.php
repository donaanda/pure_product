<?php
require_once('./header.php');
$postdata = file_get_contents("php://input"); //to get axios call data
$request = json_decode($postdata, true); // decode json
require_once('./db_connect.php');
$advanced_search_ob = $request['query'];
print_r($advanced_search_ob); 
?>

