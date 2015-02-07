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
    .controller('actorCtrl', function( $rootScope,$scope,movieService,$stateParams,localStorageService,$timeout){

        $rootScope.buscar='';
        movieService.get({type:'person',id:$stateParams.id}).$promise.then(function(response){
            $scope.actor=response;
            $scope.images1=[];
            for (var i=0;i<$scope.actor.images.profiles.length;i++){
                $scope.images1.push({src:'http://image.tmdb.org/t/p/w500'+$scope.actor.images.profiles[i].file_path,title:''})
            }
        })
        movieService.getPersonMovies({id:$stateParams.id}).$promise.then(function(response){
            $scope.movies=response.cast;
            for (var i = 0; i < $scope.movies.length; i++) {
                $scope.movies[i].icon = 'favorite'
            }

        })
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
