geobarApp.factory('lugaresService', function($window, cordovaGeolocationService, DistancePostion){

	var all = [];
    var all_a_distancia = [];
    var distancia_cargada = 5000;

	return {

		setAll: function() {

            distancia_cargada = $window.localStorage.getItem('distancia');

            var bares = $window.localStorage.getItem('bares');
            var restaurantes = $window.localStorage.getItem('restaurantes');
            var cines = $window.localStorage.getItem('cines');
            var teatro = $window.localStorage.getItem('cines');

            var array_entero =  JSON.parse( window.localStorage.getItem('json_lugares'));
            var cantidad_lugares = array_entero.length;
            all = [];
            all_a_distancia =  [];
            for(var i=0; i<cantidad_lugares; i++){

               if(array_entero[i].tipo == 1 && bares==1) this.addPoiToAll(array_entero[i]); 
               if(array_entero[i].tipo == 2 && restaurantes==1) this.addPoiToAll(array_entero[i]);
               if(array_entero[i].tipo == 3 && cines==1) this.addPoiToAll(array_entero[i]);
               if(array_entero[i].tipo == 5 && teatro==1) this.addPoiToAll(array_entero[i]);
              
            }

            all.sort(this.compare);


        },

        compare : function (a, b) {
        
          if(typeof(a.distancia) != 'undefined'){

              if (a.distancia < b.distancia)
                return -1;
              if (a.distancia > b.distancia)
                return 1;
          }
        
           return 0;

        }, 

     

        addPoiToAll:function ($poi){

            var my_pos = cordovaGeolocationService.getUltimaPosicion();
        
            if(my_pos!=null){

                var d = DistancePostion.enKilometros(my_pos.coords.latitude, my_pos.coords.longitude, $poi.lat, $poi.lon);
                $poi['distancia'] = d;
                
                if(d <= distancia_cargada){

                    var nuevoPoi = $poi;
                        nuevoPoi.name = nuevoPoi.name.replace(/"/g, "´");
                        nuevoPoi.dir = nuevoPoi.dir.replace(/"/g, "´");
                        all_a_distancia.push(nuevoPoi)

                }

                    

            }



            all.push($poi);  



        },

        getDistancia: function() {
            return all_a_distancia;
        },

        get: function() {
            return all;
        }
    };

});

geobarApp.factory('eventosService', function(cordovaGeolocationService, DistancePostion, $window){

    var all = [];
    var all_a_distancia =   [];
    var distancia_cargada;

    return {
        
        setAll: function() {

            distancia_cargada = $window.localStorage.getItem('distancia');

            var array_entero  = JSON.parse( window.localStorage.getItem('json_eventos'));

            var cantidad = array_entero.length;
            all = [];
            all_a_distancia =   [];

            var my_pos = cordovaGeolocationService.getUltimaPosicion();
            
            for(var i=0; i<cantidad; i++){

                if(my_pos!=null){

                    var dist = DistancePostion.enKilometros(my_pos.coords.latitude, my_pos.coords.longitude, array_entero[i].lat, array_entero[i].lon);
                    array_entero[i]['distancia'] = dist
                   

                }

                var d = new Date();
                var hoy = new Date(d.getFullYear(),d.getMonth(), d.getDate());

                //2015-03-08 00:00:00
                var array_pub_ini =  String(array_entero[i].pub_ini).split(' ');
                var fecha_pub_ini =  array_pub_ini[0].split('-');
                var pub_ini = new Date(Number(fecha_pub_ini[0]), Number(fecha_pub_ini[1])-1, Number(fecha_pub_ini[2]));

                var array_pub_fin =  String(array_entero[i].pub_fin).split(' ');
                var fecha_pub_fin =  array_pub_fin[0].split('-');
                var pub_fin = new Date(Number(fecha_pub_fin[0]), Number(fecha_pub_fin[1])-1, Number(fecha_pub_fin[2]));

                if(hoy.getTime() >= pub_ini.getTime() && hoy.getTime()<= pub_fin.getTime()){

                    all.push(array_entero[i]);  

                    if(dist <= distancia_cargada){
                        var nuevoPoi = array_entero[i];
                            nuevoPoi.name = nuevoPoi.name.replace(/"/g, "´");
                            nuevoPoi.dir = nuevoPoi.dir.replace(/"/g, "´");
                            all_a_distancia.push(nuevoPoi)
                    }
                }
            }

            all.sort(this.compare);
            

        },

        compare : function (a, b) {
    
              if(typeof(a.distancia) != 'undefined'){

                  if (a.distancia < b.distancia)
                    return -1;
                  if (a.distancia > b.distancia)
                    return 1;
              }
            
              return 0;

        }, 

        getDistancia: function() {
            return all_a_distancia;
        },
        get: function() {
            return all;
        }
    };

});

