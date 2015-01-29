/**
 * @ngdoc controller
 * @name app.controller:actorCtrl
 *
 * @description
 * _Please update the description and dependencies._
 *
 * @requires $scope
 * */


angular.module('app')
    .controller('actorCtrl', function($rootScope,$scope,movieService,$routeParams,localStorageService,$timeout){
        $rootScope.buscar='';
        movieService.get({type:'person',id:$routeParams.id}).$promise.then(function(response){
            $scope.actor=response;
        })
        movieService.getPersonMovies({id:$routeParams.id}).$promise.then(function(response){
            $scope.movies=response.cast;
            for (var i = 0; i < $scope.movies.length; i++) {
                $scope.movies[i].icon = 'favorite'
            }
        })
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
