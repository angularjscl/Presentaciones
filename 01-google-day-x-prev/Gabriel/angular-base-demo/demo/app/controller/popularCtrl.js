/**
 * @ngdoc controller
 * @name app.controller:popularCtrl
 *
 * @description
 * _Please update the description and dependencies._
 *
 * @requires $scope
 * */


angular.module('app')
    .controller('popularCtrl', function( $rootScope,$scope,movieService,$stateParams,localStorageService,$timeout){

        $rootScope.buscar='';
        $scope.tipo=$stateParams.nombre;
        $scope.search = function () {
            $scope.load = true;
            movieService.getMovies({query: $rootScope.buscar,type:'movie',id:$stateParams.tipo}).$promise.then(function (data) {
                $scope.movies = data.results
                for (var i = 0; i < $scope.movies.length; i++) {
                    $scope.movies[i].icon = 'favorite'
                }
                $scope.load = false;

            })
        }
        $scope.search();
        $rootScope.favorites = localStorageService.get('favorites');
        if ($rootScope.favorites == null) {
            $rootScope.favorites = [];
        }
        $scope.addFavorite = function (item, index) {
            $rootScope.icon = 'exposure_plus_1';
            $scope.movies[index].icon = 'check';
            $rootScope.favorites.push(item);
            localStorageService.set('favorites', $rootScope.favorites);
            $timeout(function () {
                $rootScope.icon = 'favorite';
            }, 1000)
        }
});
