geobarApp.directive('reg', function(ToastService, $rootScope,  Loading,  $http, SERVER , regService, $cordovaDevice,  $cordovaFacebook) {
  

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
}); 