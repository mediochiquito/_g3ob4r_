<?php
header('Pragma: public');
header('Cache-Control: max-age=86400');
header('Expires: '. gmdate('D, d M Y H:i:s \G\M\T', time() + 86400));
ini_set('memory_limit', -1);
error_reporting( E_ALL ^ E_NOTICE );

//maximo
$fit = '800x800';

$array_uri = explode('/', $_SERVER['REQUEST_URI']);
$array_uri_reverse = array_reverse($array_uri);


$array_file_and_fit = explode('-', $array_uri_reverse[0]);


$get_fit = str_replace('.jpg', '', $array_file_and_fit[1]);


$file =dirname( dirname(__FILE__)) . '/img/'.$array_uri_reverse[1].'/' . $array_file_and_fit[0];

$fit = $get_fit; 
$tmp = explode('/', $file);
$nombre_archivo = end($tmp);



$array_fit = explode('x', $fit);
$fit_ancho = $array_fit[0];
$fit_alto = $array_fit[1];
if($fit_ancho>2000)  $fit_ancho=2000;
if($fit_alto>2000) $fit_alto=2000;

if(file_exists(dirname(__FILE__) . '/cache/' . ($fit_ancho . 'x' . $fit_alto) . '_' . $nombre_archivo . '.jpg')){
	
	header("Content-type: image/jpeg"); 
	echo file_get_contents(dirname(__FILE__) . '/cache/' . ($fit_ancho . 'x' . $fit_alto) . '_' . $nombre_archivo . '.jpg');
	exit;
}

$pathOrig = $file;
$dataOrig = getimagesize($pathOrig);
$anchoOrig = $dataOrig[0];
$altoOrig = $dataOrig[1];

if( ($anchoOrig/$altoOrig) > ($fit_ancho/$fit_alto) ) {

	// preferencia_ancho
	$nuevo_ancho = $fit_ancho;
	$nuevo_alto = ceil(($altoOrig*$fit_ancho)/$anchoOrig);

}else{

	// preferencia_alto
	$nuevo_alto = $fit_alto;
	$nuevo_ancho = ceil(($anchoOrig*$fit_alto)/$altoOrig);

}

if($dataOrig[2]==1) $img = imagecreatefromgif($pathOrig);
if($dataOrig[2]==2) $img = imagecreatefromjpeg($pathOrig);
if($dataOrig[2]==3){
	$img = imagecreatefrompng($pathOrig);
	imagealphablending($img, true);
	imagesavealpha($img, true);
}

$thumb = imagecreatetruecolor($nuevo_ancho, $nuevo_alto);

$fondo = imagecolorallocate($thumb, 255, 255, 255);
imagefilledrectangle($thumb, 0, 0, $nuevo_ancho, $nuevo_alto, $fondo);
imagecopyresampled($thumb, $img, 0, 0, 0, 0, $nuevo_ancho, $nuevo_alto, $anchoOrig, $altoOrig);

header("Content-type: image/jpeg"); 
imagejpeg($thumb, dirname(__FILE__) . '/cache/' . ($fit_ancho . 'x' . $fit_alto) . '_' . $nombre_archivo . '.jpg', 100);
imagejpeg($thumb, null, 100);
imagedestroy($thumb);

?>