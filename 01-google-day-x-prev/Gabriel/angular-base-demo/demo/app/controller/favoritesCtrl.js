/**
 * @ngdoc controller
 * @name app.controller:newCtrl
 *
 * @description
 * _Please update the description and dependencies._
 *
 * @requires $scope
 * */


angular.module('app')
    .controller('favoritesCtrl', function ($rootScope,$mdDialog, $scope, localStorageService, $routeParams, $mdToast, $location, $rootScope) {
        $rootScope.icon = 'reply';
        $rootScope.buscar='';

        $scope.movies = localStorageService.get('favorites');
        for (var i = 0; i < $scope.movies.length; i++) {
            $scope.movies[i].icon = 'remove'
        }
        $scope.showConfirm = function (ev, index) {
            var confirm = $mdDialog.confirm()
                .title('Eliminar')
                .content('Esta Seguro de eliminar esta pelicula?')

                .ok('Si')
                .cancel('No')
                .targetEvent(ev);
            $mdDialog.show(confirm).then(function () {
                $scope.eliminar(index)
            }, function () {

            });
        };


        $scope.eliminar = function (index) {

            $scope.movies.splice(index, 1)
            localStorageService.set('favorites', $scope.movies);
            $mdToast.show(
                $mdToast.simple()
                    .content('Registro Eliminado')
                    .position('top right')
                    .hideDelay(2000)
            );
        }
    });
