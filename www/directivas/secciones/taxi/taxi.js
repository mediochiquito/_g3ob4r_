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