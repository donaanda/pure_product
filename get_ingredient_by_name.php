<?php
require_once('./header.php');
$postdata = file_get_contents("php://input");
$request = json_decode($postdata); 
require_once('./db_connect.php');
$search_input = $request->query; 
$query = "SELECT 
    a.ingredient_name as ingredient, 
    a.safety_rating as safety, 
    CASE WHEN `Rating` = 'Average' 
    THEN 3 WHEN `Rating` = 'Best' 
    THEN 1 WHEN `Rating` = 'Good' 
    THEN 2 WHEN `Rating` = 'Poor' 
    THEN 4 END AS `gentle`, 
    COALESCE(details,description) as details 
    FROM (SELECT 
        safety_rating, 
        ingredient_id, 
        `name to search` as ingredient_name, 
        `About Info` as details 
        FROM ewg_data) a 
    JOIN ingredient_rating 
    ON ingredient_rating.ingredient_name = a.ingredient_name 
    WHERE a.ingredient_name LIKE '%$search_input%'";

$result=mysqli_query($db,$query);
$output=[];
$output['success']=false;
if(mysqli_num_rows($result)){
    $row=mysqli_fetch_assoc($result);
    $output['success']=true;
    $output['ingredients'][]=$row; 
    
} else {
    error_log(date('Y-m-d H:i:s')." error in query: $query ".mysqli_error($db));
    $output['error']='Can\'t find product';
}
print(json_encode($output));
?>