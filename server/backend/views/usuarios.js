
app.controller('UsuariosCtrl', function($scope, $http, $document, $routeParams, Upload, $rootScope, $mdDialog, $window) {



    $rootScope.seccion = 'LISTA DE USUARIOS';
    $scope.envio = {};

    $scope.options = {
      scrollbarH: true,
      footerHeight: false,
      rowHeight: 50,
      scrollbarV: false
    };

    $http.get('../ws.php?method=getAllUsuarios').
      
          success(function(data, status, headers, config) {
          
               $scope.data  = data


               console.log($scope.data)
          }).
          error(function(data, status, headers, config) {
             $scope.array_usuarios = []
          });



});




