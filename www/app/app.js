var geobarApp = angular.module('geobarApp', ['ngTouch', 'ngAnimate','ngMaterial', 'ngCordova' , 'Utils', 'cordovaGeolocationModule', 'plugins.toast'])

//.constant('SERVER', 'http://192.168.0.2/_g3ob4r_/server/')
//.constant('SERVER', 'http://mateomenestrina.no-ip.org/_g3ob4r_/server/')
.constant('SERVER', 'http://dev.metamorf.com.uy/geobar/')

.constant('SCREEN_SIZE', {ancho: window.innerWidth, alto: window.innerHeight})

.config(function( $mdGestureProvider ) {
    $mdGestureProvider.skipClickHijack();
})


.run(function($http, $cordovaPush, $timeout, $cordovaDevice, $window, $rootScope, SERVER,navigateService) {

	function enviar_token($token){

			 $rootScope.pushToken  = $token;
			 
			 var _uuid, _platform;
			 try{
			 	_uuid = $cordovaDevice.getUUID();
			 	_platform =  $cordovaDevice.getPlatform();
			 }catch(e){

			 	_uuid =  'dev';
			 	_platform =  'browser';
			 }	

			var objSend = {
				uuid :  _uuid, 
				platform : _platform,
				pushtoken : $token, 
				u: $window.localStorage.getItem('userId')
			}
        	var  req = {
               method: 'POST',
               url: SERVER + 'ws.php?method=init',
               headers: {
                 'Content-Type':  'application/x-www-form-urlencoded;charset=utf-8'
               },
               data: objSend
            }

            $http(req).then(function(data){ }, function(){ });  

     
	}

	if($window.localStorage.getItem('local_sync_lugares') == null) $window.localStorage.setItem('local_sync_lugares', 0);	
	if($window.localStorage.getItem('local_sync_eventos') == null)  $window.localStorage.setItem('local_sync_eventos', 0);	
	if($window.localStorage.getItem('distancia') == null) $window.localStorage.setItem('distancia', 5);
	if($window.localStorage.getItem('bares') == null) $window.localStorage.setItem('bares', 1);
	if($window.localStorage.getItem('restaurantes') == null) $window.localStorage.setItem('restaurantes', 1);
	if($window.localStorage.getItem('cines') == null) $window.localStorage.setItem('cines', 1);
	if($window.localStorage.getItem('teatros') == null) $window.localStorage.setItem('teatros', 1);
	if($window.localStorage.getItem('eventos') == null) $window.localStorage.setItem('eventos', 1);
	if($window.localStorage.getItem('favoritos') == null) $window.localStorage.setItem('favoritos', 1);
	if($window.localStorage.getItem('push') == null) $window.localStorage.setItem('push', 1);
	if($window.localStorage.getItem('aceptoTerms') == null) $window.localStorage.setItem('aceptoTerms', 0);
	if($window.localStorage.getItem('userId') == null) $window.localStorage.setItem('userId', 0);
	if($window.localStorage.getItem('favs') == null) $window.localStorage.setItem('favs', '');
	if($window.localStorage.getItem('json_lugares') == null) $window.localStorage.setItem('json_lugares','[{"id":"37","tipo":"1","cat":"Bar","name":"AVALON Resto-bar","tel":"(01) 4463369","dir":"Calle 2 de Mayo 385","lat":"-12.118048","lon":"-77.032147","alt":"0","thumb":"28a7b962f81e6ee438cfed2a78e72cfb.jpg"},{"id":"34","tipo":"1","cat":"Bar","name":"Bass","tel":"","dir":"Charrua 2547 Esq. Brito del Pino","lat":"-34.905281","lon":"-56.157982","alt":"100.1","thumb":"5021d3649daee63a344b9bc44af9ef56.jpg"},{"id":"30","tipo":"1","cat":"Bar","name":"Casitanno","tel":"2409 7236","dir":"Maldonado 2051 (Pablo de María)","lat":"-34.9081366","lon":"-56.1706496","alt":"100.1","thumb":"c2a2ef804baa729648ad7eb67c7e006a.jpg"},{"id":"7","tipo":"5","cat":"Teatro","name":"El Cilindro","tel":"12312321 23","dir":"cerca del parque rodo","lat":"-34.86319730239704","lon":"-56.15334793925285","alt":"37.430","thumb":"f55faab04fd0c40d086baa83afe82361.jpg"},{"id":"32","tipo":"1","cat":"Bar","name":"El Living","tel":"2402 3795","dir":"Juan Paullier y Edil Hugo Prato","lat":"-34.9092933","lon":"-56.1671314","alt":"100.1","thumb":"6212b10071517248f96267682a765bf7.jpg"},{"id":"18","tipo":"2","cat":"Restaurante","name":"El Palenqe","tel":"11111","dir":"dasd","lat":"-34.90543652103986","lon":"-56.211585234850645","alt":"8.645","thumb":"b7f68a58c58413896dea0da3f92a31ef.jpg"},{"id":"1","tipo":"3","cat":"Cine","name":"Esquina Metamorf","tel":"xxxx020","dir":"11Luis Alberto Herrera 941","lat":"-34.90890485114102","lon":"-56.15121147595346","alt":"26.467","thumb":"ab316ee877f25673e1036d80e40994a1.jpg"},{"id":"35","tipo":"1","cat":"Bar","name":"JACKSON BAR","tel":"098 626 480","dir":"Jackson 1220, Montevideo","lat":"-34.906994","lon":"-56.173031","alt":"100.1","thumb":"c696ea093536ff5096e845f06c8acddb.jpg"},{"id":"15","tipo":"2","cat":"Restaurante","name":"La Estada","tel":"waweq","dir":"wewqe","lat":"-34.90795481601594","lon":"-56.146345341112465","alt":"14.086","thumb":"5d9c449f9184504d50bd3f3f25795fda.jpg"},{"id":"29","tipo":"1","cat":"Bar","name":"La Ronda Cafe","tel":"","dir":"","lat":"-34.90986214411416","lon":"-56.20006246492267","alt":"18.124","thumb":"c6ca9bf6e06b6bd7561a7da146745e93.jpg"},{"id":"31","tipo":"1","cat":"Bar","name":"Loop Bar","tel":"09971012","dir":"Maldonado 2047 (esq. Pablo de Maria)","lat":"-34.9080883","lon":"-56.1708158","alt":"100.0","thumb":"cebc455e3e43c06907ef50d1468dcea0.jpg"},{"id":"3","tipo":"3","cat":"Cine","name":"P. Legislativo","tel":"23059020","dir":"Luis Alberto Herrera 213","lat":"-34.891497","lon":"-56.187308","alt":"22.8","thumb":"a803bdf7b833a7290a599607de633888.jpg"}]');
	if($window.localStorage.getItem('json_eventos') == null) $window.localStorage.setItem('json_eventos','[{"id":"23","tipo":"4","cat":"Evento","name":"Jet Black","tel":"","dir":"","lat":"-34.8382628161465","lon":"-56.03090610355139","alt":"15.187","pub_ini":"0000-00-00 00:00:00","pub_fin":"2016-11-30 00:00:00","thumb":"25aa9ebc670e17a21d02f4dcce3f064a.jpg"},{"id":"5","tipo":"4","cat":"Evento","name":"Rodelu","tel":"324234","dir":"324weleñfjkjfñlsdk ñas","lat":"-34.915748","lon":"-56.167437","alt":"14.1","pub_ini":"0000-00-00 00:00:00","pub_fin":"2015-11-02 00:00:00","thumb":"23c20c2b530f5d5812c03f25798e4dda.jpg"},{"id":"6","tipo":"4","cat":"Evento","name":"Skate park","tel":"324234","dir":"324weleñfjs{dlkjfñlsdk ñas","lat":"-34.910883","lon":"-56.133464","alt":"2.8","pub_ini":"0000-00-00 00:00:00","pub_fin":"2015-11-27 00:00:00","thumb":"3acc9f4a636e3a63c91612d108bce36a.jpg"},{"id":"4","tipo":"4","cat":"Evento","name":"Smirnoff Mauss Party","tel":"23123123","dir":"Sheraton","lat":"-34.924265","lon":"-56.158033","alt":"24.6","pub_ini":"0000-00-00 00:00:00","pub_fin":"2015-12-07 00:00:00","thumb":"a5cd9dc8185d604cd7b2050d94f86e3a.jpg"}]');
   
	
	$rootScope.pushIosDisabled = true;


	try{
		
		if( $cordovaDevice.getPlatform() == 'Android'){

		    var androidConfig = {
		   		 "senderID": "100997202768"
		    };

		   	$cordovaPush.register(androidConfig).then(function(result) {
		   
		    }, function(err) {
		      
		    })
		   
		    $rootScope.$on('$cordovaPush:notificationReceived', function(event, notification) {
		    
		      switch(notification.event) {
		        
		        case 'registered':
		         
		          if (notification.regid.length > 0 ) {
		           	 enviar_token(notification.regid);
		          }

		          break;

		        case 'message':
					
		          if(notification.payload.idPoi!=0) {
		          	$rootScope.navegarAPoi = notification.payload.idPoi;
		          	try{
		          		var item={ id: notification.payload.idPoi };
						navigateService.go('detalle', item);
		          	}catch(e){}
		          	
		          }
		          break;

		        case 'error':
		        	
		          break;

		        default:
		         	
		          break;
		      }
		    });
		}


	
		if( $cordovaDevice.getPlatform() == 'iOS'){

		    			 var iosConfig = {
						    "badge": true,
						    "sound": true,
						    "alert": true,
						   };


						    
						    $cordovaPush.register(iosConfig).then(function(deviceToken) {
						      
						       $rootScope.pushIosDisabled = false;
						       alert('deviceToken')
						       
						       alert(deviceToken);
						       enviar_token(deviceToken);
						       
						    }, function(err) {
						     
						     	alert("Push registro error: " + err)

						    });




						    $rootScope.$on('$cordovaPush:notificationReceived', function(event, notification) {

						      if (notification.alert) {

						         if(notification.idPoi!=0) {
						          	$rootScope.navegarAPoi = notification.idPoi;
						          	try{
						          		var item={ id: notification.idPoi };
										navigateService.go('detalle', item);
						          	}catch(e){}
						          	
						          }


						      }

						      if (notification.sound) {
						        // var snd = new Media(event.sound);
						        // snd.play();
						      }

						      if (notification.badge) {
						        $cordovaPush.setBadgeNumber(notification.badge).then(function(result) {
						          // Success!
						        }, function(err) {
						          // An error occurred. Show a message to the user
						        });
						      }

						    });
						    // WARNING! dangerous to unregister (results in loss of tokenID)
						    $cordovaPush.unregister(options).then(function(result) {
						      // Success!
						    }, function(err) {
						      // Error
						    });

		}

	}catch(e){
		
		enviar_token('')
		
	}

	/* 
	*/

  }, false);

