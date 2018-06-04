<?php
header("Access-Control-Allow-Origin: *", "Access-Control-Allow-Headers: *");
require_once('./db_connect.php');
$query = "SELECT `product_name`,`categories`,`brand` FROM `product_name`";
$result=mysqli_query($db,$query);
$output=[];
$output['success']=false;
if(mysqli_num_rows($result)){
    $output['success']=true;
    while($row=mysqli_fetch_assoc($result)){
        $output['data']['productName'][]=$row["product_name"];
        $output['data']['categories'][]=$row["categories"];
        $output['data']['brand'][]=$row["brand"];
    };
} else {
    $output['error']='something went wrong';
}
print(json_encode($output['data']));
?>