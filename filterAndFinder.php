<?php
require_once('./header.php');
$postdata = file_get_contents("php://input"); //to get axios call data
$request = json_decode($postdata); // decode json
require_once('./db_connect.php');
//$product_id = $request->id; 
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
foreach($output['keys'] as $values1){
    if($values1 === 'retinol'){
        $output['keys'][$counter]='vitamin A';
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

$query = "SELECT `product_id` FROM product_foundation_table $skinType";
$result=mysqli_query($db,$query);
$holder=[];
if(mysqli_num_rows($result)>0){
    $output['success']=true;
    while($row=mysqli_fetch_array($result)){
        $holder[]=$row;
    };
}
// select product_id from product_name where product_id not in 
// ((select product_id from (SELECT * FROM `ingredient_rating` WHERE ingredient_name like '%peg%')
// paula join product_ingredient_association_table on 
// product_ingredient_association_table.ingredient_id=paula.ingredient_id 
// group by 1)) and product_id in 
// (1,2,3,4,5,6,7,8)
$productIDsString='(';
$counter=0;
foreach($holder as $values4){
    if($counter===0){
        $productIDsString=$productIDsString.$values4['product_id'];
        $counter++;
    }else{
        $productIDsString=$productIDsString.','.$values4['product_id'];
    }
}
$productIDsString=$productIDsString.')';
$query="SELECT `product_id` from `product_name` where `product_id` not in ((SELECT product_id from (SELECT * FROM `ingredient_rating` WHERE ingredient_name like";
?>