
    geobarApp.directive('mapa', function($cordovaNetwork, $q, favService, $timeout,$rootScope, navigateService, ToastService, lugaresService, eventosService, DistancePostion, cordovaGeolocationService, $window) {
      

      function load_script() {

           document.getElementById('gMapsScripts').innerHTML = '';

            var s = document.createElement('script'); // use global document since Angular's $document is weak
            s.id = 'gMaps' ;
            s.type = "text/javascript";
            s.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBxU2t0W9wQFwPnGmoXNI-eg95zCy_PiJI&callback=initMap';
            document.getElementById('gMapsScripts').appendChild(s);

       }

      function lazyLoadApi() {

          var deferred = $q.defer();
          $window.initMap = function () {
              $timeout(function(){

                 deferred.resolve();

              })
          };
        
          load_script();

          return deferred.promise;
      }


      return {

        restrict: 'AE',
        scope: {},
        templateUrl: 'directivas/secciones/mapa/mapa.html',

        link: function (scope){

            var map;
            var mapa_ya_inicializado = false;
            var array_markers =  [];
            var myMarker  = null;
            var bounds;
            var mapa_type = '';
            var directionsDisplay;
            var directionsService;
            var map_circle;
            scope.favService = favService;

            scope.itemSelected  = null;
            scope.navigateService = navigateService;

            scope.goInfo = function (){

              navigateService.go('detalle',  scope.itemSelected);
                
            };
            scope.goDir =  function (){

              navigateService.go('mapa', {type:'dir', item: scope.itemSelected});
              
            };
            scope.goTel =  function (){

              $window.open('tel://' + scope.itemSelected.tel);
              
            };

            scope.$watch('favService.all', function () {
                scope.favs = favService.getAll();
            });

            function initialize() {
                
                    var mapOptions = {
                        zoom: 15,
                        center: new google.maps.LatLng(-34.397, 150.644),
                        mapTypeControl:false,
                        streetViewControl:false,
                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                        styles:[
                                  {
                                      featureType: "poi",
                                      elementType: "labels",
                                      stylers: [
                                            { visibility: "off" }
                                      ]
                                  }
                               ]

                    };

                    directionsService = new google.maps.DirectionsService();
                    directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers:true});
                    map = new google.maps.Map(document.getElementById('el-mapa'),  mapOptions);
                 
                    mapa_ya_inicializado = true
            }


            function _dispose(){
                for (var i in array_markers) {
                  array_markers[i].setMap(null);
                }
                if(myMarker != null) myMarker.setMap(null);

                directionsDisplay.setMap(null);
            }


            function agregar_marcador($item){

                var tipo;
                switch($item.tipo){
                  case '1': tipo='bar'; break;
                  case '2': tipo='restaurant'; break;
                  case '3': tipo='cine' ;break;
                  case '4': tipo='evento' ;break;
                  case '5': tipo='teatro' ;break;
                }

                marker = new google.maps.Marker({
                  position: new google.maps.LatLng($item.lat, $item.lon),
                  map: map,
                  optimized: true, 
                  icon: {
                           url:'img/markers/' + tipo + '.png',
                           scaledSize: new google.maps.Size(30, 30),
                           anchor: new google.maps.Point(15,15)
                          }
                });

                array_markers.push(marker);
              
                if(mapa_type == 'all'){
                  
      
                  google.maps.event.addListener(marker, 'click', function(e) {

                    scope.itemSelected = $item;
                    scope.$apply();
                   
                  });


                }
               
                bounds.extend(marker.getPosition());
            }

           scope.$on('cambioListaLugares', function(){
               _dispose();
           }); 


           scope._set = function ($obj){       


                bounds = new google.maps.LatLngBounds(); 
                mapa_type = $obj.type;
                scope.itemSelected = null; 
             
                var my_pos = cordovaGeolocationService.getUltimaPosicion();

                $timeout(function (){
                    
                    _dispose();

                    array_markers = [];
 
                    if(my_pos != null){
                        
                        myMarker = new google.maps.Marker({
                                        position: new google.maps.LatLng(my_pos.coords.latitude, my_pos.coords.longitude),
                                        optimized: true, 
                                        icon: {
                                               url:'img/markers/yo.png',
                                                 scaledSize: new google.maps.Size(20, 30),
                                                 anchor: new google.maps.Point(10,30)
                                              }, 
                                        map: map });

                        bounds.extend(myMarker.getPosition());

                    }

                    try{
                         map_circle.setMap(null)
                    }catch(e){}


                    if(mapa_type == 'dir'){

                        agregar_marcador($obj.item);
                        directionsDisplay.setMap(map);
                        var stroke_color;
                        if($obj.item.tipo ==1) stroke_color = '#ff99ff';
                        if($obj.item.tipo ==2) stroke_color = '#EFE923';
                        if($obj.item.tipo ==3) stroke_color = '#28eaa4';
                        if($obj.item.tipo ==4) stroke_color = '#00ccff';
                        if($obj.item.tipo ==5) stroke_color = '#9282A8';

                        directionsDisplay.setOptions({polylineOptions:{strokeColor: stroke_color, strokeOpacity: 0.7, strokeWeight: 8}})
                        
                    } 
                    
                    if(mapa_type == 'item'){
                        
                        agregar_marcador($obj.item)  
              
                    } 

                    if(mapa_type == 'all'){

                        if(my_pos != null){

                           
                           var circleOptions = {
                              strokeColor: '#FF0000',
                              strokeOpacity: 0.1,
                              strokeWeight: 2,
                              fillColor: '#FF0000',
                              fillOpacity: 0.04,
                              map: map,
                              center: myMarker.getPosition(),
                              radius: ($window.localStorage.getItem('distancia')*1000)
                            };

                            map_circle = new google.maps.Circle(circleOptions);

                            //lugares
                            var lugares = lugaresService.getDistancia();
                            var cantidad_lugares = lugares.length;
                            for (i = 0; i < cantidad_lugares; i++) {  
                            
                            //  if(lugares[i].distancia <= $window.localStorage.getItem('distancia'))
                               agregar_marcador(lugares[i])
                              
                            }
                            
                            //eventos
                            var eventos = eventosService.getDistancia();
                            var cantidad_eventos = eventos.length;
                            for (i = 0; i < cantidad_eventos; i++) {  
                              //if(eventos[i].distancia <= $window.localStorage.getItem('distancia'))
                                agregar_marcador(eventos[i] )
                            }

                        } else {

                            ToastService.show('No hemos enctroado tu ubicación.', 'long', 'center');
                            map.setCenter(new google.maps.LatLng(-34.905754, -56.194327));
                            
                        }

                    }
                    
               
                   
                    $timeout(function (){
                       
                        google.maps.event.trigger(map, 'resize');

                        if($obj.type == 'item'){
                           map.setZoom(16);
                           map.setCenter(new google.maps.LatLng($obj.item.lat, $obj.item.lon));
                        }
                        else if(my_pos != null && $obj.type == 'dir'){
                             map.fitBounds(bounds);
                             ver_ruta()
                        }
                        else if(my_pos != null){

                            map.fitBounds(bounds);
                        }
                        else {}

                    }, 100);

                }, 600);
            };


            function ver_ruta() {
                
                  var request = {
                      origin: myMarker.getPosition(),
                      destination: array_markers[0].getPosition(),
                      
                      travelMode: google.maps.TravelMode['DRIVING']
                  };
                  directionsService.route(request, function(response, status) {
                    if (status == google.maps.DirectionsStatus.OK) {
                       directionsDisplay.setDirections(response);
                    }
                    console.log(status)
                  });
            }

           


            // lazy load maps           

            function init_with_lazy_load($callback){

              if ($window.google && $window.google.maps) {

                     if(!mapa_ya_inicializado) initialize();
                     if($callback != null)  $callback()
                } else {

                    lazyLoadApi().then(function () {
                        console.log('promise resolved');
                        if ($window.google && $window.google.maps) {
                           if(!mapa_ya_inicializado) initialize();
                           if($callback != null)  $callback()
                        } else {
                          console.log('gmaps not loaded');
                        }
                    }, function () {
                        console.log('promise rejected');
                    });
                }

            }
            


            $rootScope.$on('$cordovaNetwork:online', function(){

                init_with_lazy_load(null);

            });

            init_with_lazy_load(null);
            navigateService.setSecciones('mapa', scope._set);

            
        }
      };
    });