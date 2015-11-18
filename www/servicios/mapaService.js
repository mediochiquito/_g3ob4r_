geobarApp.service('mapaService', function(){

	var map = null;
	this.init = function(){
		try{
			map = plugin.google.maps.Map.getMap();
            map.on(plugin.google.maps.event.MAP_READY, function () {
                map.setClickable( false );
            });
		}catch(e){}
            
	};


 	this.mostrar = function(){

 		var div = document.getElementById('map_canvas');
 			div.style.height = (window.innerHeight-80) + 'px';

 		if(map){
 			map.setVisible(true);
 			map.setClickable(true);
 			map.setDiv(div);
 			map.refreshLayout();

 			var onSuccess = function(location) {

				    map.setOptions({
					  'controls': {
					    'compass': true,
					    'myLocationButton': true,
					    'zoom': true // Only for Android
					  }
					});
				  
					map.animateCamera({
					  'target': location.latLng,
					  'duration': 2000
					}, function() {
					
					});

			};

			var onError = function(msg) {
			  alert("error: " + msg);
			};

			map.getMyLocation(onSuccess, onError);


 		}




 	};


 	this.ocultar = function (){

 		if(map) {
 			map.setVisible(false);
 			map.setClickable( false );
 			
 		}

 	}

});
