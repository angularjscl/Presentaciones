/**
 * @ngdoc controller
 * @name app.controller:generosDetalleCtrl
 *
 * @description
 * _Please update the description and dependencies._
 *
 * @requires $scope
 * */


angular.module('app')
    .controller('generosDetalleCtrl', function( $rootScope,$scope,movieService,$stateParams,localStorageService,$timeout){

        $scope.tipo='Peliculas Categoria '+$stateParams.nombre;
        $rootScope.buscar='';
        $scope.generos= function () {
            $scope.load = true;
            movieService.getGenre({query: $scope.buscar,type:$stateParams.id,id:'movies'}).$promise.then(function (data) {
                $scope.movies = data.results
                for (var i = 0; i < $scope.movies.length; i++) {
                    $scope.movies[i].icon = 'favorite'
                }
                $scope.load = false;

            })
        }
        $scope.generos();
    });