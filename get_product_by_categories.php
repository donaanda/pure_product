<?php
header("Access-Control-Allow-Origin: *", "Access-Control-Allow-Headers: *");
require_once('./db_connect.php');
$category = 'foundation';
$query = "SELECT
product_name.*,
`rating`,
`price`,
`Cruelty_Free`,
`Vegan`
FROM
`product_name`
JOIN `product_foundation_table` ON product_name.product_id = product_foundation_table.product_id
WHERE `categories` LIKE '%$category%' LIMIT 10";
$result=mysqli_query($db,$query);

$output=[
    'success'=>false,
    'data'=>[]
];
$output['success']=false;

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

print(json_encode($output));
?>