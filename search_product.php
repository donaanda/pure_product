<?php
header("Access-Control-Allow-Origin: *", "Access-Control-Allow-Headers: *");
require_once('./db_connect.php');
$search_input = 'Foundation';
$query = "SELECT * FROM `product_name` WHERE `product_name` LIKE '%$search_input%' OR `brand` LIKE '%$search_input%' OR `categories` LIKE '%$search_input%'";
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