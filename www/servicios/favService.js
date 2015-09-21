geobarApp.service('favService', function($window){

    this.all = {};
   
    this.setAll = function(){ 
        this.all =  JSON.parse( $window.localStorage.getItem('favs'));
    }

    this.getAll = function (){
        return  this.all 
    }
    this.getCantFavPoriId = function($idPoi) {
        return this.all['p_' + $idPoi];
    }

    this.setFav =  function($idPoi, $val) {

        var valor_actual = 0;
        if(!angular.isUndefined(this.all['p_' + $idPoi])){
            valor_actual =  parseInt(this.all['p_' + $idPoi]);
        }

        if($val == 0)  this.all['p_' + $idPoi] = valor_actual - 1;
        if($val == 1)  this.all['p_' + $idPoi] = valor_actual + 1;

    }

})

