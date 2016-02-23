geobarApp.directive('elLoading', function(Loading){
				return {
					restrict:'E',
					template:'<div><img src="img/loader.png" /></div>',

					compile:function(element, attributes){
						
						Loading.setInstancia(element);

					}
				}
});