var geobarApp = angular.module('geobarApp', ['ngTouch', 'ngAnimate','ngMaterial',
											 'ngCordova.plugins.device' , 'templates',
	'ngCordova.plugins.facebook' , 'ngCordova.plugins.network' , 'ngCordova.plugins.push_v5' , 'Utils', 'cordovaGeolocationModule', 'plugins.toast'])

//.constant('SERVER', 'http://192.168.0.2/_g3ob4r_/server/')
//.constant('SERVER', 'http://mateomenestrina.no-ip.org/_g3ob4r_/server/')
.constant('SERVER', 'http://dev.metamorf.com.uy/geobar/')
.constant('SCREEN_SIZE', {ancho: window.innerWidth, alto: window.innerHeight})

.config(["$mdGestureProvider", function( $mdGestureProvider) {
    $mdGestureProvider.skipClickHijack();
	console.log("CONFIG")
}])

.run(function($http, $cordovaPushV5, $timeout, $cordovaDevice, $window, $rootScope, SERVER, navigateService) {

	console.log("RUN");

	function enviar_token($token){

		console.log('ENVIAR TOKEN: ' + $token);

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
		};
		var  req = {
			method: 'POST',
			url: SERVER + 'ws.php?method=init',
			headers: {
				'Content-Type':  'application/x-www-form-urlencoded;charset=utf-8'
			},
			data: objSend
		};

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

	$rootScope.pushIosDisabled = false;

	try{

		if( $cordovaDevice.getPlatform() == 'Android'){

			var androidConfig = {
				"senderID": "100997202768"
			};
			$cordovaPushV5.initialize(androidConfig);
			$cordovaPushV5.register().then(function(result) {

			}, function(err) {

			});

			$rootScope.$on('$cordovaPushV5:notificationReceived', function(event, notification) {

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
				"alert": true
			};

			$cordovaPushV5.initialize(iosConfig);
			$rootScope.pushIosDisabled = true;

			$cordovaPushV5.register().then(function(deviceToken) {

				$rootScope.pushIosDisabled = false;
				enviar_token(deviceToken);

			}, function(err) {

				alert("Push registro error: " + err)

			});

			$rootScope.$on('$cordovaPushV5:notificationReceived', function(event, notification) {

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
					$cordovaPushV5.setBadgeNumber(notification.badge).then(function(result) {
						// Success!
					}, function(err) {
						// An error occurred. Show a message to the user
					});
				}

			});

			// WARNING! dangerous to unregister (results in loss of tokenID)
			$cordovaPushV5.unregister(options).then(function(result) {
				// Success!
			}, function(err) {
				// Error
			});

		}

	}catch(e){

		enviar_token('');

	}



  }, false);

