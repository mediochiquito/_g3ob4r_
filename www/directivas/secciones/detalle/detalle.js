geobarApp.directive('detalle', function(navigateService, ToastService, Loading, $http, SERVER, $window, $timeout, regService, favService) {
  
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
});