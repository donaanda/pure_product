<?php
require_once('./db_connect.php');
echo 'starting mission';
$query = "SELECT * FROM `product_ingredient_assoc_maker`";
$result=mysqli_query($db,$query);
$output=[];
$output['success']=false;
if(mysqli_num_rows($result)){
    $row=mysqli_fetch_assoc($result);
    $output['success']=true; 
    $output['products']=$row;
    $output['data'][]=$row;
    while($row=mysqli_fetch_assoc($result)){
        $output['data'][]=$row;
    };
} else {
    $output['error']='something went wrong';
}
$arrayOfArrayOfIngredients=[];
foreach($output['data']as$value){
    $arrayOfIngredients=[];
    $i=0;
    $wordToAdd='';
    while($i<strlen($value['ingredient_list'])){
        // if($i===0){
        //     array_push($arrayOfIngredients,$value['product_id']);
        // }
        $currLetter=substr($value['ingredient_list'],$i,1);
        if($currLetter===','){
            array_push($arrayOfIngredients,$wordToAdd);
            $wordToAdd='';
        }else if($i===strlen($value['ingredient_list'])-1){
            $wordToAdd=$wordToAdd.$currLetter;
            array_push($arrayOfIngredients,$wordToAdd);
            $wordToAdd='';
        }else{
            $wordToAdd=$wordToAdd.$currLetter;
        }
        $i++;
    }
    $arrayOfArrayOfIngredients[]=$arrayOfIngredients;
}
// print_r($arrayOfArrayOfIngredients);

//$query = "SELECT `ingredient_id` FROM `product_ingredient_association_table` WHERE ingredient_name = ";//this will probably be in the loop, figure it out

$query = "DELETE FROM `product_ingredient_association_table`";
mysqli_query($db,$query);
$x=1;
foreach($arrayOfArrayOfIngredients as $value){
    foreach($value as $innerValue){
        $query = "SELECT `ingredient_id` FROM `ingredient_rating` WHERE ingredient_name = '$innerValue'";
        $result=mysqli_query($db,$query);
        if(mysqli_num_rows($result)){
            $ingredientId=mysqli_fetch_assoc($result);
            // echo json_encode($ingredientId['ingredient_id']);
        }
        $query = "INSERT INTO `product_ingredient_association_table` (product_id,ingredient_id) value ($x,".$ingredientId['ingredient_id'].")";
        echo $query;
        mysqli_query($db,$query);
    }
    $x++;
}
echo 'mission complete';
// if(mysqli_num_rows($result)){
//     $row=mysqli_fetch_assoc($result);
//     $output['success']=true;
//     $output['products']=$row; 
// } else {
//     $output['error']='someshit didnt work';
// }
// print('json encoded: '+json_encode($output));
?>