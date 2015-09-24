geobarApp.directive('config', function($rootScope, ToastService, $cordovaPush, $timeout, $cordovaNetwork, $window, $http, lugaresService, eventosService, SERVER, Loading) {
  
  return {
    restrict: 'E',
    templateUrl: 'directivas/secciones/config/config.html',
	  scope:{caca:'@'},
    
    link:function (scope, elem, attrs){
      
      scope.screen_alto = window.innerHeight
	   	scope.visible = true;
      
      scope.chkBares = $window.localStorage.getItem('bares')
      scope.chkRestaurantes = $window.localStorage.getItem('restaurantes')
      scope.chkCines = $window.localStorage.getItem('cines')
      scope.chkTeatros = $window.localStorage.getItem('teatros')
      scope.distancia = $window.localStorage.getItem('distancia')
		  scope.chkPush = $window.localStorage.getItem('push')

      scope.$watch('distancia', function($a, $b){
     
        $window.localStorage.setItem('distancia',  scope.distancia);
           
        lugaresService.setAll()
        eventosService.setAll()
        
      })


      scope.setPush = function($clave, $val){

          var isOnline;

          try{
            
            isOnline = $cordovaNetwork.isOnline();

          }catch(e){

            isOnline = true;
          }

          if(isOnline) {
              
              scope.update($clave, $val);


              if($val){

                     var iosConfig = {
                        "badge": true,
                        "sound": true,
                        "alert": true,
                     };

                      $cordovaPush.register(iosConfig).then(function(deviceToken) {
                      
                        alert(deviceToken);
                         

                      }, function(err) {
                       
                        alert("Registration error: " + err)

                      });
             }
                       
          }else{
              
               ToastService.show('Debes conectarte a internet para llevar a cabo esta acción.', 'long', 'center');
             
               $timeout(function(){
                    scope.chkPush = $val==1?0:1;
               })
          }
          
      }


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
          }   

          $http(req).then( 

              function(data){
                  Loading.ocultar()

              }, function(){
                  Loading.ocultar()
                
              }
          );

          
        }

        $window.localStorage.setItem($clave,  $val);
        lugaresService.setAll()
        $rootScope.$broadcast('cambioListaLugares');


      }

      

    }, 
  

  };
});