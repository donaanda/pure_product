<?php
header("Access-Control-Allow-Origin: *", "Access-Control-Allow-Headers: *");
require_once('./migration_connect.php');
echo 'starting mission ';
$query = "SELECT `ingredient_id`, `Synonym Info` FROM `ewg_data`";
$result=mysqli_query($db,$query);
$output['success']=false;
if(mysqli_num_rows($result)){
    $output['success']=true; 
    while($row=mysqli_fetch_assoc($result)){
        $output['data'][]=$row;
    };
    $query = 'DELETE FROM `ewg_maker`';
    mysqli_query($db,$query);
    foreach($output['data']as$product){
        set_time_limit ( 30 );
        $product['Synonym Info']=addslashes($product['Synonym Info']);
        $query = "INSERT INTO `ewg_maker`(ingredient_id,synonyms_list) value (".$product['ingredient_id'].",'".$product['Synonym Info']."')";
        mysqli_query($db,$query);
    }
    $query='ALTER TABLE `ewg_data` DROP COLUMN `Synonym Info`';
    mysqli_query($db,$query);
} else {
    echo 'DID YOU TALK TO OMER?!?!?!?!?!??!?!?!';
    $output['error']='something went wrong';
}
echo "<br>";
echo 'mission complete';
?>