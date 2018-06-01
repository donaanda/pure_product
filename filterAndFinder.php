<?php
require_once('./header.php');
$postdata = file_get_contents("php://input"); //to get axios call data
$request = json_decode($postdata); // decode json
require_once('./db_connect.php');
$output=[
    'success'=>false
];
$reqObject=$request->query;
foreach($reqObject as $key=>$value){
    $output['keys'][]=$key;
    $output['values'][]=$value;
}
//make loop for this with conditional for or
$ethics='cruelty_free = 1';//check if an or is needed, if theres both, use or for second for sure
$counter=0;//check if i have to do this
$retinolTracker=0;
foreach($output['keys'] as $values1){
    if($values1 === 'retinol'){
        $output['keys'][$counter]='vitamin A';
        $retinolTracker=$counter;
    }
    if($values1 === 'PEGs'){
        $output['keys'][$counter]='peg';
    }
    if($values1 === 'parabens'){
        $output['keys'][$counter]='paraben';
    }
    if($values1 === 'hyaluronic-acid'){
        $output['keys'][$counter]='hyaluronic acid';
    }
    if($values1 === 'l-ascorbic-acid'){
        $output['keys'][$counter]='ascorbic acid';
    }
    if($values1 === 'beta-hydroxy-acid'){
        $output['keys'][$counter]='beta hydroxy acid';
    }
    if($values1 === 'alpha-hydroxy-acid'){
        $output['keys'][$counter]='alpha hydroxy acid';
    }
    if($values1 === 'combination'){
        $output['keys'][$counter]='Combo';
    }
    if($values1 === 'normal'){
        $output['keys'][$counter]='Normal';
    }
    if($values1 === 'oily'){
        $output['keys'][$counter]='Oily';
    }
    if($values1 === 'sensitive'){
        $output['keys'][$counter]='Sensitive';
    }
    if($values1 === 'dry'){
        $output['keys'][$counter]='Dry';
    }
    if($values1 === 'cruelty_free'){
        $output['keys'][$counter]='Cruelty_Free';
    }
    if($values1 === 'Vegan'){
        $output['keys'][$counter]='Vegan';
    }
    $counter++;
}

// $query = "SELECT `product_id` FROM product_foundation_table WHERE ( dry=1 or oily =1) AND cruelty_free=1";
$skinType='';
$counter=0;
$helpFullBoolian=false;
foreach($output['keys'] as $values2) {
    if($counter===0&&(($values2==='Dry'||$values2==='Normal')||($values2==='Combo'||$values2==='Oily')||($values2==='Sensitive' || $values2==='Cruelty_Free'||$values2==='Vegan'))){
        $skinType="WHERE `$values2`=1 ";
        if(($values2==='dry'||$values2==='Normal'||$values2==='combination'||$values2==='Oily'||$values2==='Sensitive')&&$output['keys'][$counter+1]==='Cruelty_Free'||$output['keys'][$counter+1]==='Vegan'){
            $skinType="$skinType AND ";
            $helpFullBoolian=true;
        }
    }else if($values2==='dry'||$values2==='Normal'||$values2==='Combination'||$values2==='Oily'||$values2==='Sensitive'||$values2==='Cruelty_Free'||$values2==='Vegan'){
        if($helpFullBoolian){
            $skinType="$skinType `$values2`=1 ";
            $helpFullBoolian=false;
        }else{
            $skinType=$skinType." or `$values2`=1 ";
        }
        if(($values2==='dry'||$values2==='Normal'||$values2==='Combination'||$values2==='Oily'||$values2==='Sensitive')&&$output['keys'][$counter+1]==='Cruelty_Free'||$output['keys'][$counter+1]==='Vegan'){
            $skinType="$skinType AND ";
            $helpFullBoolian=true;
        }
    }
    $counter++;
}

