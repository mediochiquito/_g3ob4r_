geobarApp.directive('touchSlider', function ($document, Loading, SERVER, $log, navigateService) {

    return {

        restrict: 'E',

        scope: {
            fotos: '=',
            urlImgs: '=',
            imgDefault: '@'

        },

        templateUrl: 'directivas/componentes/touchSlider/touchSlider.html',

        link: function (scope, elem, attrs) {

            scope.t = 0;
            scope.pagina = 0;
            scope.enx = 0;
            scope.server = SERVER;
            var offsetX = 0;
            var finX = 0;
            var ultimo_x = 0;
            var cien_porciento = window.innerWidth;

            scope.array_src_fotos = [];


            scope.$watch('fotos', function ($oldV, $newV) {

                scope.t = 0;
                scope.pagina = 0;
                scope.enx = 0;


                if (scope.fotos && typeof(scope.fotos[0]) == 'object') {

                    scope.array_src_fotos = [];

                    for (var obj_home in scope.fotos) {
                        scope.array_src_fotos.push(scope.fotos[obj_home].home_img)
                    }


                } else {

                    scope.array_src_fotos = scope.fotos
                }

            });

            elem.bind('touchstart', function (e) {

                scope.t = '0s';
                offsetX = (e.touches[0].clientX);
                ultimo_x = scope.enx;
                scope.$apply();

                addListener()

            });

            function doMove(e) {
                scope.enx = Math.round(e.touches[0].clientX - offsetX + ultimo_x);
                scope.$apply();

            }

            function doEnd(e) {

                finX = e.changedTouches[0].clientX;

                if ((finX - offsetX) > -10 && (finX - offsetX) < 10) {
                    scope.t = '.2s';
                    scope.enx = -(scope.pagina * cien_porciento);
                    ultimo_x = scope.enx;
                    scope.$apply();
                    removeListener();
                    if (scope.fotos[scope.pagina].home_og_poi > 0) {

                        var item = {};
                        item.id = scope.fotos[scope.pagina].home_og_poi;
                        setTimeout(function () {

                            navigateService.go('detalle', item);


                        }, 300)


                    }

                    return;
                }

                if (offsetX > finX) {
                    scope.pagina++
                } else {
                    scope.pagina--
                }

                if (scope.pagina < 0) scope.pagina = 0;
                if (scope.pagina >= scope.fotos.length) scope.pagina = scope.fotos.length - 1;

                scope.t = '.2s';
                scope.enx = -(scope.pagina * cien_porciento);
                ultimo_x = scope.enx;

                scope.$apply();
                removeListener()
            }

            function addListener() {

                $document.on('touchmove', doMove);
                $document.on('touchend', doEnd);
            }

            function removeListener() {
                $document.off('touchmove', doMove);
                $document.off('touchend', doEnd)
            }

        }
    };
});