
app.controller('PushCtrl', function($scope, $http, $document, $routeParams, Upload, $rootScope, $mdDialog, $window) {



    $rootScope.seccion = 'NOTIFICACIONES PUSH';
    $scope.envio = {};
    $scope.array_envios = []
    $http.get('../ws.php?method=getAllEnvios').
      
          success(function(data, status, headers, config) {
            if(data != 'null')
               $scope.array_envios = data
          }).
          error(function(data, status, headers, config) {
             $scope.array_envios = []
          });


     $http.get('../ws.php?method=getListaAllPois').
      
          success(function(data, status, headers, config) {
              $scope.array_pois = data
            
          }).
          error(function(data, status, headers, config) {
             $scope.array_pois = []
          });


    $scope.lanzar = function($id, ev){

      var confirm = $mdDialog.confirm()
                                        .parent(angular.element(document.body))
                                        .title('Alerta')
                                        .content('Seguro que quieres enviar esta notificación?')
                                        .ariaLabel('eliminar confirm')
                                        .ok('Aceptar')
                                        .cancel('Cancelar')
                                        .targetEvent(ev);
          
           $mdDialog.show(confirm).then(function() {
              
              document.location.href = "../send_push.php?id=" + $id

          }, function() { });

       

    }


    $scope.submitForm = function() {
     	      
        $rootScope.cargando = true;   
        var  req = {
             method: 'POST',
             url: '../ws.php?method=saveEnvio',
             headers: {
               'Content-Type':  'application/x-www-form-urlencoded;charset=utf-8'
             },
             data: $scope.envio
        }   

        $http(req).then( 
            function(data){
                $rootScope.cargando = false;    
                $scope.array_envios.unshift($scope.envio)  ; 
                $scope.envio.envios_id = data.data;
                $scope.envio = {};
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

  /*  $scope.eliminar = function ($item, ev){

       

    }*/



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
          templateUrl: 'views/push-form.html',
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

