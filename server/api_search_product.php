<?php
require_once('./header.php');
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
require_once('./db_connect.php');
$search_input = $request->query;
$query = "SELECT 
    product_name.*, 
    `rating`, 
    `price`, 
    `Cruelty_Free`, 
    `Vegan` 
    FROM `product_name` 
    JOIN `product_foundation_table` 
    ON product_name.product_id = product_foundation_table.product_id 
    WHERE `categories` LIKE '%$search_input%' 
    OR `product_name` LIKE '%$search_input%'
    OR `brand` LIKE '%$search_input%'";
$result=mysqli_query($db,$query);
$output=[];
$output['success']=false;
if(mysqli_num_rows($result)){
    $output['success']=true;
    while($row=mysqli_fetch_assoc($result)){
        $output['data'][]=$row;
    };
} else {
    $output['error']='Can\'t find product';
}
print(json_encode($output));
?>