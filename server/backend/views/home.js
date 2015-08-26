

app.controller('HomeCtrl', function($scope, $http, $document, $routeParams, Upload, $rootScope, $mdDialog) {

	$scope.array_img = [];
    $rootScope.seccion = 'Imagenes del home';
    $scope.img = {};
  
   
    $http.get('../ws.php?method=getHomeImages').
      
          success(function(data, status, headers, config) {
               $scope.array_img = data
          }).
          error(function(data, status, headers, config) {
             $scope.array_img = []
          });


   $http.get('../ws.php?method=getListaAllPois').
      
          success(function(data, status, headers, config) {
              $scope.array_pois = data
            
          }).
          error(function(data, status, headers, config) {
             $scope.array_pois = []
          });



	$scope.$watch('img.home_activo', function (a, d) {
	    
	      if(a==1)  $scope.img.home_activo = true;
	      else  $scope.img.home_activo = false;

	});

	$scope.$watch('filesImg', function () {
         
         try{
             $scope.upload($scope.filesImg, 'filesImg');
         }catch(e){}
       
    });

    $scope.upload = function (files, $type) {

       if (files && files.length) {

            var cant_subir = files.length;
            var subidas = 0;

            for (var i = 0; i < cant_subir; i++) {

                var file = files[i];
            
                Upload.upload({
                    url: '../ws.php?method=uploadImgHome',
                    file: file
                }).progress(function (evt) {
                	$rootScope.cargando = true;  
                }).success(function (data, status, headers, config) {

                    if($scope.img.home_img  == null){
                      $scope.img.home_img  = "";
                    }

                    if($type == 'filesImg')  $scope.img.home_img  = data;
                    subidas++;
                    if(subidas==cant_subir)  $rootScope.cargando = false;     
                   
                }).error(function (data, status, headers, config) {
                    console.log('error status: ' + status);
                })

            }
        }
    };


    $scope.submitForm = function() {
     	      
        $rootScope.cargando = true;   
        var  req = {
             method: 'POST',
             url: '../ws.php?method=saveImgHome',
             headers: {
               'Content-Type':  'application/x-www-form-urlencoded;charset=utf-8'
             },
             data: $scope.img
        }   

        $http(req).then( 
            function(data){
                $rootScope.cargando = false;    
                if( $scope.img.home_id == null) $scope.array_img.unshift($scope.img)  ; 
                $scope.img.home_id = data.data;
                $scope.img = {};
                $mdDialog.hide();
            }, function(){
               $rootScope.cargando = false;
            }
        );

    };

    $scope.add = function ($e){
        $scope.img = {}
        $scope.showForm($e)
    }

    $scope.eliminar = function ($item, ev){

        var confirm = $mdDialog.confirm()
                                        .parent(angular.element(document.body))
                                        .title('Alerta')
                                        .content('Seguro que quieres eliminar esta iamgen?')
                                        .ariaLabel('eliminar confirm')
                                        .ok('Aceptar')
                                        .cancel('Cancelar')
                                        .targetEvent(ev);
          
           $mdDialog.show(confirm).then(function() {
              
              $rootScope.cargando = true;    
             
              var  req = {
                   method: 'POST',
                   url: '../ws.php?method=delHomeImg',
                   headers: {
                     'Content-Type':  'application/x-www-form-urlencoded;charset=utf-8'
                   },
                   data: $item
              }   

              $http(req).then( 
                  function(data){

                      $rootScope.cargando = false;    
                      $item.home_eliminado = 1;
                      
                  }, function(){

                     $rootScope.cargando = false;   

                  }
              );


          }, function() { });

    }



    $scope.editar = function ($item, $e){

        $scope.img = $item;
        $scope.showForm($e)

    }


      $scope.hide = function() {
        $mdDialog.hide();
      };
      $scope.cancel = function() {
        $mdDialog.cancel();
      };
      $scope.answer = function(answer) {
        $mdDialog.hide(answer);
      };


     $scope.showForm = function(e) {
        
        $mdDialog.show({
      
         scope: $scope, 
          templateUrl: 'views/formImgHome.html',
          preserveScope :true,
          parent: angular.element(document.body), 
          targetEvent: e,
         
        })

        .then(function(answer) {
            // $scope.alert = 'You said the information was "' + answer + '".';
        }, function() {
            // $scope.alert = 'You cancelled the dialog.';
        });
      };

     

});

