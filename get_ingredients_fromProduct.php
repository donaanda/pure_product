<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<script>
</script>
<body>
</body>

<?php
require_once('./db_connect.php');
$search_input = 'Huda';
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
     WHERE product_name LIKE '%$search_input%'
     GROUP BY 1
) product ON product.ingredient_id=ingredient_rating.ingredient_id
GROUP BY 1,2,3,4";
//this page is to show ingredients per the product such
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
        $ingredientDB=$row[0];
        echo "<tr>";
        echo "<td> {$ingredientDB} </td>";
        echo "</tr>";
        //this is just for hanh's learning how to use html in PHP
        // with loops for a single column
    };
    echo "</table>";
} else { 
    $output['error']='Can\'t find product';
}
print(json_encode($output));
// print(json_encode($output['data'][1]['ingredient']));
//shows 1 ingredient at a time


?>
</html>
