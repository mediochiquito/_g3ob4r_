geobarApp.factory('regService', function(){

	var scope=null ;
	var _callback_ok= null;
	var _callback_cancel= null;

	return {

		set: function($scope) {

			scope = $scope

        },
        setCallbacks:  function($callback_ok, $callback_cancel){
        	_callback_ok = $callback_ok;
	 		_callback_cancel = $callback_cancel;
        }, 
	 	mostrar : function($callback_ok, $callback_cancel){
	 		_callback_ok = $callback_ok;
	 		_callback_cancel = $callback_cancel;
	 		scope.mostrar();
	 	},

	 	ocultar : function (){

	 		scope.mostrar()

	 	}, 

	 	callback_ok : function() {
	 		
	 		if(_callback_ok != null) _callback_ok()

	 	}, 

	 	callback_cancel : function() {

	 		if(_callback_cancel != null) _callback_cancel()

	 	}





	 }

})

