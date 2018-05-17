<?php
header("Access-Control-Allow-Origin: *", "Access-Control-Allow-Headers: *");
require_once('./db_connect.php');
$product_id = 1;
$query = "SELECT 
`ingredient_name` AS ingredient, 
`safety_rating` AS safety, 
`gentle_rating` AS gentle,
`ingredient_detail` AS details  
FROM `ingredient_rating`
JOIN
    (SELECT ingredient_id
     FROM product_name
     JOIN product_ingredient_assoc 
     ON product_name.product_id =product_ingredient_assoc.product_id
     WHERE product_name.product_id = '$product_id'
     GROUP BY 1
) product ON product.ingredient_id=ingredient_rating.ingredient_id
GROUP BY 1,2,3,4";
$result=mysqli_query($db,$query);
$output=[
    'success'=>false,
    'data'=>[]
];
$output['success']=false;
if(mysqli_num_rows($result)>0){
    $output['success']=true;
    echo "<table>";
    while($row=mysqli_fetch_array($result)){
        $output['data'][]=$row;
    };
} else { 
    $output['error']='Can\'t find product';
}
print(json_encode($output));
?>
