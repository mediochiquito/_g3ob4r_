geobarApp.directive('botonBase', function() {
  return {
    
    restrict: 'AE', 
    scope: {
    		habil: '@',
    		accion: '&'
	},
    link: function(scope, elem){

    	if(typeof scope.habil == 'undefined') scope.habil = true;
    	elem.bind('touchstart', function(){
            if(!elem.hasClass('botonDisabled')){
                elem.addClass('botonOver');
              
                scope.$apply();

              try{
                if(device.platform == 'Android')  navigator.vibrate(50)    
            }catch(e){}
            
            }
    	});

    	elem.on('touchend', function(){
    		elem.removeClass('botonOver');
              scope.accion();
               scope.$apply()
    	})

        
    }
  };
});