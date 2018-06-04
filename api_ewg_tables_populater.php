<?php
header("Access-Control-Allow-Origin: *", "Access-Control-Allow-Headers: *");
require_once('./migration_connect.php');

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
        if($currLetter===','){
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

$query = 'DELETE FROM `synonyms`';
mysqli_query($db,$query);

$query = 'ALTER TABLE `synonyms` AUTO_INCREMENT = 1';
mysqli_query($db,$query);

//populates synonyms table
foreach($allIngredientsSynonymArr as $synonymArray){
    foreach($synonymArray as $synonym){
        set_time_limit ( 30 );
        $synholder=addslashes($synonym);
        $query = "INSERT INTO `synonyms` (synonym) value ('$synholder')";
        mysqli_query($db,$query);
    }
}

$query = "DELETE FROM `ewg_assoc_table`";
mysqli_query($db,$query);

//populates assoc table
foreach($allIngredientsSynonymArr as $synonymArray){
    foreach($synonymArray as $synonym){
        $synholder=addslashes($synonym);
        $ingredientIDs=[];
        $query = "SELECT `ingredient_id` FROM `ewg_maker` WHERE `synonyms_list` LIKE '%$synholder%'";
        set_time_limit ( 30 );
        $result = mysqli_query($db,$query);
        if(mysqli_num_rows($result)){
            while($ingredientID = mysqli_fetch_assoc($result)['ingredient_id']){
                $ingredientIDs[]=$ingredientID;
            }
        } else {
            $ingredientID = 0;
        }

        $query = "SELECT `synonym_id` FROM `synonyms` WHERE `synonym` LIKE '%$synholder%'";
        set_time_limit ( 30 );
        $result = mysqli_query($db,$query);
        if(mysqli_num_rows($result)){
            $synonymID = mysqli_fetch_assoc($result)['synonym_id'];
        } else{
            $synonymID = 0;
        }

        foreach($ingredientIDs as $ingID){
            $query = "INSERT INTO `ewg_assoc_table` (ingredient_id,synonym_id) value ($ingID,$synonymID)";
            set_time_limit ( 30 );
            mysqli_query($db,$query);
        }
    }
}

echo '<br>';
echo 'mission complete';
?>