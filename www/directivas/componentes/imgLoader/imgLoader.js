geobarApp.directive('imgLoader', function() {
  return {
    
    restrict: 'E', 
   
    scope:{

      imgurl: '=',
      hashfile: '@',
      itemid: '=',
      itemtipo: '='

    },

    template : '<img class="item-lista-img" ng-src="{{ imagen }}" />', 
    link: function(scope, elem){

       
        
        scope.$watch('hashfile', function(){
           scope.imagen = scope.imgurl + scope.hashfile



        });

        elem.children('img')[0].onerror = function () {
            scope.imagen = 'img/default/thumb_' + scope.itemtipo + '.png';
            scope.$apply()
        };
      

    }
  };
});


//server="{{}}" default=''