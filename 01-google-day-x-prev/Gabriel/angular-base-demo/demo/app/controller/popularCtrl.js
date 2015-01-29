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
    .controller('popularCtrl', function($rootScope,$scope,movieService,$routeParams,localStorageService,$timeout){
        $rootScope.buscar='';
        $scope.tipo=$routeParams.tipo;
        $scope.search = function () {
            $scope.load = true;
            movieService.getMovies({query: $rootScope.buscar,type:'movie',id:$routeParams.tipo}).$promise.then(function (data) {
                $scope.movies = data.results
                for (var i = 0; i < $scope.movies.length; i++) {
                    $scope.movies[i].icon = 'favorite'
                }
                $scope.load = false;

            })
        }
        $scope.search();
        $scope.favorites = localStorageService.get('favorites');
        if ($scope.favorites == null) {
            $scope.favorites = [];
        }
        $scope.addFavorite = function (item, index) {
            $rootScope.icon = 'exposure_plus_1';
            $scope.movies[index].icon = 'check';
            $scope.favorites.push(item);
            localStorageService.set('favorites', $scope.favorites);
            $timeout(function () {
                $rootScope.icon = 'favorite';
            }, 1000)
        }
});
