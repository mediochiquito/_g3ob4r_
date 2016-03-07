geobarApp.directive('home', function ($window, navigateService, ToastService, SERVER, $http, arService) {
    return {
        restrict: 'E',
        templateUrl: 'directivas/secciones/home/home.html',
        scope: {},


        link: function (scope) {

            var _callback;
            var ya_cargo = false;
            scope.navigateService = navigateService;
            scope.arService = arService;
            scope.server = SERVER;
            scope.url_img_home = SERVER + 'pic/home/';

            scope.realidad = function () {
                arService.mostrar()
            };

            scope._set = function ($obj, $callback) {
                _callback = $callback;

                if (ya_cargo) {
                    _callback();
                    return;
                }

                scope.goMapa = function () {

                    if ($window.google && $window.google.maps) {
                        scope.navigateService.go('mapa', {type: 'all'})
                    } else {
                        ToastService.show('Debes conectarte a internet para ver el mapa.', 'long', 'center');
                    }

                };

                $http.get(SERVER + 'ws.php?method=getHomeImagesApp').

                    success(function (data) {

                        scope.fotos_home = data;

                        ya_cargo = true;
                        if (scope.fotos_home.length == 0)  sin_fotos();
                        _callback()

                    }).

                    error(function () {
                        sin_fotos();
                        _callback();
                    });

            };


            function sin_fotos() {

                scope.url_img_home = 'img/default/';
                scope.fotos_home = ['home.png'];
            }

            navigateService.setSecciones('home', scope._set)


        }
    };
});