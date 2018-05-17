<?php
require_once('./db_connect.php');
echo 'starting mission ';
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
            if(substr($wordToAdd,0,1)===' '){
                $wordToAdd=substr($wordToAdd,1,strlen($wordToAdd)-1);
            }
            if(substr($wordToAdd,strlen($wordToAdd)-1,1)===' '){
                $wordToAdd=substr($wordToAdd,0,strlen($wordToAdd)-2);
            }
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
//echo 'ingredients: ';
//print_r($arrayOfArrayOfIngredients);

//$query = "SELECT `ingredient_id` FROM `product_ingredient_association_table` WHERE ingredient_name = ";//this will probably be in the loop, figure it out

$query = "DELETE FROM `product_ingredient_association_table`";
mysqli_query($db,$query);
$ingredientIdNum=1716;
$x=1;
$y=1;
deleteMissingIngs($db);
foreach($arrayOfArrayOfIngredients as $value){
    foreach($value as $innerValue){//innerValue will be each ingredient within its product in string form
        $innerValue=addslashes($innerValue);
        $query = "SELECT `ingredient_id` FROM `ingredient_rating` WHERE ingredient_name = '$innerValue'";
        $result=mysqli_query($db,$query);
        if(mysqli_num_rows($result)){
            $ingredientId=mysqli_fetch_assoc($result);
        }else{
            $query = "INSERT INTO `ingredient_rating` (ingredient_id, ingredient_name, Description) value ($ingredientIdNum,'$innerValue','added ingredient')";
            echo $query;
            mysqli_query($db,$query);
            $ingredientIdNum++;
            $ingredientId['ingredient_id']=$ingredientIdNum;
        }
        $query = "INSERT INTO `product_ingredient_association_table` (product_id,ingredient_id) value ($x,".$ingredientId['ingredient_id'].")";
        mysqli_query($db,$query);
        $y++;
    }
    $x++;
}
echo 'mission complete';

function deleteMissingIngs($db){
    $query = "DELETE FROM `ingredient_rating` WHERE `ingredient_id` >= 1716";
    mysqli_query($db,$query);
}
// function insertMissingIngRow($ingredientName, $db){
//     $query = "INSERT INTO `ingredient_rating` (ingredient_name, Description) value ($ingredientName,'added ingredient')";
//     mysqli_query($db,$query);
//     global $ingredientIdNum;
//     $ingredientIdNum++;
// }
?>