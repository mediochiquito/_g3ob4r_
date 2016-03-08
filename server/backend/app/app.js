
var app = angular.module('adminApp', ['ngAnimate', 'ngMaterial', 'ngRoute', 'ngFileUpload', 'mdDataTable'])

.config(['$routeProvider', '$mdThemingProvider',
 
  function($routeProvider, $mdThemingProvider) {
   

    $routeProvider.
      when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      }).
      when('/pois', {
        templateUrl: 'views/pois.html',
        controller: 'PoisCtrl'
      }).
      when('/push', {
        templateUrl: 'views/push.html',
        controller: 'PushCtrl'
      }).
      when('/usuarios', {
        templateUrl: 'views/usuarios.html',
        controller: 'UsuariosCtrl'
      }).
      when('/pois/:poiID', {
        templateUrl: 'views/pois.html',
        controller: 'PoisCtrl'
      }).
      otherwise({
        redirectTo: '/pois'
      });

      $mdThemingProvider.theme('default')
        .primaryPalette('grey')
        .accentPalette('deep-purple');
      }

 ])





.controller('AppCtrl', function($scope, $document, $rootScope, $mdSidenav) {

    $scope.nombreSeccion = ''
    $scope.rootScope = $rootScope;
    $scope.cargando = false
    $rootScope.cargando = false;
    $rootScope.$watch('cargando', function (){
      $scope.cargando = $rootScope.cargando
    })
    
    $scope.openMenu = function (){
   
       $mdSidenav('left').open()
    } 
    $scope.closeMenu = function (){
   
       $mdSidenav('left').close()
    }



})

window.addEventListener("dragover",function(e){
  e = e || event;
  e.preventDefault();
},false);
window.addEventListener("drop",function(e){
  e = e || event;
  e.preventDefault();
},false);