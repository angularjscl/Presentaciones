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
    .controller('popularCtrl', function( $rootScope,$scope,movieService,$stateParams,localStorageService,$timeout,$firebase){

        var ref = new Firebase("https://vivid-inferno-5873.firebaseio.com/data");
        var sync = $firebase(ref);


        $rootScope.favorites = sync.$asArray();

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

        if ($rootScope.favorites == null) {
            $rootScope.favorites = [];
        }
        $scope.addFavorite = function (item, index) {
            $rootScope.icon = 'exposure_plus_1';
            $scope.movies[index].icon = 'check';
            item=angular.copy(item);
            item.icon='remove';
            $rootScope.favorites.$add(item);

            $timeout(function () {
                $rootScope.icon = 'favorite';
            }, 1000)
        }
});