if($counter>0){
    $query = "SELECT `product_id` FROM product_foundation_table $skinType";
    $result=mysqli_query($db,$query);
    $holder=[];
    if(mysqli_num_rows($result)>0){
        $output['success']=true;
        while($row=mysqli_fetch_array($result)){
            $holder[]=$row;
        };
    }
    $productIDsString='( ';
    $counter=0;
    foreach($holder as $values4){
        if($counter===0){
            $productIDsString=$productIDsString.$values4['product_id'];
            $counter++;
        }else{
            $productIDsString=$productIDsString.', '.$values4['product_id'];
        }
    }
    $notContain='';
    $counter=0;
    foreach($output['keys'] as $values2) {
        if($counter===0&&(($values2==='paraben'||$values2==='pthalates')||($values2==='triclosan'||$values2==='sodium lauryl sulfate')||($values2==='aminophenol' || $values2==='diaminobenzene')||($values2==='phenylenediamine'||$values2==='polyethylene')||($values2==='peg'||$values2==='coconut')||($values2==='retinol'&&$output['values'][$retinolTracker]==='excluded'))){
            $notContain="WHERE `ingredient_name` like '%$values2%' ";
            $counter++;
        }else if((($values2==='paraben'||$values2==='pthalates')||($values2==='triclosan'||$values2==='sodium lauryl sulfate')||($values2==='aminophenol' || $values2==='diaminobenzene')||($values2==='phenylenediamine'||$values2==='polyethylene')||($values2==='peg'||$values2==='coconut')||($values2==='retinol'&&$output['values'][$retinolTracker]==='excluded'))){
            $notContain=$notContain."or `ingredient_name` like '%$values2%' ";
        }
    }
    $productIDsString=$productIDsString.')';
}
$query="SELECT `product_id` from product_name where product_id not in ((SELECT `product_id` from (SELECT * FROM `ingredient_rating` $notContain)paula join `product_ingredient_association_table` on `product_ingredient_association_table`.`ingredient_id`=`paula`.`ingredient_id` group by 1)) and product_id in $productIDsString";

if($counter>0){
    $result=mysqli_query($db,$query);
    $holder=[];
    if(mysqli_num_rows($result)>0){
        $output['success']=true;
        while($row=mysqli_fetch_array($result)){
            $holder[]=$row;
        };
    }
    $productIDsString='( ';
    $counter=0;
    foreach($holder as $values4){
        if($counter===0){
            $productIDsString=$productIDsString.$values4['product_id'];
            $counter++;
        }else{
            $productIDsString=$productIDsString.', '.$values4['product_id'];
        }
    }
    $productIDsString=$productIDsString.')';
}

$query="SELECT `product_id` from `product_name` ";

$counter=0;
foreach($output['keys'] as $value){
    if($value==='banned'){
        $query=$query."where `product_id` not in (select `product_id` from (select `ingredient_rating`.`ingredient_id`, `ingredient_name`, restricted from `ingredient_rating` join `cosing_restricted` ";
        $query=$query."ON `ingredient_rating`.`ingredient_name` = `cosing_restricted`.`Chemical_name_inn` ORDER BY `restricted` DESC) a join `product_ingredient_association_table` on `product_ingredient_association_table`.`ingredient_id`=a.`ingredient_id` group by 1) ";
        $counter++;
    }
    if($value==='restricted'){
        $counter++;
    }
}

if($counter>1){
    $query=$query." and ";
}

foreach($output['keys'] as $value){
    if($value==='restricted'){
        $query=$query."`product_id` not in (SELECT `product_id` from (SELECT `ingredient_rating`.`ingredient_id`, `ingredient_name`, banned FROM `ingredient_rating` JOIN `cosing_banned` ON `ingredient_rating`.`ingredient_name` = ";
        $query=$query."`cosing_banned`.Chemical_name_inn ORDER BY `banned` DESC) a join `product_ingredient_association_table` on `product_ingredient_association_table`.`ingredient_id`=a.`ingredient_id` group by 1) ";
    }
}
if($counter>0){
    $query=$query."and product_id in $productIDsString";
    $result=mysqli_query($db,$query);
    $holder=[];
    if(mysqli_num_rows($result)>0){
        $output['success']=true;
        while($row=mysqli_fetch_array($result)){
            $holder[]=$row;
        };
    }
    $productIDsString='( ';
    $counter=0;
    foreach($holder as $values4){
        if($counter===0){
            $productIDsString=$productIDsString.$values4['product_id'];
            $counter++;
        }else{
            $productIDsString=$productIDsString.', '.$values4['product_id'];
        }
    }
    $productIDsString=$productIDsString.')';
}

$query="SELECT `product_id` FROM `ingredient_rating` join `product_ingredient_association_table` on `product_ingredient_association_table`.`ingredient_id`=`ingredient_rating`.`ingredient_id` ";

