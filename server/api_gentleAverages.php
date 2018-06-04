<?php
require_once('./header.php');
require_once('./db_connect.php');
$query="SELECT (case when gentle_rating >=2.5 and gentle_rating<=4 then 'Poor'
when gentle_rating >=2.1 and gentle_rating<2.5 then 'Average'
when gentle_rating >=1.8 and gentle_rating<2.1 then 'Good'
when gentle_rating <1.8 then 'Best'
end) as gentle_rating, product_id
FROM (
  SELECT AVG(asd.gentle_rating) AS gentle_rating, asd.product_id AS product_id
  FROM (
    SELECT (
        CASE
        	WHEN `Rating` = 'Best' THEN 1.0
        	WHEN `Rating` = 'Good' THEN 2.0
        	WHEN `Rating` = 'Average' THEN 3.0
        	WHEN `Rating` = 'Poor' THEN 4.0
  		END
    ) AS `gentle_rating`, product_name.product_id
	FROM `ingredient_rating`
    JOIN product_ingredient_association_table ON ingredient_rating.ingredient_id = product_ingredient_association_table.ingredient_id
    JOIN product_name ON product_ingredient_association_table.product_id = product_name.product_id
	WHERE product_name.categories != 'added ingredient'
    AND ingredient_rating.Rating IN ('Best', 'Good', 'Average', 'Poor')
	ORDER BY product_name.product_id
  ) AS asd
  GROUP BY asd.product_id
  ORDER BY asd.product_id ASC
) AS main
ORDER BY main.product_id ASC";
$result=mysqli_query($db,$query);
$output=[
    'success'=>false,
    'data'=>[]
];
$output['success']=false;
if(mysqli_num_rows($result)>0){
    $output['success']=true;
    while($row=mysqli_fetch_array($result)){
        $output['data'][]=$row;
    };
} else { 
    $output['error']='Can\'t find product';
}
foreach($output['data']as$value){
    $productID=$value['product_id'];
    $rating=$value['gentle_rating'];
    $query = "UPDATE `product_name` SET `gentle_avg_rating` = '$rating' WHERE `product_id` = $productID";
    mysqli_query(mysqli_connect('localhost', 'root', 'root','pure_product',8889),$query);
}
?>