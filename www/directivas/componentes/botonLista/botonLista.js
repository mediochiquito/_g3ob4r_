geobarApp.directive('botonLista', function() {
  return {
    
    restrict: 'A', 
  
    link: function(scope, elem){

        function touch_move(){

             elem.removeClass('botonListaOver');
             elem.unbind('touchmove', touch_move)
        }
    	elem.bind('touchstart', function(){
            try{
                 elem.unbind('touchmove', touch_move);
                  elem.removeClass('botonListaOver')
            }catch(e){}
            elem.bind('touchmove', touch_move);
            elem.addClass('botonListaOver');

         try{
                if(device.platform == 'Android')  navigator.vibrate(50)    
            }catch(e){}
            
    	});

    	elem.on('touchend', function(){
          
    		  elem.removeClass('botonListaOver');
              elem.unbind('touchmove', touch_move)  
    	})

    }
  };
});