geobarApp.directive('detalle', function(navigateService, Loading, $http, SERVER, $window, $timeout) {
  
  return {
  	
    restrict: 'E',
    scope: {},
    templateUrl: 'directivas/secciones/detalle/detalle.html',

    link:function ($scope, $elem, $attrs){
		
    	var _callback
    	$scope.navigateService = navigateService;
    
    	$scope.goMapa = function (){
    		
    		navigateService.go('mapa', {type:'item', item: $scope.item});
    		
    	}
    	
    	$scope.goTel =  function (){

    		$window.open('tel://' + $scope.item.tel);
    		
    	}

    	$scope.goDir =  function (){

    		navigateService.go('mapa', {type:'dir', item: $scope.item});
    		
    	}

		$scope._set = function ($obj, $callback){

			_callback = $callback;
		
			$scope.item = $obj;
			//$scope.url_img = SERVER + 'img/pois/';
			Loading.mostrar();



			if(!angular.isUndefined($scope.item.tipo)){

				$scope.url_img = 'img/default/';
				$scope.fotos_detalle = [$scope.item.tipo + '.png'];
				
			}else{
				$scope.fotos_detalle = [];

			}
			


			$http.get(SERVER+'ws.php?method=getDetalle&id=' + $scope.item.id).

			  success(function(data, status, headers, config) {
					
					$scope.long_desc = '';	
					
					$scope.long_desc = data.long_desc;
					
					$timeout(function (){
						$scope.url_img = SERVER + 'img/pois/';
						$scope.fotos_detalle =  data.fotos;
					}, 500)
					//
					$scope.item = data
					Loading.ocultar();
					_callback()

			  }).
			  
			  error(function(data, status, headers, config) {
			  		$scope.long_desc = '';	
			  		$scope.url_img = 'img/default/';
					$scope.fotos_detalle = [$scope.item.tipo + '.png']
			  		Loading.ocultar();
			  		_callback()
			  });

		}


		navigateService.setSecciones('detalle', $scope._set)

    }

    


  };
});