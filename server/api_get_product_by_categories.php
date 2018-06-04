<?php
require_once('./header.php');
$postdata = file_get_contents("php://input"); //to get axios call data
$request = json_decode($postdata); // decode json
require_once('./db_connect.php');
$category = 'foundation';
$category = addslashes($category);
$query = "SELECT
    product_name.*,
    `rating`,
    `price`,
    `Cruelty_Free`,
    `Vegan`
    FROM
    `product_name`
    JOIN `product_foundation_table` ON product_name.product_id = product_foundation_table.product_id
    WHERE `categories` = '$category'"; 
    // LIMIT 10";
$result=mysqli_query($db,$query);

$output=[
    'success'=>false,
    'data'=>[]
];
$output['success']=false;

if ($result){
    if(mysqli_num_rows($result)>0){
        $row=mysqli_fetch_assoc($result);
        $output['success']=true;
        $output['data'][]=$row;
        while($row=mysqli_fetch_assoc($result)){
            $output['data'][]=$row;
        };
        
    } else {
        $output['error']='Can\'t find product';
    }
} else {
    error_log(date('Y-m-d H:i:s')." error in query: $query ".mysqli_error($db));
    $output['error'] = 'Error in query';
}

print(json_encode($output));
?>