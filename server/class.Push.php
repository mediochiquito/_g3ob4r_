<?
class Push{

	//ANDROID
	var $apiKey = "AIzaSyDnILfy4BxZ9u-cnXaEqWOTdBxQDnqW3Ko";

	
	// IOS
	var $apns;
	var $apns_url = 'gateway.push.apple.com';
	var $apns_cert = 'CertificadosPush.pem';
	var $apns_port = 2195;
	var $stream_context;

	
	function __construct(){
		
		$this->stream_context = stream_context_create();
		stream_context_set_option($this->stream_context, 'ssl', 'local_cert', $this->apns_cert);
		$this->apns = stream_socket_client('ssl://' . $this->apns_url . ':' . $this->apns_port, $error, $error_string, 20, STREAM_CLIENT_CONNECT, $this->stream_context);
		
	}
	
	
	public function enviar_push_ios($token, $titulo, $mensaje, $idPoi=0){
		
		$payload = array();

		$payload['aps'] = array("content-available" => 1,  'alert' => $mensaje, 'idPoi' => $idPoi,  'badge' => intval(0), 'sound' => 'www/noti.mp3');

		$payload = json_encode($payload);

		$apns_message = chr(0) . chr(0) . chr(32) . pack('H*', str_replace(' ', '', $token)) . chr(0) . chr(strlen($payload)) . $payload;
		$result = fwrite($this->apns, $apns_message, strlen($apns_message));


		print_r($result);

	}
	
	
	public function enviar_push_android($token, $titulo, $mensaje, $idPoi=0){
	
			$headers = array("Content-Type:" . "application/json", "Authorization:" . "key=" . $this->apiKey);
			$data = array(
				'data' => array('idPoi' => $idPoi, 'message' => $mensaje, 'title' => $titulo),
				'registration_ids' => array($token)
			);
		 
			$ch = curl_init();
		 
			curl_setopt( $ch, CURLOPT_HTTPHEADER, $headers ); 
			curl_setopt( $ch, CURLOPT_URL, "https://android.googleapis.com/gcm/send" );
			curl_setopt( $ch, CURLOPT_SSL_VERIFYHOST, 0 );
			curl_setopt( $ch, CURLOPT_SSL_VERIFYPEER, 0 );
			curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );
			curl_setopt( $ch, CURLOPT_POSTFIELDS, json_encode($data) );
		 
			$response = curl_exec($ch);

			curl_close($ch);
		 
			return $response;

	}
	 
	public function _close(){
		
		@socket_close($this->apns);
		@fclose($this->apns);
		
	}
	
	
}

$p = new Push();

//$p->enviar_push_ios('5ae6435d29d928a403c740f6c7efbc133061ec703d572a9961b670b890f04430', 'Titulo',  'Desc desc',  5);
//$p->enviar_push_android('APA91bF42ase8jWX2U3JFkyociMh85CCAHpNOivlZM3MTPydulXEW42k0BXGhCfWmhRlhYtFWyYmWwmQe1zDoIVYbhPm0juzBtCgoRE8jxcRvJ6HMCP2QqH2Bwh77cpZ_A5CU8scQGR2', 'Titulo', 'Desc desc33', 3);
