geobarApp.directive('terms', function(ToastService) {
  

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
}); 