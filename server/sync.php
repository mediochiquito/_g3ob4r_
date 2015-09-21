<?php
header('Access-Control-Allow-Origin: *');

$json = array();
$json['pois'] = json_decode(file_get_contents('sync.txt'));
$json['favs'] = json_decode(file_get_contents('favs'));

echo json_encode($json);
?>