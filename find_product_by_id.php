<?php
header("Access-Control-Allow-Origin: *", "Access-Control-Allow-Headers: *");
require_once('./db_connect.php');
print_r($_POST);
$product_id = 1; 
$output=[];
if(empty($product_id)){
    $output['error'] = 'Need product id!';
} else{
    $query = "SELECT * FROM `product_name` WHERE `product_id` = $product_id";
    $result=mysqli_query($db,$query);
    $output['success']=false;
    if(mysqli_num_rows($result)){
        $row=mysqli_fetch_assoc($result);
        $output['success']=true;
        $output['products']=$row; 
    } else {
        $output['error']='Can\'t find product';
    }
}

print(json_encode($output));
?>