<?php
include "init.php";
error_reporting(E_ALL);

include "class.Push.php";

/*if(!isset($_GET['send'])){
	//header("Location: );

	echo "<script>document.location.href = 'send_push.php?send=1&id=" . $_GET['id'] . "'</script>";
	exit;
}*/

$rs_enviar = mysql_query("SELECT * FROM salida 

  INNER JOIN devices ON devices_id = salida_devices_id 	
  INNER JOIN envios ON envios_id = salida_envios_id 	

  INNER JOIN usuarios ON usuarios_id = devices_usuarios_id  	

  WHERE salida_envios_id = '" . $_GET['id'] . "' AND salida_enviado = 0;");

  echo '<pre>';
  echo "

  TOTAL A ENVIAR: " . mysql_num_rows($rs_enviar) . " notificaciones.

  ";

  

$p = new Push();
//$p->enviar_push_ios('2842f7860c6d8b8e1229c2a7a462e6a70cf1dc314c264887c40b5addd29df11c', 'Titulo',  'Desc desc', 0, 0, 2);
//
$bulce = 1;
while($row_enviar = mysql_fetch_object($rs_enviar)){

	
		if( mysql_query("UPDATE salida SET salida_enviado=1 WHERE salida_id = '" . $row_enviar->salida_id . "' LIMIT 1;") ){


			if($row_enviar->devices_platform == "Android"){
				
				$p->enviar_push_android( $row_enviar->devices_puhstoken, 
									 $row_enviar->envios_titulo, 
									 $row_enviar->envios_desc,
									 $row_enviar->envios_poi_id);

			}else{
				
				$p->enviar_push_ios( $row_enviar->devices_puhstoken, 
									 $row_enviar->envios_titulo, 
									 $row_enviar->envios_desc,
									 $row_enviar->envios_poi_id);

			}

echo $bulce . ". enviado a: " .  $row_enviar->usuarios_nombre . " ".   $row_enviar->usuarios_menestrina . " (" . $row_enviar->devices_platform . ") 
				";
			$bulce++;





	}

}

echo '</pre>';
?>