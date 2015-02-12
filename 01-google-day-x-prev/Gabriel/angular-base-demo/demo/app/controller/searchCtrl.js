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
    .controller('searchCtrl', function (  $rootScope, $scope, localStorageService, $mdToast, $mdDialog, $rootScope, $location, movieService, $timeout,$firebase) {


        $rootScope.icon = 'favorite';

        $scope.movies = localStorageService.get('movies');

        var ref = new Firebase("https://vivid-inferno-5873.firebaseio.com/data");
        var sync = $firebase(ref);


        $rootScope.favorites = sync.$asArray();

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
            item=angular.copy(item);
            item.icon='remove';
            $rootScope.favorites.$add(item);

            $timeout(function () {
                $rootScope.icon = 'favorite';
            }, 1000)
        }

        $scope.clear = function () {
            $scope.movies = [];
            localStorageService.set('movies', $scope.movies);
        }


    });
