
<?php
error_reporting(E_ALL);
ini_set('display_errors', '0');


//refinement-values-list
$handler = curl_init();
curl_setopt($handler, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($handler, CURLOPT_SSL_VERIFYPEER, false); 
curl_setopt($handler, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.6) Gecko/20070725 Firefox/2.0.0.6");
curl_setopt($handler, CURLOPT_FOLLOWLOCATION, true); 

//curl_setopt($handler, CURLOPT_HEADERFUNCTION, 'read_header');


//print("**$page**");
$baseAddress = 'https://www.paulaschoice.com/ingredient-dictionary?crefn1=name-first-letter&amp;crefv1=';
$linkArray = ['1','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
$entryArray= [];
forEach($linkArray as $letter){
	$url = $baseAddress . $letter;

	curl_setopt($handler, CURLOPT_URL, $url); 
	$page=curl_exec($handler);
	$pageLength = strlen($page);
	$currentSpot = 0;
	do{
		$start = strpos($page, '<tr class="ingredient-result">', $currentSpot);
		$end = strpos($page, '</tr>', $start+1);
		$entry = substr($page, $start, $end-$start);
		$data = [];
		preg_match('/col-rating ingredient-rating rating-.*"\>([a-zA-Z]*)\</', $entry,$data);
		$rating = $data[1];
		preg_match('/href="(.*)"/', $entry, $data);
		$ingredientURL = $data[1];
		preg_match('/ingredient-name">\s*<a href.*">(.*)<\/a>/', $entry, $data);
		$ingredientName = $data[1];
		preg_match('/Categories:\s*<a href="(.*)">(.*)<\/a>/', $entry, $data);
		$categoryURL = $data[1];
		$categoryName = $data[2];
		$currentSpot = $end+5;
		$entryData = [
			'rating'=>$rating, 
			'ingredientURL'=>$ingredientURL, 
			'ingredientName'=>$ingredientName, 
			'categoryURL'=>$categoryURL, 
			'categoryName'=>$categoryName
		];
		$entryArray[]=$entryData;
	}while($currentSpot < $pageLength && $start!==false);
	print(json_encode($entryArray));
	exit();
}
?>
