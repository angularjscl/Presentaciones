/**
 * @ngdoc controller
 * @name app.controller:generosCtrl
 *
 * @description
 * _Please update the description and dependencies._
 *
 * @requires $scope
 * */


angular.module('app')
    .controller('generosCtrl', function($rootScope,$scope,movieService,$stateParams,localStorageService,$timeout){

        $rootScope.buscar='';
        $scope.generos= function () {
            $scope.load = true;
            movieService.getGenre({ type:'movie',id:'list'}).$promise.then(function (data) {
                $scope.movies = data.genres
                for (var i = 0; i < $scope.movies.length; i++) {
                    $scope.movies[i].icon = 'favorite'
                }
                $scope.load = false;

            })
        }
        $scope.generos();
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
