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
    .controller('favoritesCtrl', function ( $rootScope,$mdDialog, $scope, localStorageService, $stateParams, $mdToast, $location, $rootScope) {

        $rootScope.icon = 'reply';
        $rootScope.buscar='';

        $rootScope.favorites = localStorageService.get('favorites');
        if ($rootScope.favorites == null) {
            $rootScope.favorites = [];
        }
        for (var i = 0; i < $rootScope.favorites.length; i++) {
            $scope.favorites[i].icon = 'remove'
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

            $scope.favorites.splice(index, 1)
            localStorageService.set('favorites', $scope.favorites);
            $mdToast.show(
                $mdToast.simple()
                    .content('Registro Eliminado')
                    .position('top right')
                    .hideDelay(2000)
            );
        }
    });
