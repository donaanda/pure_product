<?php
require_once('./header.php');
require_once('./db_connect.php');
$product_id = 1;
$query = "SELECT  
        count(*) as count_of_rating,
        safety_rating as safety_rating,
        product_id
        from
        (SELECT
            ingredient,
            gentle_rating,
            case when safety_rating like  '%_%' and safety_rating != 10 then left(safety_rating,1)
            else safety_rating end as safety_rating,
	         product_id,
        COALESCE(
            description,
            `ewg_data`.`About Info`
        ) AS details
        FROM
            (
            SELECT
                `ingredient_name` AS ingredient,
                CASE WHEN `Rating` = 'Average' THEN 3 WHEN `Rating` = 'Best' THEN 1 WHEN `Rating` = 'Good' THEN 2 WHEN `Rating` = 'Poor' THEN 4
        END AS `gentle_rating`,
        Description,
        product_id 

        FROM
            `ingredient_rating`
        JOIN(
            SELECT
                ingredient_id,
                product_name.product_id as product_id
            FROM
                product_name
            JOIN product_ingredient_association_table ON product_name.product_id = product_ingredient_association_table.product_id
           
            GROUP BY
                1,2
        ) product
        ON
            product.ingredient_id = ingredient_rating.ingredient_id
        ) k
        LEFT JOIN ewg_data ON k.ingredient = `ewg_data`.`Name To Search`
        GROUP BY
            1,2,3,4,5
        ORDER BY
            `k`.`ingredient` ASC) tables
        where safety_rating is not null
        group by 2,3
        order by product_id asc,
        safety_rating asc";

$result=mysqli_query($db,$query);
$output=[
    'success'=>false,
    'data'=>[]
];
$output['success']=false;
if(mysqli_num_rows($result)>0){
    $output['success']=true;
    $count_Rating=[];
    $safety_Rating=[];
    $product_id=[];
    while($row=mysqli_fetch_array($result)){
        $output['data'][]=$row;
        $count_Rating[]=$row['count_of_rating'];
        $safety_Rating[]=$row['safety_rating'];
        $product_id[]=$row['product_id'];
    };
} else { 
    $output['error']='Can\'t find product';
}
$holder=0;
$counter=0;
$count_Rating_holder=[];
$safety_Rating_holder=[];
$combine_safety_rating=[];
$avRating=0;
$productIDHolderForQuery=0;
foreach($product_id as $value){
    //print_r('looping value: '.$value .'<br>');
    if($holder===0){
        $holder=$value;
        $productIDHolderForQuery=$value;
    }else if ($holder!==$value||$counter===sizeof($product_id)-1){
        if($counter===sizeof($product_id)-1){
        $count_Rating_holder[]=$count_Rating[$counter];
        $safety_Rating_holder[]=$safety_Rating[$counter];
        }
        for ($i=0;$i<10;$i++){
            for ($x=0; $x<sizeof($count_Rating_holder);$x++){
                if($safety_Rating_holder[$x]==$i+1){
                    $combine_safety_rating[]=$count_Rating_holder[$x];
                    $x=sizeof($count_Rating_holder)+1;
                    $x+=10;
                }else if($x===sizeof($count_Rating_holder)-1){
                    $combine_safety_rating[]=0;
                }
            }
        }
        if($combine_safety_rating[9]>0||$combine_safety_rating[8]>1||($combine_safety_rating[7]+$combine_safety_rating[6]>2&&$combine_safety_rating[7]>=1)){
            $avRating=10;
        }
        else if($combine_safety_rating[8]>0||$combine_safety_rating[7]==2||($combine_safety_rating[6]+$combine_safety_rating[6]>2&&$combine_safety_rating[5]>=1)){
            $avRating=9;
        }
        else if($combine_safety_rating[7]==1||$combine_safety_rating[6]==2||$combine_safety_rating[5]>=3){
            $avRating=8;
        }
        else if($combine_safety_rating[6]==1||$combine_safety_rating[5]==2){
            $avRating=7;
        }
        else if($combine_safety_rating[5]==1||$combine_safety_rating[4]>=3){
            $avRating=6;
        }
        else if($combine_safety_rating[4]==2||$combine_safety_rating[3]>=4){
            $avRating=5;
        }
        else if($combine_safety_rating[3]>=2){
            $avRating=4;
        }
        else if($combine_safety_rating[2]>=3||$combine_safety_rating[3]==1){
            $avRating=3;
        }
        else if($combine_safety_rating[2]<=2&&$combine_safety_rating[2]>0||$combine_safety_rating[1]>0){
            $avRating=2;
        }
        else if($combine_safety_rating[0]>0){
            $avRating=1;
        }else{
            $avRating=11;
        }
        echo 'Rating: ';
        echo $avRating;
        echo ' Product ID: ';
        echo $productIDHolderForQuery;
        echo '<br>';
        set_time_limit(30);
        $query = "UPDATE `product_name` SET `safety_avg_rating` = $avRating WHERE `product_id` = $productIDHolderForQuery";
        mysqli_query(mysqli_connect('localhost', 'root', 'root','pure_product',8889),$query);
        //avRating is the rating of the product for the query and productIDHolderForQuery is the id for the query
        $productIDHolderForQuery=$value;
        $combine_safety_rating=[];
        $holder=$value;
        $count_Rating_holder=[];
        $safety_Rating_holder=[];
    }
    if($holder===$value){
        $count_Rating_holder[]=$count_Rating[$counter];
        $safety_Rating_holder[]=$safety_Rating[$counter];
    }
    $counter++;
}
?>