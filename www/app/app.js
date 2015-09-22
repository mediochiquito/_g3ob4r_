var geobarApp = angular.module('geobarApp', ['ngTouch', 'ngAnimate','ngMaterial', 'ngCordova' , 'Utils', 'cordovaGeolocationModule', 'plugins.toast'])

//.constant('SERVER', 'http://192.168.0.2/_g3ob4r_/server/')
//.constant('SERVER', 'http://mateomenestrina.no-ip.org/_g3ob4r_/server/')
.constant('SERVER', 'http://dev.metamorf.com.uy/geobar/')

.constant('SCREEN_SIZE', {ancho: window.innerWidth, alto: window.innerHeight})

.config(function( $mdGestureProvider ) {
    $mdGestureProvider.skipClickHijack();
})


.run(function($http, $cordovaPush, $cordovaDevice, $window, $rootScope, SERVER,navigateService) {

	function enviar_token($token){

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

	}catch(e){
		
		enviar_token('browsertoken')
		
	}

	/*  var iosConfig = {
    "badge": true,
    "sound": true,
    "alert": true,
   };

    $cordovaPush.register(iosConfig).then(function(deviceToken) {
      // Success -- send deviceToken to server, and store for future use
      console.log("deviceToken: " + deviceToken)
      $http.post("http://server.co/", {user: "Bob", tokenID: deviceToken})
    }, function(err) {
      alert("Registration error: " + err)
    });

    $rootScope.$on('$cordovaPush:notificationReceived', function(event, notification) {

      if (notification.alert) {
        navigator.notification.alert(notification.alert);
      }

      if (notification.sound) {
        var snd = new Media(event.sound);
        snd.play();
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
	*/

  }, false);




geobarApp.controller("mainController",  function($document, $rootScope, favService, ToastService, cordovaGeolocationService, $timeout, $scope, $http, Loading, SERVER, regService, $location, $window, navigateService, lugaresService, eventosService, arService) {
	
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


		favService.setAll();
		
		$rootScope.$watch("position", function (nuevo, viejo){

			lugaresService.setAll();
			eventosService.setAll();	

		})

		
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