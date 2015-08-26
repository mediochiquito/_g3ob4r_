<?php
ini_set('memory_limit', -1);
error_reporting(0);
$file = dirname( dirname(__FILE__)) . '/img/' . $_GET['file']; 
$fit = $_GET['fit']; 
$nombre_archivo = end(explode('/', $file));

if(!isset($_GET['fit'])) $fit = '800x800';

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
imagejpeg($thumb, dirname(__FILE__) . '/cache/' . ($fit_ancho . 'x' . $fit_alto) . '_' . $nombre_archivo . '.jpg');
imagejpeg($thumb);
imagedestroy($thumb);

?>