$counter=0;
foreach($output['keys'] as $value){
    if($counter===0){
        if(($value==='retinol'&&$output['values'][$retinolTracker]==='on')||($value==='hyaluronic acid'||$value==='ascorbic acid')||($value==='beta hydroxy acid'||$value==='alpha hydroxy acid')){
            $query=$query."where `ingredient_name` like '%$value%' ";
            $counter++;
        }
    }else if(($value==='retinol'&&$output['values'][$retinolTracker]==='on')||($value==='hyaluronic acid'||$value==='ascorbic acid')||($value==='beta hydroxy acid'||$value==='alpha hydroxy acid')){
        $query=$query."and `ingredient_name` like '%$value%' ";
    }
}

$query=$query."and `product_id` in $productIDsString group by 1";

if($counter>0){
    $result=mysqli_query($db,$query);
    $holder=[];
    if(mysqli_num_rows($result)>0){
        $output['success']=true;
        while($row=mysqli_fetch_array($result)){
            $holder[]=$row;
        };
    }
    $productIDsString='( ';
    $counter=0;
    foreach($holder as $values4){
        if($counter===0){
            $productIDsString=$productIDsString.$values4['product_id'];
            $counter++;
        }else{
            $productIDsString=$productIDsString.', '.$values4['product_id'];
        }
    }
    $productIDsString=$productIDsString.')';
}


$query="SELECT `product_id` from (SELECT `product_id`, `safety_avg_rating`, CASE WHEN `gentle_avg_rating` = 'Average' THEN 3 WHEN `gentle_avg_rating` = 'Best' THEN 1 ";
$query=$query."WHEN `gentle_avg_rating` = 'Good' THEN 2 WHEN `gentle_avg_rating` = 'Poor' THEN 4 end as `gentle_avg_rating` from `product_name` group by 1,2,3) average ";
$query=$query."where safety_avg_rating between ";

$safetyLow=1;
$safetyHigh=10;
$gentleLow=1;
$gentleHigh=4;

$counter=0;
foreach($output['keys'] as $value){
    if($value==='safety-low'){
        $safetyLow=$output['values'][$counter];
    }else if($value==='safety-high'){
        $safetyHigh=$output['values'][$counter];
    }else if($value==='gentle-low'){
        $gentleLow=$output['values'][$counter];
    }else if($value==='gentle-high'){
        $gentleHigh=$output['values'][$counter];
    }
    $counter++;
}
$query=$query."$safetyLow and $safetyHigh and `gentle_avg_rating` between $gentleLow and $gentleHigh and `product_id` in $productIDsString";

if($counter>0){
    $result=mysqli_query($db,$query);
    $holder=[];
    if(mysqli_num_rows($result)>0){
        $output['success']=true;
        while($row=mysqli_fetch_array($result)){
            $holder[]=$row;
        };
    }
    $productIDsString='( ';
    $counter=0;
    foreach($holder as $values4){
        if($counter===0){
            $productIDsString=$productIDsString.$values4['product_id'];
            $counter++;
        }else{
            $productIDsString=$productIDsString.', '.$values4['product_id'];
        }
    }
    $productIDsString=$productIDsString.')';
}

$counter=0;
$lowPrice=0;
$highPrice=99999;
foreach($output['keys'] as $value){
    if($value==='low-price'){
        $lowPrice=$output['values'][$counter];
    }else if($value==='high-price'){
        $highPrice=$output['values'][$counter];
    }
    $counter++;
}

$query="SELECT `product_id` FROM `product_foundation_table` where `price` between $lowPrice and $highPrice and product_id in $productIDsString";

if($counter>0){
    $result=mysqli_query($db,$query);
    $holder=[];
    if(mysqli_num_rows($result)>0){
        $output['success']=true;
        while($row=mysqli_fetch_array($result)){
            $holder[]=$row;
        };
    }
    $productIDsString='( ';
    $counter=0;
    foreach($holder as $values4){
        if($counter===0){
            $productIDsString=$productIDsString.$values4['product_id'];
            $counter++;
        }else{
            $productIDsString=$productIDsString.', '.$values4['product_id'];
        }
    }
    $productIDsString=$productIDsString.')';
}

$response=[];
foreach($holder as $value){
    $response[]=$value['product_id'];
}

print_r(json_encode($response));
?>