<?php
header('Access-Control-Allow-Origin: *');
include 'init.php';


function random() {
 return mt_rand() / (mt_getrandmax() + 1);
}

$cat = array('Bar', 'Restaurante', 'Cine', 'Evento', 'Teatro');

$params = json_decode(file_get_contents('php://input'));

switch($_GET['method']){

	case 'init':
		
		guardar_device($params->uuid, $params->platform, $params->pushtoken, $params->u);
		die('1');
  		
  	break;

	case 'setPush':

		mysql_query ('UPDATE devices SET devices_activo='. mysql_real_escape_string($params->act) .' WHERE devices_puhstoken = "'. mysql_real_escape_string($params->token) .'" ;');
		
		$rs = mysql_query('SELECT devices_activo FROM devices WHERE 
										 			  devices_puhstoken = "' . mysql_real_escape_string($params->token) . '" LIMIT 1;');
		$row = mysql_fetch_object($rs);

		die($row->devices_activo);
  			
  	break;

	case 'setFav':

		$rs = mysql_query('SELECT favoritos_id FROM favoritos WHERE 
										 favoritos_lugares_id = ' . mysql_real_escape_string($params->poiId) . '
										 AND 
										 favoritos_ususarios_id  = ' . mysql_real_escape_string($params->userId) . '
										 LIMIT 1;');
		$row = mysql_fetch_object($rs);

		if(mysql_num_rows($rs)==1){
		
			// quito el favorito
			mysql_query('DELETE FROM favoritos WHERE 
										 favoritos_id = ' .$row->favoritos_id . ' LIMIT 1;');

			guardar_fav_static();
			//

			die('0');




		}else{

			mysql_query('INSERT IGNORE INTO favoritos SET  
										 favoritos_lugares_id = ' . mysql_real_escape_string($params->poiId) . '
										 ,
										 favoritos_ususarios_id  = ' . mysql_real_escape_string($params->userId) . '
										 ');
			guardar_fav_static();
			die('1');
		}

		break;
	
	case 'getAllUsuarios':


		$rs = mysql_query('SELECT * FROM usuarios  ORDER BY usuarios_id DESC');		
		while($row = mysql_fetch_object($rs)){
         
            $obj[] = $row;
        }

        echo json_encode($obj);
        exit;
		break;

  	case 'getAllEnvios':


  		$rs = mysql_query('SELECT * FROM envios  ORDER BY envios_id DESC');		
		while($row = mysql_fetch_object($rs)){
           
           	$rs_total = mysql_query('SELECT count(salida_id) as total FROM salida  WHERE salida_envios_id = ' . $row->envios_id);		 	
           	$row_total = mysql_fetch_object($rs_total);
            $row->total_envios = $row_total->total;

            $rs_enviado = mysql_query('SELECT count(salida_id) as total FROM salida  WHERE salida_enviado=1 AND salida_envios_id = ' . $row->envios_id);		 	
           	$row_enviado = mysql_fetch_object($rs_enviado);
            $row->total_enviados = $row_enviado->total;

            $obj[] = $row;
            
        }

        echo json_encode($obj);
  		break;


  	case 'saveEnvio':

  		if(mysql_query('INSERT INTO  envios SET 	
									 envios_titulo 	  = "' . mysql_real_escape_string($params->envios_titulo)  . '" ,
									 envios_desc 	  = "' . mysql_real_escape_string($params->envios_desc)  . '" ,
									 envios_poi_id     = "' . mysql_real_escape_string($params->envios_poi_id)  . '" 
								')){

			$id_envio =  mysql_insert_id();


			$rs_devices_a_enviar = mysql_query("SELECT MAX(devices_id) as devices_id FROM `devices`   
												WHERE `devices_usuarios_id`>0 AND devices_puhstoken !='' AND devices_activo=1 GROUP BY devices_uuid");
			
			while($row_a_enviar = mysql_fetch_object($rs_devices_a_enviar)){
	            mysql_query("INSERT INTO salida SET 

	            						salida_envios_id='" .	$id_envio   . "' ,
	            						salida_devices_id='" .	$row_a_enviar->devices_id . "';");
	        }

			echo $id_envio;
			exit;
		};

  	break;







	case 'saveUser':


		$rs = mysql_query('SELECT * FROM usuarios WHERE usuarios_uid ="' .  mysql_real_escape_string($params->uid) . '" AND usuarios_uid!=0 LIMIT 1');		
		$row = mysql_fetch_object($rs);
		$user_id = $row->usuarios_id;

		if(mysql_num_rows($rs)==0){

				if(mysql_query('INSERT INTO  usuarios SET 	

									usuarios_uid 	  = "' . mysql_real_escape_string($params->uid)  . '"   ,
									
									usuarios_nombre 	  = "' . mysql_real_escape_string($params->nombre)  . '" ,
									usuarios_apellido  = "' . mysql_real_escape_string($params->apellido)  . '"   ,
									usuarios_email  = "' . mysql_real_escape_string($params->email)  . '"   ,
									usuarios_ci  = "' . mysql_real_escape_string($params->ci)  . '"   ,
									usuarios_fecha_nac  = "' . mysql_real_escape_string($params->fehca_nac)  . '"   ,
									usuarios_sexo  = "' . mysql_real_escape_string($params->sexo)  . '"  

								'))	 {

										$user_id =  mysql_insert_id();
										
									};

		}
		
		guardar_device($params->uuid, $params->platform, $params->push_token, $user_id);
		echo $user_id;
		exit;
	
  	break;

	case 'uploadImgHome':

		$hash_file = md5(date('Ymdhis').$_SERVER['REMOTE_ADDR'].rand(0, 9999999999));
		$name = $_FILES["file"]["name"];		
		$extension = end(explode('.', $name));	
		$destino =dirname(__FILE__). "/img/home/$hash_file.$extension";

  		if(move_uploaded_file( $_FILES['file']['tmp_name'] , $destino )){
  	
			die($hash_file.'.'.$extension);
  		}
  		
  	break;
	case 'uploadImg':

		$hash_file = md5(date('Ymdhis').$_SERVER['REMOTE_ADDR'].rand(0,9999999999));
		$name = $_FILES["file"]["name"];		
		$extension = end(explode('.', $name));	
		$destino =dirname(__FILE__). "/img/pois/$hash_file.$extension";

  		if(move_uploaded_file( $_FILES['file']['tmp_name'] , $destino )){
			die($hash_file.'.'.$extension);
  		}
  		
  	break;

	
  	case 'delHomeImg':

		mysql_query ('UPDATE home SET home_eliminado=1 WHERE home_id = "'. mysql_real_escape_string($params->home_id) .'"');
		echo '1';
		return true;

 	break;


  	case 'delPoi':

		mysql_query ('UPDATE lugares SET lugares_eliminado=1 WHERE lugares_id = "'. mysql_real_escape_string($params->id) .'"');
		
		$sync = json_decode(file_get_contents('sync.txt'));
		$sync_eventos = $sync->eventos*1;
		$sync_lugares = $sync->lugares*1;
		if($params->tipo == 4){
			$sync_eventos++;
		}else{
			$sync_lugares++;
		}
		$s = new stdClass();
		$s->eventos = $sync_eventos;
		$s->lugares = $sync_lugares;
		file_put_contents('sync.txt', json_encode($s));

		return true;

 	break;



 	case 'saveImgHome':


	 	if($params->home_activo) $activo = 1;
	 	else  $activo = 0;

		if(isset($params->home_id)){

				mysql_query  ('UPDATE home SET 	

								home_img 	  = "' . mysql_real_escape_string($params->home_img)  . '"   ,
								home_activo 	  = "' . $activo . '" ,
								home_og_poi 	  = "' . mysql_real_escape_string($params->home_og_poi)  . '" 

								WHERE home_id = "'. $params->home_id .'" 
								 	
								');

				echo '1';
		}else{
				mysql_query ('INSERT INTO  home SET 	

									home_img 	  = "' . mysql_real_escape_string($params->home_img)  . '"   ,
									home_activo 	  = "' .$activo  . '"   ,
									home_og_poi 	  = "' . mysql_real_escape_string($params->home_og_poi)  . '" 
									

								');


				echo mysql_insert_id();
		}
		
  	break;


  	case 'savePoi':

	    $array_iniPub = explode('T', $params->siniPub);
	    $array_finPub = explode('T', $params->finPub);

		if(isset($params->id)){

				mysql_query ('UPDATE lugares SET 	

								lugares_pub_ini   = "' . mysql_real_escape_string($array_iniPub[0]) . '",  
								lugares_pub_fin   = "' . mysql_real_escape_string($array_finPub[0]) . '", 
								lugares_tipo  	  = "' . mysql_real_escape_string($params->tipo) . '",
								lugares_nombre 	  = "' . mysql_real_escape_string($params->name) . '",
								lugares_tel		  = "' . mysql_real_escape_string($params->tel) . '",
								lugares_dir 	  = "' . mysql_real_escape_string($params->dir) . '",
								lugares_long_desc = "' . mysql_real_escape_string($params->desc) . '",
								lugares_lat 	  = "' . mysql_real_escape_string($params->lat) . '",
								lugares_lng 	  = "' . mysql_real_escape_string($params->lon) . '",
								lugares_alt 	  = "' . mysql_real_escape_string($params->alt)  . '" ,
								lugares_imgs 	  = "' . mysql_real_escape_string(json_encode($params->imgs))  . '"   ,
								lugares_thumb 	  = "' . mysql_real_escape_string($params->thumb)  . '"   ,
								lugares_activo 	  = "' . mysql_real_escape_string($params->activo)  . '"   ,
								lugares_fb 	  	  = "' . mysql_real_escape_string($params->fb)  . '"   ,
								lugares_site 	  = "' . mysql_real_escape_string($params->site)  . '"   

								WHERE lugares_id = "'. $params->id .'" 
									
								');

		}else{

					mysql_query ('INSERT INTO  lugares SET 	

								lugares_pub_ini   = "' . mysql_real_escape_string($array_iniPub[0]) . '",  
								lugares_pub_fin   = "' . mysql_real_escape_string($array_finPub[0]) . '", 
								lugares_tipo  	  = "' . mysql_real_escape_string($params->tipo) . '",
								lugares_nombre 	  = "' . mysql_real_escape_string($params->name) . '",
								lugares_tel		  = "' . mysql_real_escape_string($params->tel) . '",
								lugares_dir 	  = "' . mysql_real_escape_string($params->dir) . '",
								lugares_long_desc = "' . mysql_real_escape_string($params->desc) . '",
								lugares_lat 	  = "' . mysql_real_escape_string($params->lat) . '",
								lugares_lng 	  = "' . mysql_real_escape_string($params->lon) . '",
								lugares_alt 	  = "' . mysql_real_escape_string($params->alt)  . '" ,
								lugares_imgs 	  = "' . mysql_real_escape_string(json_encode($params->imgs))  . '"  ,
								lugares_thumb 	  = "' . mysql_real_escape_string($params->thumb)  . '"   ,
								lugares_activo 	  = "' . mysql_real_escape_string($params->activo)  . '"  ,
								lugares_fb 	  	  = "' . mysql_real_escape_string($params->fb)  . '"   ,
								lugares_site 	  = "' . mysql_real_escape_string($params->site)  . '"     

								');


					echo mysql_insert_id();



		}
		
		$sync = json_decode(file_get_contents('sync.txt'));
		$sync_eventos = $sync->eventos*1;
		$sync_lugares = $sync->lugares*1;
		if($params->tipo == 4){
			$sync_eventos++;
		}else{
			$sync_lugares++;
		}
		$s = new stdClass();
		$s->eventos = $sync_eventos;
		$s->lugares = $sync_lugares;
		file_put_contents('sync.txt', json_encode($s));

  	break;
	
	case 'getHomeImagesApp':

		$rs = mysql_query('SELECT * FROM home WHERE home_eliminado = 0 AND home_activo=1   ORDER BY home_id DESC');		

		while($row = mysql_fetch_object($rs)){
            $obj[] = $row;
        }

        echo json_encode($obj);
		break;

	case 'getHomeImages':

		$rs = mysql_query('SELECT * FROM home WHERE home_eliminado = 0 ORDER BY home_id DESC');		

		while($row = mysql_fetch_object($rs)){

            $obj[] = $row;
          	
        }

        echo json_encode($obj);
		break;

	case 'getListaAllPois':

		$sql = 'SELECT * FROM lugares  WHERE lugares_eliminado = 0 ORDER BY lugares_nombre ASC';		
		$rs = mysql_query($sql);
		$bucle = 0;
	
		while($row = mysql_fetch_object($rs)){
			
			$o = new stdClass();
			$o->id = $row->lugares_id;
			$o->tipo = $row->lugares_tipo;
			$o->cat = $cat[$row->lugares_tipo-1];
			$o->name = $row->lugares_nombre ;
			$o->tel = $row->lugares_tel;
			$o->dir = $row->lugares_dir;
			$o->lat = $row->lugares_lat;
			$o->lon = $row->lugares_lng;
			$o->alt = $row->lugares_alt;
			$o->desc = $row->lugares_long_desc;
			$o->pub_ini = $row->lugares_pub_ini;
			$o->pub_fin = $row->lugares_pub_fin;
			$o->thumb = $row->lugares_thumb;
			$o->eliminado = $row->lugares_eliminado;
			$o->activo = $row->lugares_activo;
			$o->fb = $row->lugares_fb;
			$o->site = $row->lugares_site;
			$o->imgs = json_decode($row->lugares_imgs);
		
			$array[] = $o;
			
		}

		echo json_encode($array);
		
		
	break;





	case 'getLista':
		
		switch($_GET['data']){

			case 'lugares':
				$sql = 'SELECT * FROM lugares WHERE lugares_eliminado=0 AND lugares_activo=1  AND  lugares_tipo != 4 ORDER BY lugares_nombre ASC';
				break;
			case 'eventos':
				$sql = 'SELECT * FROM lugares WHERE lugares_eliminado=0 AND lugares_activo=1  AND lugares_tipo = 4 and lugares_pub_fin>=NOW()  ORDER BY lugares_nombre ASC';
				break;
			case 'lugareseventos':
				$sql = 'SELECT * FROM lugares WHERE lugares_eliminado=0 AND lugares_activo=1  ORDER BY lugares_nombre ASC';
				break;
		}
		
		$rs = mysql_query($sql);
		$bucle = 0;

		$array = new stdClass();


		while($row = mysql_fetch_object($rs)){
			

			if($row->lugares_tipo == 4){

				//for($i =0; $i<50; $i++){
					$o = new stdClass();
					$o->id = $row->lugares_id;
					$o->tipo = $row->lugares_tipo;
					$o->cat = $cat[$row->lugares_tipo-1];
					$o->name = $row->lugares_nombre;
					$o->tel = $row->lugares_tel;
					$o->dir = $row->lugares_dir;
					$o->lat = $row->lugares_lat;
					$o->lon = $row->lugares_lng;
					$o->alt = $row->lugares_alt;
					$o->pub_ini = $row->lugares_pub_ini;
					$o->pub_fin = $row->lugares_pub_fin;
					$o->thumb = $row->lugares_thumb;
					
			
					$array->eventos[] = $o;
				//}
				//shuffle($array->eventos);
		
			}else{

				//for($i =0; $i<50; $i++){
					
					$o = new stdClass();
					$o->id = $row->lugares_id;
					$o->tipo = $row->lugares_tipo;
					$o->cat = $cat[$row->lugares_tipo-1];
					$o->name = $row->lugares_nombre;
					$o->tel = $row->lugares_tel;
					$o->dir = $row->lugares_dir;
					/*$o->lat = (float)$row->lugares_lat + (random()*0.098);
					$o->lon = (float)$row->lugares_lng - (random()*0.098);*/
					$o->lat = $row->lugares_lat;
					$o->lon = $row->lugares_lng;
					$o->alt = $row->lugares_alt;
					$o->thumb = $row->lugares_thumb;
					
			
					$array->lugares[] = $o;
				//}

				
			}

		}

	
		
		echo json_encode($array);
		break;


		
	case 'getDetalle':
		
		$rs_favs = mysql_query('SELECT count(favoritos_id) as total FROM favoritos WHERE 
									  favoritos_lugares_id = ' . mysql_real_escape_string($_GET['id']) . ';');
		$row_favs = mysql_fetch_object($rs_favs);

		$rs_mi_fav = mysql_query('SELECT favoritos_id FROM favoritos WHERE 
										 favoritos_lugares_id = ' . mysql_real_escape_string($_GET['id']) . '
										 AND 
										 favoritos_ususarios_id  = ' . mysql_real_escape_string($_GET['uid']) . '
										 LIMIT 1;');
		


		$rs = mysql_query('SELECT * FROM lugares WHERE lugares_id=' .  mysql_real_escape_string($_GET['id']));
		$row = mysql_fetch_object($rs);
		$obj = new stdClass();

		$obj->favs = $row_favs->total;
		$obj->mi_fav = mysql_num_rows($rs_mi_fav);

		$obj->long_desc = $row->lugares_long_desc;
		$obj->fotos = json_decode($row->lugares_imgs);

		$obj->id = $row->lugares_id;
		$obj->tipo = $row->lugares_tipo;
		$obj->cat = $cat[$row->lugares_tipo-1];
		$obj->name = $row->lugares_nombre;
		$obj->tel = $row->lugares_tel;
		$obj->dir = $row->lugares_dir;

		$obj->lat = $row->lugares_lat;
		$obj->lon = $row->lugares_lng;
		$obj->alt = $row->lugares_alt;

		$obj->fb = 	 $row->lugares_fb;
		$obj->site = $row->lugares_site;

		echo json_encode($obj);
		break;



	
}



function guardar_fav_static(){

	$rs =  mysql_query('SELECT favoritos_lugares_id, count(*) as total FROM `favoritos` GROUP BY favoritos_lugares_id');
	$array_favs = array();
	while($row = mysql_fetch_object($rs)){
		$array_favs['p_' . $row->favoritos_lugares_id] = $row->total;
	}
	file_put_contents('favs', json_encode($array_favs));

}



// FUNC

function guardar_device($uuid, $platform, $push_token=NULL, $user_id=0){

		
		$rs = mysql_query('SELECT * FROM devices WHERE devices_uuid="' .  mysql_real_escape_string($uuid) . '" LIMIT 1');
		$row_device = mysql_fetch_object($rs);
		
		$set = ' devices_uuid = "' .  mysql_real_escape_string($uuid) . '", ';
		$set .= ' devices_platform = "' .  mysql_real_escape_string($platform) . '" ';
						
		if($push_token != NULL){
			$set .= ', devices_puhstoken = "' .  mysql_real_escape_string($push_token) . '"  ';
		}
		
		if($user_id != 0){
			$set .= ', devices_usuarios_id = "' .  mysql_real_escape_string($user_id) . '"  ';
		}

		if(mysql_num_rows($rs)>0){


				mysql_query  ('UPDATE devices SET '.$set.' WHERE devices_id = "'. $row_device->devices_id .'"');
				return $row_device->devices_id;
		}else{	

				mysql_query ('INSERT INTO  devices SET 	'.$set.' ;');
				return  mysql_insert_id();
		}


}
