<?php
require_once('./header.php');
require_once('./db_connect.php');
$search_input = 'Water';
$query = "SELECT 
`ingredient_name` AS ingredient, 
`safety_rating` AS safety, 
`gentle_rating` AS gentle,
`ingredient_detail` AS details  
FROM `ingredient_rating`
WHERE ingredient_name LIKE '%$search_input%' ";

$result=mysqli_query($db,$query);
$output=[];
$output['success']=false;
if(mysqli_num_rows($result)){
    $row=mysqli_fetch_assoc($result);
    $output['success']=true;
    $output['products']=$row; 
    
} else {
    $output['error']='Can\'t find product';
}
print(json_encode($output));
?>