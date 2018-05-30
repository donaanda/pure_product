<?php
require_once('./header.php');
$postdata = file_get_contents("php://input");
$request = json_decode($postdata); 
require_once('./db_connect.php');

// loop thru the string and find all ingredients
$stringOfIngreidents = $request->query;
// $stringOfIngreidents = 'Water, Dimethicone, Talc, Peg-10 Dimethicone, Trimethylsiloxysilicate, Polypropylene, Isododecane, Cetyl Peg/Ppg-10/1 Dimethicone, Nylon-12, Hdi/Trimethylol Hexyllactone Crosspolymer, Phenoxyethanol, Sodium Chloride, Hydrogen Dimethicone, Glycerin, Magnesium Sulfate, Sodium Dehydroacetate, Disteardimonium Hectorite, Aluminum Hydroxide, Methicone, Benzoic Acid, Dehydroacetic Acid, Propylene Carbonate, Ethylhexylglycerin, Parfum/Fragrance, Silica, Biosaccharide Gum-4, Ananas Sativus (Pineapple) Fruit Extract, Carica Papaya (Papaya) Fruit Extract, Paullinia Cupana Seed Extract, Potassium Sorbate, Sorbic Acid';
$arrayOfIngredients=[];
$indexOfLetter=0;
$wordToAdd='';
while($indexOfLetter < strlen($stringOfIngreidents)){
    $currentLetter = substr($stringOfIngreidents, $indexOfLetter, 1);
    if($currentLetter === ','){
        if(substr($wordToAdd,0,1) === ' '){
            $wordToAdd = substr($wordToAdd, 1, strlen($wordToAdd)-1);
        }
        if(substr($wordToAdd, strlen($wordToAdd)-1, 1) === ' '){
            $wordToAdd = substr($wordToAdd, 0, strlen($wordToAdd)-2);
        }
        array_push($arrayOfIngredients, $wordToAdd);
        $wordToAdd = '';
    } else if($indexOfLetter === strlen($stringOfIngreidents)-1){

        $wordToAdd = $wordToAdd.$currentLetter;
        array_push($arrayOfIngredients, $wordToAdd);
        $wordToAdd = '';
    }else{
        $wordToAdd = $wordToAdd.$currentLetter;
    }
    $indexOfLetter++;
}

$output = [];
foreach($arrayOfIngredients as $ingredientName){
    $search_input = $ingredientName; 
    $query = "SELECT 
    a.ingredient_name as ingredient, 
    a.safety_rating as safety_rating, 
    `Rating` AS gentle_rating, 
    COALESCE(details,description) as details 
    FROM (SELECT 
        safety_rating, 
        ingredient_id, 
        `name to search` as ingredient_name, 
        `About Info` as details 
        FROM ewg_data) a 
    JOIN ingredient_rating 
    ON ingredient_rating.ingredient_name = a.ingredient_name 
    WHERE ingredient_rating.ingredient_name = '$search_input'";

    $result=mysqli_query($db,$query);
    $ingredient = [];
    $ingredient['search'] = $ingredientName;
    $ingredient['success'] = false;
    if(mysqli_num_rows($result)){
        $ingredient['success'] = true;
        $row = mysqli_fetch_assoc($result);
        $ingredient['ingredient'] = $row['ingredient']; 
        $ingredient['safety_rating'] = $row['safety_rating'];
        $ingredient['gentle_rating'] = $row['gentle_rating'];
        $ingredient['details'] = $row['details'];
    } else {
        error_log(date('Y-m-d H:i:s')." error in query: $query ".mysqli_error($db));
        $ingredient['error']='Can\'t find product';
    }
    $output[] = $ingredient;
}
print(json_encode($output));
?>