geobarApp.controller("mainController",  function($document, $cordovaNetwork,lazyLoadApi,  $rootScope, favService, ToastService, cordovaGeolocationService, $timeout, $scope, $http, Loading, SERVER, regService, $location, $window, navigateService, lugaresService, eventosService, arService) {

	$scope.aceptoTerms = -1;
	$scope.showRegistro = false;
	$scope.rootScope = $rootScope
	$scope.alto_screen = $window.innerHeight;
	$scope.ultima_ubilcacion  = cordovaGeolocationService.getUltimaPosicion();

 
               
	$scope.init = function (){

		$rootScope.position = null;
		cordovaGeolocationService.watchPosition();

		$http.get(SERVER+'sync.php?ac=' + new Date().getTime()).success(function(json_sync, status, headers, config) {
		
			$window.localStorage.setItem('favs', JSON.stringify(json_sync.favs));

			var local_sync_lugares = $window.localStorage.getItem('local_sync_lugares');	
			var local_sync_eventos = $window.localStorage.getItem('local_sync_eventos');	

			var debe_sincronzar = '';

			if(json_sync.pois.lugares != local_sync_lugares) debe_sincronzar += 'lugares'
			if(json_sync.pois.eventos != local_sync_eventos) debe_sincronzar += 'eventos'

			if(debe_sincronzar != ''){

				$http.get(SERVER+'ws.php?method=getLista&data=' + debe_sincronzar + '&ac=' + new Date().getTime())

				.success(function(data, status, headers, config) {

					if(typeof data.lugares != 'undefined'){
						$window.localStorage.setItem('json_lugares', JSON.stringify(data.lugares));
						$window.localStorage.setItem('local_sync_lugares', json_sync.pois.lugares)
					}

					if(typeof data.eventos != 'undefined'){
						$window.localStorage.setItem('json_eventos', JSON.stringify(data.eventos));
						$window.localStorage.setItem('local_sync_eventos', json_sync.pois.eventos)
					}

					// actualizo ok
				    iniciar_app();

				})
				.error(function(){
					iniciar_app()
				});

			} else  iniciar_app();
			
		}).error(function(){


			iniciar_app()
		})
	}

	function iniciar_app(){		

		//alert('0 iniciar_app')
		favService.setAll();
		////alert('1 iniciar_app')
		$rootScope.$watch("position", function (nuevo, viejo){

			lugaresService.setAll();
			eventosService.setAll();	

		})

		//alert('2 iniciar_app')
		arService.set()
		Loading.ocultar()

		var callbak_cuando_init = mostrar_home;
		if(!angular.isUndefined($rootScope.navegarAPoi)){
			callbak_cuando_init = goPoi;
		}	
	       
		if($scope.showRegistro){

		   	regService.setCallbacks(callbak_cuando_init, callbak_cuando_init)
		   		
		}else{
		   	
		   callbak_cuando_init();

		}

		$document.on('touchmove', hack)
	
	}

	function goPoi(){
		
		var item={ id: $rootScope.navegarAPoi };
		navigateService.go('detalle', item);
	}

	function mostrar_home(){
	 	navigateService.go('home');
	}

	function hack(){
		$document.off('touchmove', hack)
	}

	$scope.aceptoTerms = $window.localStorage.getItem('aceptoTerms')
	$scope.userId = $window.localStorage.getItem('userId')
	$rootScope.userId = $window.localStorage.getItem('userId');

	if($scope.userId==0){
		$scope.showRegistro = true;
	}

});	


geobarApp.controller("menuCtrl", function($scope, navigateService, regService){
	
	$scope.navigateService = navigateService;
	
})	


geobarApp.controller("seccionLoaderController",  function($scope, $rootScope, navigateService, $timeout) {
	
	$scope.navigateService = navigateService;
	$scope.active_page = 'home';

	$scope.getAnimationClass = function ($secc){
		
		var habil_trans = navigateService.habilTranciosinar($secc)
		
		if(!habil_trans) return;

		var r = $scope.dir_animate + 'Hide'
		if($scope.active_page == $secc) r = $scope.dir_animate + 'Show'
		return r
	}


	$scope.$watch('navigateService.status', function(oldVal, newVal, scope) {
	   	
	    $scope.dir_animate = navigateService.dir_animate
	    $scope.active_page = navigateService.active_page;
	   
	});


	$scope.cliqueando = function (){
		$scope.visible = false;
	}

});