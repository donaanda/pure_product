<?php
header("Access-Control-Allow-Origin: *", "Access-Control-Allow-Headers: *");
require_once('./db_connect.php');
$category = 'foundation';
$query = "SELECT 
`product_name`,
`brand`,
`detail`,
`img_src`,
`size`,
`rating`
FROM `product_name`
WHERE `categories` LIKE '%$category%'
GROUP BY 1,2,3,4,5,6
";
$result=mysqli_query($db,$query);

$output=[
    'success'=>false,
    'data'=>[]
];
$output['success']=false;

if(mysqli_num_rows($result)>0){
    $row=mysqli_fetch_assoc($result);
    $output['success']=true;
    $output['data'][]=$row;
    while($row=mysqli_fetch_assoc($result)){
        $output['data'][]=$row;
    };
    
} else {
    $output['error']='Can\'t find product';
}

print(json_encode($output));
?>