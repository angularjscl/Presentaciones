/**
 * @ngdoc controller
 * @name app.controller:blogCtrl
 *
 * @description
 * _Please update the description and dependencies._
 *
 * @requires $scope
 * */


angular.module('app')
    .controller('searchCtrl', function (  $rootScope, $scope, localStorageService, $mdToast, $mdDialog, $rootScope, $location, movieService, $timeout) {


        $rootScope.icon = 'favorite';

        $scope.movies = localStorageService.get('movies');
        $rootScope.favorites = localStorageService.get('favorites');
        if ($rootScope.favorites == null) {
            $rootScope.favorites = [];
        }

        $rootScope.buscar = '';
        $scope.$watch('buscar', function (value) {
            console.log(value);
            if (value!= '')
                $scope.search(value);
        }, true);
        $scope.search = function (query) {
            $scope.load = true;
            movieService.getMovies({
                query: query,
                type: 'search',
                id: 'movie'
            }).$promise.then(function (data) {
                $scope.movies = data.results
                for (var i = 0; i < $scope.movies.length; i++) {
                    $scope.movies[i].icon = 'favorite'
                }
                $scope.load = false;
                localStorageService.set('movies', $scope.movies);
            })
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

        $scope.clear = function () {
            $scope.movies = [];
            localStorageService.set('movies', $scope.movies);
        }


    });
