<?php
header("Access-Control-Allow-Origin: *", "Access-Control-Allow-Headers: *");
require_once('./db_connect.php');

echo 'starting mission';
echo '<br>';

$query = "SELECT `ingredient_id`, `synonyms_list` FROM `ewg_maker`";
$result=mysqli_query($db,$query);
$output['success']=false;
if(mysqli_num_rows($result)){
    $output['success']=true; 
    while($row=mysqli_fetch_assoc($result)){
        $output['data'][]=$row;
    };
} else {
    $output['error']='something went wrong';
}

$allIngredientsSynonymArr=[];
foreach($output['data']as$currIngredient){
    $arrayOfSynonyms=[];
    $wordToAdd='';
    for($i=0;$i<strlen($currIngredient['synonyms_list']);$i++){
        $currLetter=substr($currIngredient['synonyms_list'],$i,1);
        if($currLetter===';'){
            if(substr($wordToAdd,0,1)===' '){
                $wordToAdd=substr($wordToAdd,1,strlen($wordToAdd)-1);
            }
            if(substr($wordToAdd,strlen($wordToAdd)-1,1)===' '){
                $wordToAdd=substr($wordToAdd,0,strlen($wordToAdd)-2);
            }
            array_push($arrayOfSynonyms,$wordToAdd);
            $wordToAdd='';
        }else if($i===strlen($currIngredient['synonyms_list'])-1){

            $wordToAdd=$wordToAdd.$currLetter;
            array_push($arrayOfSynonyms,$wordToAdd);
            $wordToAdd='';
        }else{
            $wordToAdd=$wordToAdd.$currLetter;
        }
    }
    $allIngredientsSynonymArr[]=$arrayOfSynonyms;
}

$query = 'DELETE FROM `ingredient_synonym`';
mysqli_query($db,$query);

$query = 'ALTER TABLE `ingredient_synonym` AUTO_INCREMENT = 1';
mysqli_query($db,$query);

foreach($allIngredientsSynonymArr as $synonymArray){
    foreach($synonymArray as $synonym){
        $query = "INSERT INTO `ingredient_synonym` (synonym) value ('$synonym')";
        mysqli_query($db,$query);
    }
}
//fix this shit
foreach($allIngredientsSynonymArr as $synonymArray){
    foreach($synonymArray as $synonym){
        $query = "SELECT `ingredient_id` FROM `ewg_maker` WHERE `synonyms_list` LIKE '%$synonym%'";
        $result = mysqli_query($db,$query);
        if(mysqli_num_rows($result)){
            $ingredientID = mysqli_fetch_assoc($result)['ingredient_id'];
        } else {
            $ingredientID = 0;
        }

        $query = "SELECT `synonym_id` FROM `ingredient_synonym` WHERE `synonym` LIKE '%$synonym%'";
        $result = mysqli_query($db,$query);
        if(mysqli_num_rows($result)){
            $synonymID = mysqli_fetch_assoc($result)['synonym_id'];
        } else{
            $synonymID = 0;
        }

        echo $ingredientID;
        echo $synonymID;
        $query = "INSERT INTO `ewg_assoc_table` (ingredient_id,synonym_id) value ($ingredientID,'$synonymID')";
        mysqli_query($db,$query);
    }
}

$query = "SELECT * FROM `ingredient_synonym`";
$result = mysqli_query($db,$query);
if(mysqli_num_rows($result)){
    while($synonymInfo = mysqli_fetch_assoc($result)){
        $synonym = $synonymInfo['synonym'];
        $query = "SELECT `ingredient_id` FROM `ewg_maker` WHERE `synonyms_list` LIKE '%$synonym%'";
        $result = mysqli_query($db,$query);
        $ingredientID = mysqli_fetch_assoc($result)['ingredient_id'];
        $synonymID = $synonymInfo['synonym_id'];

        echo $ingredientID;
        echo $synonymID;
        $query = "INSERT INTO `ewg_assoc_table` (ingredient_id,synonym_id) value ($ingredientID,'$synonymID')";
        mysqli_query($db,$query);
    }
} 


//migration files
echo '<br>';
echo 'mission complete';
?>