geobarApp.controller("mainController",  ["$document", "$cordovaNetwork", "$rootScope", "favService", "ToastService", "cordovaGeolocationService", "$timeout", "$scope", "$http", "Loading", "SERVER", "regService", "$location", "$window", "navigateService", "lugaresService", "eventosService", "arService", function($document, $cordovaNetwork, $rootScope, favService, ToastService, cordovaGeolocationService, $timeout, $scope, $http, Loading, SERVER, regService, $location, $window, navigateService, lugaresService, eventosService, arService) {

	$scope.aceptoTerms = -1;
	$scope.showRegistro = false;
	$scope.rootScope = $rootScope;
	$scope.alto_screen = $window.innerHeight;
	$scope.ultima_ubilcacion  = cordovaGeolocationService.getUltimaPosicion();

	$scope.init = function (){

		$rootScope.position = null;

		cordovaGeolocationService.watchPosition();

		iniciar_app();


		$http.get(SERVER + 'sync.php?ac=' + new Date().getTime()).success(function (json_sync) {

			$window.localStorage.setItem('favs', JSON.stringify(json_sync.favs));

			var local_sync_lugares = $window.localStorage.getItem('local_sync_lugares');
			var local_sync_eventos = $window.localStorage.getItem('local_sync_eventos');

			var debe_sincronzar = '';

			if(json_sync.pois.lugares != local_sync_lugares) debe_sincronzar += 'lugares';
			if(json_sync.pois.eventos != local_sync_eventos) debe_sincronzar += 'eventos';

			if(debe_sincronzar != ''){

				$http.get(SERVER+'ws.php?method=getLista&data=' + debe_sincronzar + '&ac=' + new Date().getTime())

				.success(function(data) {

					if(typeof data.lugares != 'undefined'){
						$window.localStorage.setItem('json_lugares', JSON.stringify(data.lugares));
						$window.localStorage.setItem('local_sync_lugares', json_sync.pois.lugares)
					}

					if(typeof data.eventos != 'undefined'){
						$window.localStorage.setItem('json_eventos', JSON.stringify(data.eventos));
						$window.localStorage.setItem('local_sync_eventos', json_sync.pois.eventos)
					}

				    iniciar_app();

				})
				.error(function(){
					iniciar_app()
				});

			} else  iniciar_app();

		}).error(function(){

			iniciar_app()
		});

	};

	function iniciar_app(){

		favService.setAll();

		$rootScope.$watch("position", function (){

			lugaresService.setAll();
			eventosService.setAll();	

		});

		arService.set();
		Loading.ocultar();

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

	$scope.aceptoTerms = $window.localStorage.getItem('aceptoTerms');
	$scope.userId = $window.localStorage.getItem('userId');
	$rootScope.userId = $window.localStorage.getItem('userId');

	if($scope.userId==0){
		$scope.showRegistro = true;
	}

}]);	


geobarApp.controller("menuCtrl", ["$scope", "navigateService", function($scope, navigateService){
	
	$scope.navigateService = navigateService;
	
}]);


geobarApp.controller("seccionLoaderController",  ["$scope", "$rootScope", "navigateService", function($scope, $rootScope, navigateService) {
	
	$scope.navigateService = navigateService;
	$scope.active_page =  navigateService.active_page;


	$scope.cliqueando = function (){
		$scope.visible = false;
	}

}]);



angular.module('plugins.toast', [])

  .factory('ToastService', ['$q', '$window', function ($q, $window) {

    return {
      
      showShortTop: function (message) {
        var q = $q.defer();
        $window.plugins.toast.showShortTop(message, function (response) {
          q.resolve(response);
        }, function (error) {
          q.reject(error);
        });
        return q.promise;
      },

      showShortCenter: function (message) {
        var q = $q.defer();
        $window.plugins.toast.showShortCenter(message, function (response) {
          q.resolve(response);
        }, function (error) {
          q.reject(error);
        });
        return q.promise;
      },

      showShortBottom: function (message) {
        var q = $q.defer();
        $window.plugins.toast.showShortBottom(message, function (response) {
          q.resolve(response);
        }, function (error) {
          q.reject(error);
        });
        return q.promise;
      },

      showLongTop: function (message) {
        var q = $q.defer();
        $window.plugins.toast.showLongTop(message, function (response) {
          q.resolve(response);
        }, function (error) {
          q.reject(error);
        });
        return q.promise;
      },

      showLongCenter: function (message) {
        var q = $q.defer();
        $window.plugins.toast.showLongCenter(message, function (response) {
          q.resolve(response);
        }, function (error) {
          q.reject(error);
        });
        return q.promise;
      },

      showLongBottom: function (message) {
        var q = $q.defer();
        $window.plugins.toast.showLongBottom(message, function (response) {
          q.resolve(response);
        }, function (error) {
          q.reject(error);
        });
        return q.promise;
      },


      show: function (message, duration, position) {
        var q = $q.defer();
        try{

          $window.plugins.toast.show(message, duration, position, function (response) {
             q.resolve(response);
          }, function (error) {
            q.reject(error);
          });

        }catch(e){

          alert(message)
        }
        
        return q.promise;
      }
    };

  }]);
geobarApp.factory('arService', ["$window", "$rootScope", "navigateService", "ToastService", "lugaresService", "eventosService", "Loading", "cordovaGeolocationService", function($window, $rootScope, navigateService, ToastService, lugaresService, eventosService, Loading,cordovaGeolocationService){

    var wikitudePlugin;
	var arExperienceUrl =  "www/AR/index.html";
    var requiredFeatures = [  "geo" ];
    var isDeviceSupported ;
    var startupConfiguration = { "camera_position": "back"  };
    var ya_iniciado = false;

	  return {
        
        set: function(){
            try{

                wikitudePlugin = cordova.require("com.wikitude.phonegap.WikitudePlugin.WikitudePlugin");
                wikitudePlugin.isDeviceSupported(this.onDeviceSupported, this.onDeviceNotSupported, requiredFeatures);
                wikitudePlugin.setOnUrlInvokeCallback(this.onURLInvoked);

            }catch(e){

               console.log('No se puede cargar el AR')
                
            }
        }, 



        hide: function (){
         
            if(ya_iniciado)  wikitudePlugin.hide();
           
        },    

        onURLInvoked: function(url){
          
          var _url = decodeURIComponent(url);

          if(_url == 'architectsdk://action=closeWikitudePlugin') wikitudePlugin.hide();
          else {

                var split_url = _url.split('architectsdk://action=');
                var method_parms_array = split_url[1].split(':');
                var item;

                if(method_parms_array[1] == 'lugar')  item = lugaresService.get()[method_parms_array[2]];
                if(method_parms_array[1] == 'evento') item = eventosService.get()[method_parms_array[2]];

                switch(method_parms_array[0]){

                    case 'dir':   
                        wikitudePlugin.hide(); 
                        Loading.mostrar();
                        
                        setTimeout(function (){

                           //  Loading.ocultar()
                             navigateService.go('mapa', {type:'dir', item: item}); 
                            $rootScope.$apply();
                         }, 100);
                        break;

                    case 'fav':   alert('FPO add favoritos'); break;
                    case 'info': 
                        wikitudePlugin.hide();      
                        $rootScope.$apply(); 
                        Loading.mostrar();
                         setTimeout(function (){
                             navigateService.go('detalle',  item); 
                        
                        }, 100);
                        break;

                }

          }

          Loading.ocultar();

        },  


        cerrar: function (){
              
        },

    		mostrar: function() {

    			if(isDeviceSupported){

                Loading.mostrar();

                var self = this;

                setTimeout(function (){        
                    
                    if(!ya_iniciado){

                        wikitudePlugin.loadARchitectWorld(
                                                    self.onARExperienceLoadedSuccessful, 
                                                    self.onARExperienceLoadError,
                                                    arExperienceUrl,
                                                    requiredFeatures,
                                                    startupConfiguration
                                                 );
                        ya_iniciado = true;
                        //document.addEventListener("backbutton", self.backKeyDown);

                  }  else wikitudePlugin.show();

                  var ultim_pos = cordovaGeolocationService.getUltimaPosicion();

                  if(ultim_pos != null){
                    self.setPosPoisEnWikitude(ultim_pos.coords)
                  }else{
                    navigator.geolocation.getCurrentPosition( self.onLocationUpdated,  self.onLocationError);
                  }

                  
                  

                 // navigator.geolocation.watchPosition(self.onLocationWatch,  function(){}, { timeout: 30000 });
                   
                  Loading.ocultar();

                }, 666);

            }else{
              alert('Este dispositivo no soporta AR');
            // console.log (this.escapeSpecialChars(angular.toJson(lugaresService.get())))
             console.log(this.escapeSpecialChars(angular.toJson(lugaresService.getDistancia())))

            }
            

        },  

        escapeSpecialChars: function($json){

            return $json.replace(/'/g, "´"); 
           
        },


        setPosPoisEnWikitude: function($coord){

           wikitudePlugin.setLocation($coord.latitude, $coord.longitude,  $coord.altitude, $coord.accuracy);
           wikitudePlugin.callJavaScript("setWorld('" + this.escapeSpecialChars(angular.toJson(lugaresService.getDistancia())) + "', '" + this.escapeSpecialChars(angular.toJson(eventosService.getDistancia())) + "');");
            
        }, 



        onLocationWatch: function(e) {

          //console.log(e.coords.latitude+'-'+e.coords.longitude+'-'+ e.coords.altitude+'-'+e.coords.accuracy)
          //wikitudePlugin.setLocation(e.coords.latitude, e.coords.longitude,  e.coords.altitude, e.coords.accuracy);
           
        },
       
        onLocationUpdated: function(e) {

           
            wikitudePlugin.setLocation(e.coords.latitude, e.coords.longitude,  e.coords.altitude, e.coords.accuracy);
            this.setPosPoisEnWikitude(e.coords)
        },

        onLocationError: function() {

            alert('No hemos enctroado tu ubicación global. Revisa tu configuración del GPS.');
            ToastService.show('No hemos enctroado tu ubicación global. Revisa tu configuración del GPS.', 'long', 'center');
        },

        onARExperienceLoadedSuccessful: function(loadedURL) {
          


        },
        
        onARExperienceLoadError: function(errorMessage) {
      
            ToastService.show('Ocurrio un error al cargar la realidad aumentada: ' + errorMessage, 'long', 'center');
        },

        onDeviceSupported:function(){
            isDeviceSupported = true
        },  

        onDeviceNotSupported:function(errorMessage){
            isDeviceSupported = false;
            alert(errorMessage);
        }


    };

}]);
/**
 * Angular Module relying on Apache Cordova Geolocation Plugin (cordova plugin add org.apache.cordova.Geolocation).
 */
var cordovaGeolocationModule = angular.module('cordovaGeolocationModule', []);

// Constants

/**
 * Constants service used in the whole module.
 */
cordovaGeolocationModule.constant('cordovaGeolocationConstants', {
    apiVersion: '1.0.0',
    cordovaVersion: '>=3.4.0'
});

// Services

/**
 * Main service relying on Apache Cordova Geolocation Plugin.
 */
cordovaGeolocationModule.factory('cordovaGeolocationService', ['$rootScope', '$log', 'cordovaGeolocationConstants', function ($rootScope, $log, cordovaGeolocationConstants) {
   
    var pocision = null;

    return {
        /**
         * Return the current API version.
         */
        apiVersion: function () {
            $log.debug('cordovaGeolocationService.apiVersion.');
            return cordovaGeolocationConstants.apiVersion;
        },

        /**
         * Return the cordova API version.
         */
        cordovaVersion: function () {
            $log.debug('cordovaGeolocationService.cordovaVersion.');
            return cordovaGeolocationConstants.cordovaVersion;
        },

        /**
         * Check the geolocation plugin availability.
         * @returns {boolean}
         */
        checkGeolocationAvailability: function () {
            $log.debug('cordovaGeolocationService.checkGeolocationAvailability.');
            if (!navigator.geolocation) {
                $log.warn('Geolocation API is not available.');
                return false;
            }
            return true;
        },

        /**
         * Returns the device's current position to the geolocationSuccess callback with a Position object as the parameter.
         * For more information: https://github.com/apache/cordova-plugin-geolocation/blob/master/doc/index.md#navigatorgeolocationgetcurrentposition
         */
        getCurrentPosition: function (successCallback, errorCallback, options) {
            $log.debug('cordovaGeolocationService.getCurrentPosition.');

            // Checking API availability
            if (!this.checkGeolocationAvailability()) {
             
                return;
            }

            // API call
            navigator.geolocation.getCurrentPosition(

                function (position) {

                    pocision = position;
                    $rootScope.$apply(successCallback(position));

                },
                function (error) {
                    $rootScope.$apply(errorCallback(error));
                },
                options
            );
        },


        getUltimaPosicion: function(){

            return pocision;

        }, 
        watchPosition: function () {
        
            // Checking API availability
            if (!this.checkGeolocationAvailability()) {
                return;
            }

            // API call
            return navigator.geolocation.watchPosition(

               function(position) {
                    

                     pocision = position;
                     $rootScope.position = position;
                     $rootScope.$apply()

                }, function onError(error) {
                  /*  alert('code: '    + error.code    + '\n' +
                          'message: ' + error.message + '\n');*/
                }
            );
        },

        /**
         * Stop watching for changes to the device's location referenced by the watchID parameter.
         * For more information: https://github.com/apache/cordova-plugin-geolocation/blob/master/doc/index.md#navigatorgeolocationclearwatch
         */
        clearWatch: function (watchID) {
            $log.debug('cordovaGeolocationService.clearWatch.');

            // Checking API availability
            if (!this.checkGeolocationAvailability()) {
                return;
            }

            // API call
            navigator.geolocation.clearWatch(watchID);
        }
    };
}]);



geobarApp.service('favService', ["$window", function($window){

    this.all = {};
   
    this.setAll = function(){ 
        try{
            this.all =  JSON.parse( $window.localStorage.getItem('favs'));
        }catch(e){}
        
    };

    this.getAll = function (){
        return  this.all 
    };

    this.getCantFavPoriId = function($idPoi) {
        return this.all['p_' + $idPoi];
    };

    this.setFav =  function($idPoi, $val) {

        var valor_actual = 0;
        if(!angular.isUndefined(this.all['p_' + $idPoi])){
            valor_actual =  parseInt(this.all['p_' + $idPoi]);
        }

        if($val == 0)  this.all['p_' + $idPoi] = valor_actual - 1;
        if($val == 1)  this.all['p_' + $idPoi] = valor_actual + 1;

    }

}]);


geobarApp.service('Loading',function(){
				
				var element = null;

				this.ocultar = function (){
					element.css('display','none');
				};

				this.mostrar = function(){
					element.css('display','block');
				};

				this.setInstancia = function ($elem){
					element = $elem;
				}
		
});


		


geobarApp.factory('lugaresService', ["$window", "cordovaGeolocationService", "DistancePostion", function($window, cordovaGeolocationService, DistancePostion){

	var all = [];
    var all_a_distancia = [];
    var distancia_cargada = 5000;

	return {

		setAll: function() {

            distancia_cargada = $window.localStorage.getItem('distancia');

            var bares = $window.localStorage.getItem('bares');
            var restaurantes = $window.localStorage.getItem('restaurantes');
            var cines = $window.localStorage.getItem('cines');
            var teatro = $window.localStorage.getItem('cines');

            var array_entero =  JSON.parse( window.localStorage.getItem('json_lugares'));
            var cantidad_lugares = array_entero.length;
            all = [];
            all_a_distancia =  [];
            for(var i=0; i<cantidad_lugares; i++){

               if(array_entero[i].tipo == 1 && bares==1) this.addPoiToAll(array_entero[i]); 
               if(array_entero[i].tipo == 2 && restaurantes==1) this.addPoiToAll(array_entero[i]);
               if(array_entero[i].tipo == 3 && cines==1) this.addPoiToAll(array_entero[i]);
               if(array_entero[i].tipo == 5 && teatro==1) this.addPoiToAll(array_entero[i]);
              
            }

            all.sort(this.compare);


        },

        compare : function (a, b) {
        
          if(typeof(a.distancia) != 'undefined'){

              if (a.distancia < b.distancia)
                return -1;
              if (a.distancia > b.distancia)
                return 1;
          }
        
           return 0;

        }, 

     

        addPoiToAll:function ($poi){

            var my_pos = cordovaGeolocationService.getUltimaPosicion();
        
            if(my_pos!=null){

                var d = DistancePostion.enKilometros(my_pos.coords.latitude, my_pos.coords.longitude, $poi.lat, $poi.lon);
                $poi['distancia'] = d;
                
                if(d <= distancia_cargada){

                    var nuevoPoi = $poi;
                        nuevoPoi.name = nuevoPoi.name.replace(/"/g, "´");
                        nuevoPoi.dir = nuevoPoi.dir.replace(/"/g, "´");
                        all_a_distancia.push(nuevoPoi)

                }

                    

            }



            all.push($poi);  



        },

        getDistancia: function() {
            return all_a_distancia;
        },

        get: function() {
            return all;
        }
    };

}]);

geobarApp.factory('eventosService', ["cordovaGeolocationService", "DistancePostion", "$window", function(cordovaGeolocationService, DistancePostion, $window){

    var all = [];
    var all_a_distancia =   [];
    var distancia_cargada;

    return {
        
        setAll: function() {

            distancia_cargada = $window.localStorage.getItem('distancia');

            var array_entero  = JSON.parse( window.localStorage.getItem('json_eventos'));

            var cantidad = array_entero.length;
            all = [];
            all_a_distancia =   [];

            var my_pos = cordovaGeolocationService.getUltimaPosicion();
            
            for(var i=0; i<cantidad; i++){

                if(my_pos!=null){

                    var dist = DistancePostion.enKilometros(my_pos.coords.latitude, my_pos.coords.longitude, array_entero[i].lat, array_entero[i].lon);
                    array_entero[i]['distancia'] = dist
                   

                }

                var d = new Date();
                var hoy = new Date(d.getFullYear(),d.getMonth(), d.getDate());

                //2015-03-08 00:00:00
                var array_pub_ini =  String(array_entero[i].pub_ini).split(' ');
                var fecha_pub_ini =  array_pub_ini[0].split('-');
                var pub_ini = new Date(Number(fecha_pub_ini[0]), Number(fecha_pub_ini[1])-1, Number(fecha_pub_ini[2]));

                var array_pub_fin =  String(array_entero[i].pub_fin).split(' ');
                var fecha_pub_fin =  array_pub_fin[0].split('-');
                var pub_fin = new Date(Number(fecha_pub_fin[0]), Number(fecha_pub_fin[1])-1, Number(fecha_pub_fin[2]));

                if(hoy.getTime() >= pub_ini.getTime() && hoy.getTime()<= pub_fin.getTime()){

                    all.push(array_entero[i]);  

                    if(dist <= distancia_cargada){
                        var nuevoPoi = array_entero[i];
                            nuevoPoi.name = nuevoPoi.name.replace(/"/g, "´");
                            nuevoPoi.dir = nuevoPoi.dir.replace(/"/g, "´");
                            all_a_distancia.push(nuevoPoi)
                    }
                }
            }

            all.sort(this.compare);
            

        },

        compare : function (a, b) {
    
              if(typeof(a.distancia) != 'undefined'){

                  if (a.distancia < b.distancia)
                    return -1;
                  if (a.distancia > b.distancia)
                    return 1;
              }
            
              return 0;

        }, 

        getDistancia: function() {
            return all_a_distancia;
        },
        get: function() {
            return all;
        }
    };

}]);


geobarApp.service('mapaService', function(){

	var map = null;
	this.init = function(){
		try{
			map = plugin.google.maps.Map.getMap();
            map.on(plugin.google.maps.event.MAP_READY, function () {
                map.setClickable( false );
            });
		}catch(e){}
            
	};


 	this.mostrar = function(){

 		var div = document.getElementById('map_canvas');
 			div.style.height = (window.innerHeight-80) + 'px';

 		if(map){
 			map.setVisible(true);
 			map.setClickable(true);
 			map.setDiv(div);
 			map.refreshLayout();

 			var onSuccess = function(location) {

				    map.setOptions({
					  'controls': {
					    'compass': true,
					    'myLocationButton': true,
					    'zoom': true // Only for Android
					  }
					});
				  
					map.animateCamera({
					  'target': location.latLng,
					  'duration': 2000
					}, function() {
					
					});

			};

			var onError = function(msg) {
			  alert("error: " + msg);
			};

			map.getMyLocation(onSuccess, onError);


 		}




 	};


 	this.ocultar = function (){

 		if(map) {
 			map.setVisible(false);
 			map.setClickable( false );
 			
 		}

 	}

});

geobarApp.service('navigateService', ["$log", "mapaService", "$rootScope", "$injector", function($log, mapaService, $rootScope, $injector){

	var en_seccion = '';
	var historia = [];
	var ultima_seccion_eliminada_de_historia = null;
	var self = this;

	this.status = 0;
 	//this.dir_animate  = 'enterSeccion';
 	this.secciones = {};
 	this.active_page = 'home';
	// // Here is your tag
 	document.addEventListener("backbutton", backKeyDown, false);



 	function backKeyDown(){

 		$rootScope.$apply(function(){
 			self.back();
 			var arService = $injector.get('arService');
 			arService.hide()
 			
 		})

 	}

 	this.esPrimerPage = function(){	
 		return (historia.length==1);
 	};

 	this.setSecciones = function ($key, $init){
 		
 		this.secciones[$key] = $init;
 		
 	};

	this.go = function (secc, obj, entra_a_historia, $dir_animate, $recargar){

		if(typeof obj == 'undefined') obj = null;
		if(typeof $recargar == 'undefined') $recargar = true;

		switch(secc){
			
			case 'home':
				
				if(!$recargar) go_execute(secc, obj, entra_a_historia, $dir_animate);
				else{
					this.secciones['home'](obj, function(){
						go_execute(secc, obj, entra_a_historia, $dir_animate)
					});
				}
				break;

			case 'detalle':
				
				if(!$recargar) go_execute(secc, obj, entra_a_historia, $dir_animate);
				else{
					this.secciones['detalle'](obj, function(){
						go_execute(secc, obj, entra_a_historia, $dir_animate)
					})
				}
				break;

			case 'mapa':
			
				if(!$recargar) go_execute(secc, obj, entra_a_historia, $dir_animate);
				else{
					go_execute(secc, obj, entra_a_historia, $dir_animate);
					this.secciones['mapa'](obj);
				}
				break;

			case 'lista':

				if(!$recargar) go_execute(secc, obj, entra_a_historia, $dir_animate);
				else{
					this.secciones['lista'](obj);
					go_execute(secc, obj, entra_a_historia, $dir_animate)
				}

				break;

			default:
				go_execute(secc, obj, entra_a_historia, $dir_animate);
				break;
		}

	};

	function go_execute(secc, obj, entra_a_historia, $dir_animate){

		if(typeof entra_a_historia == 'undefined') entra_a_historia = true;

		if(entra_a_historia) $rootScope.dirAnim = 'enter';
		else $rootScope.dirAnim = 'back';

			self.dir_animate  = $dir_animate;
			self.active_page = secc;
			
			if(historia.length>0){
				if(historia[historia.length-1].secc == secc) entra_a_historia = false;
			}

			if(entra_a_historia) historia.push({'secc': secc, 'obj': obj});
			en_seccion = secc;
			
			self.status++;

	}



	this.back = function (){

		ultima_seccion_eliminada_de_historia = historia[historia.length-1];
		if(historia.length>1) historia.pop();
		
			setTimeout(function(){
				ultima_seccion_eliminada_de_historia =  null;
			},100);

		var penultimo_elemento = historia[historia.length-1];	
		var recargar = false;
		if(penultimo_elemento.secc == 'mapa') recargar = true;

		this.go(penultimo_elemento.secc, penultimo_elemento.obj, false, 'backSeccion', recargar);
	};



	this.habilTranciosinar = function ($secc){
			
			if(ultima_seccion_eliminada_de_historia !=  null && ultima_seccion_eliminada_de_historia.secc == $secc) return true;
			var elem;
			if(historia.length>0){
				elem = historia[historia.length-1];
				if(elem.secc == $secc)  return true;
			}
			if(this.dir_animate == 'enterSeccion' && historia.length > 1){
				 elem = historia[historia.length-2];
				if(elem.secc == $secc)  return true;
			}
			return false;
	}

}]);

geobarApp.factory('regService', function () {

    var scope = null;
    var _callback_ok = null;
    var _callback_cancel = null;

    return {

        set: function ($scope) {

            scope = $scope


        },
        setCallbacks: function ($callback_ok, $callback_cancel) {
            _callback_ok = $callback_ok;
            _callback_cancel = $callback_cancel;
        },
        mostrar: function ($callback_ok, $callback_cancel) {
            _callback_ok = $callback_ok;
            _callback_cancel = $callback_cancel;
            scope.mostrar();
        },

        ocultar: function () {

            scope.mostrar()

        },

        callback_ok: function () {

            if (_callback_ok != null) _callback_ok()

        },

        callback_cancel: function () {

            if (_callback_cancel != null) _callback_cancel()

        }


    }

});



angular.module('Utils',[]) 

    .factory('DistancePostion', function(){
	   
       return {
            enKilometros:function(lat1, lon1, lat2, lon2) {

                var unit = "K";

                var radlat1 = Math.PI * lat1/180;
                var radlat2 = Math.PI * lat2/180;
             /*   var radlon1 = Math.PI * lon1/180;
                 var radlon2 = Math.PI * lon2/180;*/
                var theta = lon1-lon2;
                var radtheta = Math.PI * theta/180;
                var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
                dist = Math.acos(dist);
                dist = dist * 180/Math.PI;
                dist = dist * 60 * 1.1515;
                if (unit=="K") { dist = dist * 1.609344 }
                if (unit=="N") { dist = dist * 0.8684 }
                return dist
            }
    }}) 

    .directive('fadeIn', ["$timeout", function($timeout){
        return {
            restrict: 'A',
            link: function($scope, $element, attrs){
                $element.addClass("ng-hide-remove");
                $element.on('load', function() {
                    
                   $element.addClass("ng-hide-add");
                  
                });
            }
        }
    }]);



// install   :     cordova plugin add cordova-plugin-device
// link      :     https://github.com/apache/cordova-plugin-device

/* globals device: true */
angular.module('ngCordova.plugins.device', [])

  .factory('$cordovaDevice', [function () {

    return {
      /**
       * Returns the whole device object.
       * @see https://github.com/apache/cordova-plugin-device
       * @returns {Object} The device object.
       */
      getDevice: function () {
        return device;
      },

      /**
       * Returns the Cordova version.
       * @see https://github.com/apache/cordova-plugin-device#devicecordova
       * @returns {String} The Cordova version.
       */
      getCordova: function () {
        return device.cordova;
      },

      /**
       * Returns the name of the device's model or product.
       * @see https://github.com/apache/cordova-plugin-device#devicemodel
       * @returns {String} The name of the device's model or product.
       */
      getModel: function () {
        return device.model;
      },

      /**
       * @deprecated device.name is deprecated as of version 2.3.0. Use device.model instead.
       * @returns {String}
       */
      getName: function () {
        return device.name;
      },

      /**
       * Returns the device's operating system name.
       * @see https://github.com/apache/cordova-plugin-device#deviceplatform
       * @returns {String} The device's operating system name.
       */
      getPlatform: function () {
        return device.platform;
      },

      /**
       * Returns the device's Universally Unique Identifier.
       * @see https://github.com/apache/cordova-plugin-device#deviceuuid
       * @returns {String} The device's Universally Unique Identifier
       */
      getUUID: function () {
        return device.uuid;
      },

      /**
       * Returns the operating system version.
       * @see https://github.com/apache/cordova-plugin-device#deviceversion
       * @returns {String}
       */
      getVersion: function () {
        return device.version;
      },

      /**
       * Returns the device manufacturer.
       * @returns {String}
       */
      getManufacturer: function () {
        return device.manufacturer;
      }
    };
  }]);

// install   :   cordova -d plugin add https://github.com/Wizcorp/phonegap-facebook-plugin.git --variable APP_ID="123456789" --variable APP_NAME="myApplication"
// link      :   https://github.com/Wizcorp/phonegap-facebook-plugin

/* globals facebookConnectPlugin: true */
angular.module('ngCordova.plugins.facebook', [])

  .provider('$cordovaFacebook', [function () {

    /**
      * Init browser settings for Facebook plugin
      *
      * @param {number} id
      * @param {string} version
      */
    this.browserInit = function (id, version) {
      this.appID = id;
      this.appVersion = version || 'v2.0';
      facebookConnectPlugin.browserInit(this.appID, this.appVersion);
    };

    this.$get = ['$q', function ($q) {
      return {
        login: function (permissions) {
          var q = $q.defer();
          facebookConnectPlugin.login(permissions, function (res) {
            q.resolve(res);
          }, function (res) {
            q.reject(res);
          });

          return q.promise;
        },

        showDialog: function (options) {
          var q = $q.defer();
          facebookConnectPlugin.showDialog(options, function (res) {
            q.resolve(res);
          }, function (err) {
            q.reject(err);
          });
          return q.promise;
        },

        api: function (path, permissions) {
          var q = $q.defer();
          facebookConnectPlugin.api(path, permissions, function (res) {
            q.resolve(res);
          }, function (err) {
            q.reject(err);
          });
          return q.promise;
        },

        getAccessToken: function () {
          var q = $q.defer();
          facebookConnectPlugin.getAccessToken(function (res) {
            q.resolve(res);
          }, function (err) {
            q.reject(err);
          });
          return q.promise;
        },

        getLoginStatus: function () {
          var q = $q.defer();
          facebookConnectPlugin.getLoginStatus(function (res) {
            q.resolve(res);
          }, function (err) {
            q.reject(err);
          });
          return q.promise;
        },

        logout: function () {
          var q = $q.defer();
          facebookConnectPlugin.logout(function (res) {
            q.resolve(res);
          }, function (err) {
            q.reject(err);
          });
          return q.promise;
        }
      };
    }];
  }]);

// install   :      cordova plugin add cordova-plugin-network-information
// link      :      https://github.com/apache/cordova-plugin-network-information

/* globals Connection: true */
angular.module('ngCordova.plugins.network', [])

  .factory('$cordovaNetwork', ['$rootScope', '$timeout', function ($rootScope, $timeout) {

    /**
      * Fires offline a event
      */
    var offlineEvent = function () {
      var networkState = navigator.connection.type;
      $timeout(function () {
        $rootScope.$broadcast('$cordovaNetwork:offline', networkState);
      });
    };

    /**
      * Fires online a event
      */
    var onlineEvent = function () {
      var networkState = navigator.connection.type;
      $timeout(function () {
        $rootScope.$broadcast('$cordovaNetwork:online', networkState);
      });
    };

    document.addEventListener('deviceready', function () {
      if (navigator.connection) {
        document.addEventListener('offline', offlineEvent, false);
        document.addEventListener('online', onlineEvent, false);
      }
    });

    return {
      getNetwork: function () {
        return navigator.connection.type;
      },

      isOnline: function () {
        var networkState = navigator.connection.type;
        return networkState !== Connection.UNKNOWN && networkState !== Connection.NONE;
      },

      isOffline: function () {
        var networkState = navigator.connection.type;
        return networkState === Connection.UNKNOWN || networkState === Connection.NONE;
      },

      clearOfflineWatch: function () {
        document.removeEventListener('offline', offlineEvent);
        $rootScope.$$listeners['$cordovaNetwork:offline'] = [];
      },

      clearOnlineWatch: function () {
        document.removeEventListener('online', onlineEvent);
        $rootScope.$$listeners['$cordovaNetwork:online'] = [];
      }
    };
  }])
  .run(['$injector', function ($injector) {
    $injector.get('$cordovaNetwork'); //ensure the factory always gets initialised
  }]);


// install   :      cordova plugin add phonegap-plugin-push
// link      :      https://github.com/phonegap/phonegap-plugin-push

angular.module('ngCordova.plugins.push_v5', [])
  .factory('$cordovaPushV5',['$q', '$rootScope', '$timeout', function ($q, $rootScope, $timeout) {
   /*global PushNotification*/

    var push;
    return {
      initialize : function (options) {
        var q = $q.defer();
        push = PushNotification.init(options);
        q.resolve(push);
        return q.promise;
      },
      onNotification : function () {
        $timeout(function () {
          push.on('notification', function (notification) {
            $rootScope.$emit('$cordovaPushV5:notificationReceived', notification);
          });
        });
      },
      onError : function () {
        $timeout(function () {
          push.on('error', function (error) { $rootScope.$emit('$cordovaPushV5:errorOccurred', error);});
        });
      },
      register : function () {
        var q = $q.defer();
        if (push === undefined) {
          q.reject(new Error('init must be called before any other operation'));
        } else {
          push.on('registration', function (data) {
            q.resolve(data.registrationId);
          });
        }
        return q.promise;
      },
      unregister : function () {
        var q = $q.defer();
        if (push === undefined) {
          q.reject(new Error('init must be called before any other operation'));
        } else {
          push.unregister(function (success) {
            q.resolve(success);
          },function (error) {
            q.reject(error);
          });
        }
        return q.promise;
      },
      setBadgeNumber : function (number) {
        var q = $q.defer();
        if (push === undefined) {
          q.reject(new Error('init must be called before any other operation'));
        } else {
          push.setApplicationIconBadgeNumber(function (success) {
            q.resolve(success);
          }, function (error) {
            q.reject(error);
          }, number);
        }
        return q.promise;
      }
    };
  }]);

geobarApp.directive('botonBase', function() {
  return {
    
    restrict: 'AE', 
    scope: {
    		habil: '@',
    		accion: '&'
	},
    link: function(scope, elem){

    	if(typeof scope.habil == 'undefined') scope.habil = true;
    	elem.bind('touchstart', function(){
            if(!elem.hasClass('botonDisabled')){
                elem.addClass('botonOver');
              
                scope.$apply();

              try{
                if(device.platform == 'Android')  navigator.vibrate(50)    
            }catch(e){}
            
            }
    	});

    	elem.on('touchend', function(){
    		elem.removeClass('botonOver');
              scope.accion();
               scope.$apply()
    	})

        
    }
  };
});
geobarApp.directive('botonLista', function() {
  return {
    
    restrict: 'A', 
  
    link: function(scope, elem){

        function touch_move(){

             elem.removeClass('botonListaOver');
             elem.unbind('touchmove', touch_move)
        }
    	elem.bind('touchstart', function(){
            try{
                 elem.unbind('touchmove', touch_move);
                  elem.removeClass('botonListaOver')
            }catch(e){}
            elem.bind('touchmove', touch_move);
            elem.addClass('botonListaOver');

         try{
                if(device.platform == 'Android')  navigator.vibrate(50)    
            }catch(e){}
            
    	});

    	elem.on('touchend', function(){
          
    		  elem.removeClass('botonListaOver');
              elem.unbind('touchmove', touch_move)  
    	})

    }
  };
});
geobarApp.directive('botonSistema', function() {
  return {
    
    restrict: 'AE', 
    scope: {
    		habil: '@',
    		accion: '&',
    		imagen: '@',
    		txt:  '@'
			
	},

    template: "<img src='{{imagen}}' /><div  class='botonSistemaLabel ' ng-if=' txt!=undefined '>{{txt}}</div>", 

    link: function(scope, elem){

    	if(typeof scope.habil == 'undefined') scope.habil = true;

    	elem.bind('touchstart', function(){

            if(!elem.hasClass('botonDisabled')){
                elem.addClass('botonOver')
            }
            try{
                if(device.platform == 'Android')  navigator.vibrate(50)    
            }catch(e){}
            
    	});

    	elem.on('touchend', function(){
          
    		elem.removeClass('botonOver');
               scope.accion();
               scope.$apply()
    	})


    }
  };
});
geobarApp.directive('checkBox', function() {
  return {
    
    restrict: 'E', 
    scope: {
    	checked: '=',
        accion: '&'
	},
    template:'<div class="checkBox-bg"><div class="checkBox-selected" ng-show=" checked==1"></div></div>',

    link: function(scope, elem){

        elem.addClass('checkBox');


    	elem.on('touchend', function(){
         
    		 if(scope.checked == 1) scope.checked = 0;
             else scope.checked = 1;
             scope.$apply();
             scope.accion()
             
    	})

        
    }
  };
});
geobarApp.directive('elLoading', ["Loading", function(Loading){
				return {
					restrict:'E',
					template:'<div><img src="img/loader.png" /></div>',

					compile:function(element, attributes){
						
						Loading.setInstancia(element);

					}
				}
}]);
geobarApp.directive('imgLoader', function() {
  return {
    
    restrict: 'E', 
   
    scope:{

      imgurl: '=',
      hashfile: '@',
      itemid: '=',
      itemtipo: '='

    },

    template : '<img class="item-lista-img" ng-src="{{ imagen }}" />', 
    link: function(scope, elem){

       
        
        scope.$watch('hashfile', function(){
           scope.imagen = scope.imgurl + scope.hashfile
        });

        elem.children('img')[0].onerror = function () {
            scope.imagen = 'img/default/thumb_' + scope.itemtipo + '.png';
            scope.$apply()
        };
      

    }
  };
});


//server="{{}}" default=''
geobarApp.directive('touchSlider', ["$document", "Loading", "SERVER", "$log", "navigateService", function ($document, Loading, SERVER, $log, navigateService) {

    return {

        restrict: 'E',

        scope: {
            fotos: '=',
            urlImgs: '=',
            imgDefault: '@'

        },

        templateUrl: 'directivas/componentes/touchSlider/touchSlider.html',

        link: function (scope, elem, attrs) {

            scope.t = 0;
            scope.pagina = 0;
            scope.enx = 0;
            scope.server = SERVER;
            var offsetX = 0;
            var finX = 0;
            var ultimo_x = 0;
            var cien_porciento = window.innerWidth;

            scope.array_src_fotos = [];


            scope.$watch('fotos', function ($oldV, $newV) {

                scope.t = 0;
                scope.pagina = 0;
                scope.enx = 0;


                if (scope.fotos && typeof(scope.fotos[0]) == 'object') {

                    scope.array_src_fotos = [];

                    for (var obj_home in scope.fotos) {
                        scope.array_src_fotos.push(scope.fotos[obj_home].home_img)
                    }


                } else {

                    scope.array_src_fotos = scope.fotos
                }

            });

            elem.bind('touchstart', function (e) {

                scope.t = '0s';
                offsetX = (e.touches[0].clientX);
                ultimo_x = scope.enx;
                scope.$apply();

                addListener()

            });

            function doMove(e) {
                scope.enx = Math.round(e.touches[0].clientX - offsetX + ultimo_x);

                scope.$apply();

            }

            function doEnd(e) {

                finX = e.changedTouches[0].clientX;

                if ((finX - offsetX) > -10 && (finX - offsetX) < 10) {
                    scope.t = '.2s';
                    scope.enx = -(scope.pagina * cien_porciento);
                    ultimo_x = scope.enx;
                    scope.$apply();
                    removeListener();
                    if (scope.fotos[scope.pagina].home_og_poi > 0) {

                        var item = {};
                        item.id = scope.fotos[scope.pagina].home_og_poi;
                        setTimeout(function () {

                            navigateService.go('detalle', item);


                        }, 300)


                    }


                    //alert(scope.fotos[scope.pagina].home_og_poi)

                    return;
                }

                if (offsetX > finX) {
                    scope.pagina++
                } else {
                    scope.pagina--
                }

                if (scope.pagina < 0) scope.pagina = 0;
                if (scope.pagina >= scope.fotos.length) scope.pagina = scope.fotos.length - 1;

                scope.t = '.2s';
                scope.enx = -(scope.pagina * cien_porciento);
                ultimo_x = scope.enx;

                scope.$apply();
                removeListener()
            }

            function addListener() {

                $document.on('touchmove', doMove);

                $document.on('touchend', doEnd);
            }

            function removeListener() {
                $document.off('touchmove', doMove);
                $document.off('touchend', doEnd)
            }

        }
    };
}]);
geobarApp.directive('config', ["$rootScope", "ToastService", "regService", "$timeout", "$cordovaNetwork", "$window", "$http", "lugaresService", "eventosService", "SERVER", "Loading", function($rootScope, ToastService, regService, $timeout, $cordovaNetwork, $window, $http, lugaresService, eventosService, SERVER, Loading) {
  
  return {
    restrict: 'E',
    templateUrl: 'directivas/secciones/config/config.html',
	  scope:{caca:'@'},
    
    link:function (scope){
      
      scope.screen_alto = window.innerHeight;
	   	scope.visible = true;
      
      scope.chkBares = $window.localStorage.getItem('bares');
      scope.chkRestaurantes = $window.localStorage.getItem('restaurantes');
      scope.chkCines = $window.localStorage.getItem('cines');
      scope.chkTeatros = $window.localStorage.getItem('teatros');
      scope.distancia = $window.localStorage.getItem('distancia');
		  scope.chkPush = $window.localStorage.getItem('push');

      scope.$watch('distancia', function(){
     
        $window.localStorage.setItem('distancia',  scope.distancia);
           
        lugaresService.setAll();
        eventosService.setAll()
        
      });


      scope.setPush = function($clave, $val){

          var isOnline;

          try{
            
            isOnline = $cordovaNetwork.isOnline();

          }catch(e){

            isOnline = true;
          }

          if(isOnline) {
              
              scope.update($clave, $val);


          }else{
              
               ToastService.show('Debes conectarte a internet para llevar a cabo esta acción.', 'long', 'center');
             
               $timeout(function(){
                    scope.chkPush = $val==1?0:1;
               })
          }
          
      };

      scope.goReg = function (){

        regService.mostrar(function (){}, function (){})

      };

      scope.update = function ($clave, $val){
        

        if($clave=='push'){

          Loading.mostrar();

          var  req = {
               method: 'POST',
               url: SERVER + 'ws.php?method=setPush',
               headers: {
                 'Content-Type':  'application/x-www-form-urlencoded;charset=utf-8'
               },
               data: {token: $rootScope.pushToken, act: $val}
          };

          $http(req).then( 

              function(){
                  Loading.ocultar()

              }, function(){
                  Loading.ocultar()
                
              }
          );

          
        }

        $window.localStorage.setItem($clave,  $val);
        lugaresService.setAll();
        $rootScope.$broadcast('cambioListaLugares');


      }

      

    }
  

  };
}]);
geobarApp.directive('detalle', ["navigateService", "ToastService", "Loading", "$http", "SERVER", "$window", "$timeout", "regService", "favService", function(navigateService, ToastService, Loading, $http, SERVER, $window, $timeout, regService, favService) {
  
  return {
  	
    restrict: 'E',
    scope: {},
    templateUrl: 'directivas/secciones/detalle/detalle.html',

    link:function ($scope){
		
    	var _callback;
    	$scope.navigateService = navigateService;
    
    	$scope.goMapa = function (){
    		
    		
    	   if ($window.google && $window.google.maps) {  
              navigateService.go('mapa', {type:'item', item: $scope.item});
           }else{
              ToastService.show('Debes conectarte a internet para ver el mapa.', 'long', 'center');
           }
    	};
    	
    	$scope.goTel =  function (){

    		$window.open('tel://' + $scope.item.tel);
    		
    	};

    	$scope.goFav =  function (){


				var  userId= $window.localStorage.getItem('userId');
			
				if(userId==0){

					regService.mostrar(marcar_como_favorito, function (){})

				}else{

					marcar_como_favorito()

				}


    		

    	};

    	function marcar_como_favorito(){


    		var  userId = $window.localStorage.getItem('userId');

            var objSend = {
                userId : userId, 
                poiId: $scope.item.id
            };
            
            var  req = {
                 method: 'POST',
                 url: SERVER + 'ws.php?method=setFav',
                 headers: {
                   'Content-Type':  'application/x-www-form-urlencoded;charset=utf-8'
                 },
                 data: objSend
            };
            
            Loading.mostrar();

            $http(req).then( 

                function(data){
          			
                	$scope.item.mi_fav = data.data;

                	if(data.data == 0) $scope.item.favs = parseInt($scope.item.favs)  - 1;
                	if(data.data == 1) $scope.item.favs = parseInt($scope.item.favs)  + 1;
                	
                    favService.setFav($scope.item.id, data.data);

                	Loading.ocultar()

                }, function(){
                    
                    ToastService.show('Ocurrio un error. Revisa la conexión a internet', 'long', 'center');   
                    Loading.ocultar()
                  
                }
            )

    	}

        $scope.goFb = function (){

            window.open(SERVER + 'redirect/?u=' + encodeURIComponent($scope.item.fb), '_system');
            
        };

        $scope.goSite = function (){

            window.open(SERVER + 'redirect/?u=' + encodeURIComponent($scope.item.site), '_system');

        };

    	$scope.goDir =  function (){

    		
    	   if ($window.google && $window.google.maps) {  
              navigateService.go('mapa', {type:'dir', item: $scope.item}  )
           }else{
              ToastService.show('Debes conectarte a internet para ver el mapa.', 'long', 'center');
           }
    	};

		$scope._set = function ($obj, $callback){

			_callback = $callback;
		
			$scope.item = $obj;
			//$scope.url_img = SERVER + 'img/pois/';
			Loading.mostrar();

			if(!angular.isUndefined($scope.item.tipo)){
                
				$scope.url_img = 'img/default/';
                //$scope.fotos_detalle = [$scope.item.tipo + '.png'];
				$scope.fotos_detalle = [];
				
			}else{
				$scope.fotos_detalle = [];

			}
			
			var  userId= $window.localStorage.getItem('userId');

			$http.get(SERVER+'ws.php?method=getDetalle&id=' + $scope.item.id + '&uid=' + userId).

			  success(function(data) {
					
					$scope.long_desc = '';	
					
					$scope.long_desc = data.long_desc;
					
					$timeout(function (){
						$scope.url_img = SERVER + 'img/pois/';
						$scope.fotos_detalle =  data.fotos;
					}, 500);
					//
					$scope.item = data;
					Loading.ocultar();
					_callback()

			  }).
			  
			  error(function() {
			  		$scope.long_desc = '';	
			  		$scope.url_img = 'img/default/';
					$scope.fotos_detalle = [$scope.item.tipo + '.png'];
			  		Loading.ocultar();
			  		_callback()
			  });

		};


		navigateService.setSecciones('detalle', $scope._set)

    }

    


  };
}]);
geobarApp.directive('home', ["$window", "navigateService", "ToastService", "SERVER", "$http", "arService", function ($window, navigateService, ToastService, SERVER, $http, arService) {
    return {
        restrict: 'E',
        templateUrl: 'directivas/secciones/home/home.html',
        scope: {},


        link: function (scope) {

            var _callback;
            var ya_cargo = false;
            scope.navigateService = navigateService;
            scope.arService = arService;
            scope.server = SERVER;
            scope.url_img_home = SERVER + 'img/home/';

            scope.realidad = function () {
                arService.mostrar()
            };

            scope._set = function ($obj, $callback) {
                _callback = $callback;

                if (ya_cargo) {
                    _callback();
                    return;
                }

                scope.goMapa = function () {

                    if ($window.google && $window.google.maps) {
                        scope.navigateService.go('mapa', {type: 'all'})
                    } else {
                        ToastService.show('Debes conectarte a internet para ver el mapa.', 'long', 'center');
                    }

                };

                $http.get(SERVER + 'ws.php?method=getHomeImagesApp').

                    success(function (data) {

                        scope.fotos_home = data;

                        ya_cargo = true;
                        if (scope.fotos_home.length == 0)  sin_fotos();
                        _callback()

                    }).

                    error(function () {
                        sin_fotos();
                        _callback();
                    });

            };


            function sin_fotos() {

                scope.url_img_home = 'img/default/';
                scope.fotos_home = ['home.png'];
            }

            navigateService.setSecciones('home', scope._set)


        }
    };
}]);
geobarApp.directive('lista', ["$window", "$log", "favService", "navigateService", "SCREEN_SIZE", "$filter", "$timeout", "lugaresService", "eventosService", function ($window, $log, favService, navigateService, SCREEN_SIZE, $filter, $timeout, lugaresService, eventosService) {

    return {
        restrict: 'E',
        templateUrl: 'directivas/secciones/lista/lista.html',

        link: function ($scope) {

            $scope.filtro = '';
            $scope.screen_alto = window.innerHeight;
            $scope.en_pagina = 10;
            $scope.favService = favService;

            $scope.$watch('favService.all', function () {
                $scope.favs = favService.getAll();
            });

            //console.log($scope.allFavs);
            // $scope.type = $obj

            var timer;
            var en_lista;
            $scope._set = function ($obj) {
                $scope.filtro = '';
                $scope.txtfiltro = '';
                document.querySelector('.listado').scrollTop = 0;
                $scope.en_pagina = 10;
                if ($obj == 'lugares')  $scope.array_items = lugaresService.get();
                if ($obj == 'eventos') $scope.array_items = eventosService.get();
                $scope.total = $scope.array_items.length;
                en_lista = $obj
            };

            $scope.$on('cambioListaLugares', function () {

                if (en_lista == 'lugares') $scope._set('lugares')

            });


            $scope.resetFiltro = function () {

                $scope.filtro = '';
                $scope.txtfiltro = '';

            };


            navigateService.setSecciones('lista', $scope._set);


            $scope.cargarMas = function () {

                setTimeout(function () {
                    $scope.en_pagina += 10;
                    $scope.$apply()
                }, 300);

            };


            $scope.keyDownFilter = function () {
                $timeout.cancel(timer);
                timer = $timeout(function () {
                    $scope.filtro = $scope.txtfiltro;
                    document.querySelector('.listado').scrollTop = 0;
                    $scope.en_pagina = 10;
                }, 300);
            };


            $scope.$watch('filtro', function () {

                try {
                    $scope.total = $filter('filter')($scope.array_items, $scope.filtro).length
                } catch (e) {
                }

            });


            var holder_scrolleable = angular.element(document.querySelector('.listado'));
            holder_scrolleable.on("scroll", function () {

                var _scrollTop = this.scrollTop; // por donde va el scroll
                var _offsetHeight = this.offsetHeight; // alto de la mascara
                var _scrollHeight = this.scrollHeight; // alto del contenido
                $scope.enscroll = _scrollTop;
                $scope.altoholder = _offsetHeight;
                if ((_offsetHeight + _scrollTop) > _scrollHeight - 300) {
                    $scope.en_pagina += 10;
                }
                $scope.$apply();

            });


            $scope.enscroll = 0;
            $scope.altoholder = 1000;

            $scope.select_item = function ($item) {
                $timeout(function () {
                    navigateService.go('detalle', $item);
                }, 250);


            }
        }
    };
}])

    .directive('itemLista', ["SERVER", function (SERVER) {
        return {
            restrict: 'A',
            scope: {

                item: '=',
                index: '@',
                enscroll: '=',
                altoholder: '=',
                siempreVisible: '@',
                favs: '='
            },

            templateUrl: 'directivas/secciones/lista/itemLista.html',
            link: function ($scope) {

                $scope.img_url = SERVER + 'pic/?file=pois/';

                $scope.getFav = function ($fav) {
                    if (angular.isUndefined($fav)) return 0;
                    return $fav;
                }

            }

        };

    }]);


    geobarApp.directive('mapa', ["$cordovaNetwork", "$q", "$timeout", "$rootScope", "navigateService", "ToastService", "lugaresService", "eventosService", "DistancePostion", "cordovaGeolocationService", "$window", function($cordovaNetwork, $q, $timeout,$rootScope, navigateService, ToastService, lugaresService, eventosService, DistancePostion, cordovaGeolocationService, $window) {
      

      function load_script() {

           document.getElementById('gMapsScripts').innerHTML = '';

            var s = document.createElement('script'); // use global document since Angular's $document is weak
            s.id = 'gMaps' ;
            s.type = "text/javascript";
            s.src = 'https://maps.googleapis.com/maps/api/js?sensor=true&key=AIzaSyBxU2t0W9wQFwPnGmoXNI-eg95zCy_PiJI&callback=initMap';
            document.getElementById('gMapsScripts').appendChild(s);

       }

      function lazyLoadApi() {

          var deferred = $q.defer();
          $window.initMap = function () {
              $timeout(function(){

                 deferred.resolve();

              })
          };
        
          load_script();

          return deferred.promise;
      }


      return {

        restrict: 'AE',
        scope: {},
        templateUrl: 'directivas/secciones/mapa/mapa.html',

        link: function (scope){

            var map;
            var mapa_ya_inicializado = false;
            var array_markers =  [];
            var myMarker  = null;
            var bounds;
            var mapa_type = '';
            var directionsDisplay;
            var directionsService;
            var map_circle;
            scope.itemSelected  = null;
            scope.navigateService = navigateService;

            scope.goInfo = function (){

              navigateService.go('detalle',  scope.itemSelected);
                
            };
            scope.goDir =  function (){

              navigateService.go('mapa', {type:'dir', item: scope.itemSelected});
              
            };
            scope.goTel =  function (){

              $window.open('tel://' + scope.itemSelected.tel);
              
            };

            function initialize() {
                
                    var mapOptions = {
                        zoom: 15,
                        center: new google.maps.LatLng(-34.397, 150.644),
                        mapTypeControl:false,
                        streetViewControl:false,
                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                        styles:[
                                  {
                                      featureType: "poi",
                                      elementType: "labels",
                                      stylers: [
                                            { visibility: "off" }
                                      ]
                                  }
                               ]

                    };

                    directionsService = new google.maps.DirectionsService();
                    directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers:true});
                    map = new google.maps.Map(document.getElementById('el-mapa'),  mapOptions);
                 
                    mapa_ya_inicializado = true
            }


            function _dispose(){
                for (var i in array_markers) {
                  array_markers[i].setMap(null);
                }
                if(myMarker != null) myMarker.setMap(null);

                directionsDisplay.setMap(null);
            }


            function agregar_marcador($item){

                var tipo;
                switch($item.tipo){
                  case '1': tipo='bar'; break;
                  case '2': tipo='restaurant'; break;
                  case '3': tipo='cine' ;break;
                  case '4': tipo='evento' ;break;
                  case '5': tipo='teatro' ;break;
                }

                marker = new google.maps.Marker({
                  position: new google.maps.LatLng($item.lat, $item.lon),
                  map: map,
                  optimized: true, 
                  icon: {
                           url:'img/markers/' + tipo + '.png',
                           scaledSize: new google.maps.Size(30, 30),
                           anchor: new google.maps.Point(15,15)
                          }
                });

                array_markers.push(marker);
              
                if(mapa_type == 'all'){
                  
      
                  google.maps.event.addListener(marker, 'click', function(e) {

                    scope.itemSelected = $item;
                    scope.$apply();
                   
                  });


                }
               
                bounds.extend(marker.getPosition());
            }

           scope.$on('cambioListaLugares', function(){
               _dispose();
           }); 


           scope._set = function ($obj){       


                bounds = new google.maps.LatLngBounds(); 
                mapa_type = $obj.type;
                scope.itemSelected = null; 
             
                var my_pos = cordovaGeolocationService.getUltimaPosicion();

                $timeout(function (){
                    
                    _dispose();

                    array_markers = [];
 
                    if(my_pos != null){
                        
                        myMarker = new google.maps.Marker({
                                        position: new google.maps.LatLng(my_pos.coords.latitude, my_pos.coords.longitude),
                                        optimized: true, 
                                        icon: {
                                               url:'img/markers/yo.png',
                                                 scaledSize: new google.maps.Size(20, 30),
                                                 anchor: new google.maps.Point(10,30)
                                              }, 
                                        map: map });

                        bounds.extend(myMarker.getPosition());

                    }

                    try{
                         map_circle.setMap(null)
                    }catch(e){}


                    if(mapa_type == 'dir'){

                        agregar_marcador($obj.item);
                        directionsDisplay.setMap(map);
                        var stroke_color;
                        if($obj.item.tipo ==1) stroke_color = '#ff99ff';
                        if($obj.item.tipo ==2) stroke_color = '#EFE923';
                        if($obj.item.tipo ==3) stroke_color = '#28eaa4';
                        if($obj.item.tipo ==4) stroke_color = '#00ccff';
                        if($obj.item.tipo ==5) stroke_color = '#9282A8';

                        directionsDisplay.setOptions({polylineOptions:{strokeColor: stroke_color, strokeOpacity: 0.7, strokeWeight: 8}})
                        
                    } 
                    
                    if(mapa_type == 'item'){
                        
                        agregar_marcador($obj.item)  
              
                    } 

                    if(mapa_type == 'all'){

                        if(my_pos != null){

                           
                           var circleOptions = {
                              strokeColor: '#FF0000',
                              strokeOpacity: 0.1,
                              strokeWeight: 2,
                              fillColor: '#FF0000',
                              fillOpacity: 0.04,
                              map: map,
                              center: myMarker.getPosition(),
                              radius: ($window.localStorage.getItem('distancia')*1000)
                            };

                            map_circle = new google.maps.Circle(circleOptions);

                            //lugares
                            var lugares = lugaresService.getDistancia();
                            var cantidad_lugares = lugares.length;
                            for (i = 0; i < cantidad_lugares; i++) {  
                            
                            //  if(lugares[i].distancia <= $window.localStorage.getItem('distancia'))
                               agregar_marcador(lugares[i])
                              
                            }
                            
                            //eventos
                            var eventos = eventosService.getDistancia();
                            var cantidad_eventos = eventos.length;
                            for (i = 0; i < cantidad_eventos; i++) {  
                              //if(eventos[i].distancia <= $window.localStorage.getItem('distancia'))
                                agregar_marcador(eventos[i] )
                            }

                        } else {

                            ToastService.show('No hemos enctroado tu ubicación.', 'long', 'center');
                            map.setCenter(new google.maps.LatLng(-34.905754, -56.194327));
                            
                        }

                    }
                    
               
                   
                    $timeout(function (){
                       
                        google.maps.event.trigger(map, 'resize');

                        if($obj.type == 'item'){
                           map.setZoom(16);
                           map.setCenter(new google.maps.LatLng($obj.item.lat, $obj.item.lon));
                        }
                        else if(my_pos != null && $obj.type == 'dir'){
                             map.fitBounds(bounds);
                             ver_ruta()
                        }
                        else if(my_pos != null){

                            map.fitBounds(bounds);
                        }
                        else {}

                    }, 100);

                }, 600);
            };


            function ver_ruta() {
                
                  var request = {
                      origin: myMarker.getPosition(),
                      destination: array_markers[0].getPosition(),
                      
                      travelMode: google.maps.TravelMode['DRIVING']
                  };
                  directionsService.route(request, function(response, status) {
                    if (status == google.maps.DirectionsStatus.OK) {
                       directionsDisplay.setDirections(response);
                    }
                    console.log(status)
                  });
            }

           


            // lazy load maps           

            function init_with_lazy_load($callback){

              if ($window.google && $window.google.maps) {

                     if(!mapa_ya_inicializado) initialize();
                     if($callback != null)  $callback()
                } else {

                    lazyLoadApi().then(function () {
                        console.log('promise resolved');
                        if ($window.google && $window.google.maps) {
                           if(!mapa_ya_inicializado) initialize();
                           if($callback != null)  $callback()
                        } else {
                          console.log('gmaps not loaded');
                        }
                    }, function () {
                        console.log('promise rejected');
                    });
                }

            }
            


            $rootScope.$on('$cordovaNetwork:online', function(){

                init_with_lazy_load(null);

            });

            init_with_lazy_load(null);
            navigateService.setSecciones('mapa', scope._set);

            
        }
      };
    }]);
geobarApp.directive('reg', ["ToastService", "$rootScope", "Loading", "$http", "SERVER", "regService", "$cordovaDevice", "$cordovaFacebook", function(ToastService, $rootScope,  Loading,  $http, SERVER , regService, $cordovaDevice,  $cordovaFacebook) {
  

  return {

    restrict: 'EA',
    templateUrl: 'directivas/secciones/reg/reg.html',

  	scope : {
    
          showRegistro: '='

    },
      
    link: function (scope){

      regService.set(scope);

  	  scope.visible = true;
  	  scope.chkEdad = false;

      scope.reg = {};
      scope.reg.sexo = 'female';
      scope.sexoF = true;
      
      scope.fb = function (){


       $cordovaFacebook.login(["public_profile", "email", "user_friends"])

        .then(function() {

            Loading.mostrar();
            $cordovaFacebook.api("me?fields=id,first_name,last_name,email,gender", ["public_profile"])
            .then(function(data) {

              var objSend = {

                  uid : data.id, 
                  nombre: data.first_name, 
                  apellido: data.last_name, 
                  email: data.email,
                  sexo: data.gender

              };
       
               objSend.uuid = 'dev';
               objSend.platform = 'browser';
               try{
                objSend.uuid =  $cordovaDevice.getUUID();
                objSend.platform = $cordovaDevice.getPlatform()
               }catch(e){}

            var  req = {
                 method: 'POST',
                 url: SERVER + 'ws.php?method=saveUser',
                 headers: {
                   'Content-Type':  'application/x-www-form-urlencoded;charset=utf-8'
                 },
                 data: objSend
            };

            $http(req).then( 

                function(data){
                    
                    window.localStorage.setItem('userId',  parseInt(data.data));
                    scope.userId = parseInt(data.data);
                    $rootScope.userId = parseInt(data.data);
                    ToastService.show('Gracias por registrarte', 'long', 'center');   
                    Loading.ocultar();
                    scope.showRegistro = false;
                    regService.callback_ok()


                }, function(){
                    Loading.ocultar()
                  
                }
            );
                 
            }, function () {
               Loading.ocultar();
            });

        }, function (error) {
         
        });



      };
      scope.mostrar = function(){

        scope.showRegistro = true
         
      };

      scope.omitir = function(){

        scope.showRegistro = false;

        regService.callback_cancel()
  
          
      };

      scope.elegirSexo = function ($sexo){

        scope.reg.sexo = $sexo;

        if($sexo=='male'){
          scope.sexoF = false;
          scope.sexoM = true
        }else{
          scope.sexoF = true;
          scope.sexoM = false
        }

        scope.$apply();

      };

      scope.enviar = function(){



          scope.errorNombre = false;
          scope.errorApellido = false;
          scope.errorEmail = false;
          scope.errorCi = false;
          scope.errorNac = false;
         
          if(scope.reg.nombre == '' || angular.isUndefined(scope.reg.nombre))  scope.errorNombre = true;
          if(scope.reg.apellido == '' || angular.isUndefined(scope.reg.apellido))  scope.errorApellido = true;
          if(scope.reg.email == '' || angular.isUndefined(scope.reg.email) || !validateEmail(scope.reg.email))  scope.errorEmail = true;
          if(scope.reg.ci == '' || angular.isUndefined(scope.reg.ci) || !validate_ci(scope.reg.ci))  scope.errorCi = true;

          if( angular.isUndefined(scope.reg.nac))  scope.errorNac = true;

          if(getAge(scope.reg.nac)<18){

             ToastService.show('Debes ser mayor de 18 años para registrarte.', 'long', 'center');
              return;

          }else if(scope.errorNombre || scope.errorApellido || scope.errorEmail ||  scope.errorCi || scope.errorNac) {

              ToastService.show('Hay campos incompletos o erroneos', 'long', 'center');
              return;
          }

          scope.reg.fehca_nac = scope.reg.nac.getFullYear()  + '-' + (scope.reg.nac.getMonth()+1) + '-' + scope.reg.nac.getDate();

          scope.reg.uuid = 'dev';
          scope.reg.platform = 'browser';

          try{
            scope.reg.uuid =  $cordovaDevice.getUUID();
            scope.reg.platform = $cordovaDevice.getPlatform()
          }catch(e){}

          var  req = {
               method: 'POST',
               url: SERVER + 'ws.php?method=saveUser',
               headers: {
                 'Content-Type':  'application/x-www-form-urlencoded;charset=utf-8'
               },
               data: scope.reg
          };
          
          Loading.mostrar();

          $http(req).then( 

              function(data){
                  
                  window.localStorage.setItem('userId',  parseInt(data.data));
                  scope.userId = parseInt(data.data);
                 
                  ToastService.show('Gracias por registrarte', 'long', 'center');   
                  Loading.ocultar();
                  scope.showRegistro = false;
                  regService.callback_ok();
                  $rootScope.userId = parseInt(data.data);

              }, function(){
                  Loading.ocultar()
                
              }
          );

   };



    function validateEmail(email) { 
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    function getAge(dateString) 
    {
        var today = new Date();
        var birthDate = dateString;
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
        {
            age--;
        }
        return age;
    }



      function validation_digit(ci){
         var a = 0;
        var i = 0;
        if(ci.length <= 6){
          for(i = ci.length; i < 7; i++){
            ci = '0' + ci;
          }
        }
        for(i = 0; i < 7; i++){
          a += (parseInt("2987634"[i]) * parseInt(ci[i])) % 10;
        }
        if(a%10 === 0){
          return 0;
        }else{
          return 10 - a % 10;
        }
      }

      
      function validate_ci(ci){
        ci = clean_ci(ci);
        var dig = ci[ci.length - 1];
        ci = ci.replace(/[0-9]$/, '');
        return (dig == validation_digit(ci));
      }



      function clean_ci(ci){
        return ci.replace(/\D/g, '');
      }



    }
   
  };
}]); 
geobarApp.directive('taxi', function() {

  return {
    restrict: 'EA',
    templateUrl: 'directivas/secciones/taxi/taxi.html',
	
    
    link:function (scope){

	   	scope.visible = true;

      scope.voyentaxi = function(){

         try{
          if(device.platform=="Android")  window.open('https://play.google.com/store/apps/details?id=info.voyentaxi', '_system');
          else                            window.open('https://itunes.apple.com/us/app/voy-en-taxi/id939470696?l=es&ls=1&mt=8', '_system');
         }catch(e){}
        
      };

      scope.easytaxi = function(){
          try{
            if(device.platform=="Android")  window.open('https://play.google.com/store/apps/details?id=br.com.easytaxi&referrer=adjust_reftag%3DcR558mQRWJVnN', '_system');
            else                            window.open('https://itunes.apple.com/app/id567264775?mt=8', '_system');
          }catch(e){}
      }

    }
   

  };
}); 
geobarApp.directive('terms', ["ToastService", function(ToastService) {
  

  return {
    restrict: 'EA',
    templateUrl: 'directivas/secciones/terms/terms.html',

   scope : {

		aceptoTerms: '='

	 },
    
    link:function (scope){

	  scope.visible = true;
	  scope.chkEdad = false;

      scope.aceptar = function(){

      	if( scope.chkEdad == 1){

      		window.localStorage.setItem('aceptoTerms', 1);
      		scope.aceptoTerms = 1;
      		
      	}else{

      		ToastService.show('Debes ser mayor de 18 años para usar esta aplicación.', 'long', 'center');

      	}
        	
      }


    }
   

  };
}]); 
;window.onerror = function(message, file, line) {
  var error = [];
  error.push('---[error]');
  if (typeof message == "object") {
    var keys = Object.keys(message);
    keys.forEach(function(key) {
      error.push('[' + key + '] ' + message[key]);
    });
  } else {
    error.push(line + ' at ' + file);
    error.push(message);
  }
  alert(error.join("\n"));
};

var app = {

    initialize: function() {
        
        this.bindEvents();
       
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    
    onDeviceReady: function() { 
      
        try{

            window.open = cordova.InAppBrowser.open;
            angular.bootstrap(document, ["geobarApp"]);

          }catch(e){

            angular.bootstrap(document, ["geobarApp"]);

        }

    }
};




app.initialize();