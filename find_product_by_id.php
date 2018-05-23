<?php
require_once('./header.php');
$postdata = file_get_contents("php://input"); //to get axios call data
$request = json_decode($postdata); // decode json
require_once('./db_connect.php');
$product_id = $request->id; 
$output=[
    'success'=>false,
    'product'=>[],
    'ingredients'=>[]
];

if(empty($product_id)){
    $output['error'] = 'Need product id!';
} else{
    $query = "SELECT
    product_name.*,
    `size`,
    `rating`,
    `price`,
    `Normal`,
    `Dry`,
    `Combo`,
    `Sensitive`,
    `Oily`,
    `Coverage`,
    `What_it_is` AS Details,
    `Cruelty_Free`,
    `Vegan`
    FROM
    `product_name`
    JOIN `product_foundation_table` ON product_name.product_id = product_foundation_table.product_id
    WHERE `product_foundation_table`.`product_id` = $product_id";
    $result=mysqli_query($db,$query);
    if(mysqli_num_rows($result)){
        $row=mysqli_fetch_assoc($result);
        $output['success']=true;
        $output['product']=$row; 
    } else {
        $output['error']='Can\'t find product';
    }

    $query_for_ingredient = "SELECT 
    ingredient,
    gentle_rating,
    safety_rating,
    COALESCE(description,`About Info`) as details
    from
    
           (select `ingredient_name` AS ingredient,  case when `Rating` ='Average' then 3 when `Rating` = 'Best' then 1 when `Rating` = 'Good' then 2 ELSE 4 end as `gentle_rating`, `description` FROM `ingredient_rating` JOIN (SELECT ingredient_id FROM product_name JOIN product_ingredient_association_table ON product_name.product_id =product_ingredient_association_table.product_id
           WHERE product_name.product_id = $product_id
           GROUP BY 1) product ON product.ingredient_id=ingredient_rating.ingredient_id ) k
           
    left join 
    ewg_data on k.ingredient=`ewg_data`.`Name To Search`
    group by 1,2,3,4  
    ORDER BY `k`.`ingredient` ASC";
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