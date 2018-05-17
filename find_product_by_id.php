<?php
header("Access-Control-Allow-Origin: *", "Access-Control-Allow-Headers: *");
require_once('./db_connect.php');
// print_r($_POST);
$product_id = 1; 
$output=[
    'success'=>false,
    'product'=>[],
    'ingredients'=>[]
];
if(empty($product_id)){
    $output['error'] = 'Need product id!';
} else{
    $query = "SELECT * FROM `product_name` WHERE `product_id` = $product_id";
    $result=mysqli_query($db,$query);
    if(mysqli_num_rows($result)){
        $row=mysqli_fetch_assoc($result);
        $output['success']=true;
        $output['product']=$row; 
    } else {
        $output['error']='Can\'t find product';
    }

    $query_for_ingredient = "SELECT 
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
    $result=mysqli_query($db,$query_for_ingredient);
    if(mysqli_num_rows($result)>0){
        $output['success']=true;
        while($row=mysqli_fetch_array($result)){
            $output['ingredients'][]=$row;
        };
    } else { 
        $output['error']='Can\'t find ingredient';
    }
}
print(json_encode($output));
?>