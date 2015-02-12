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
    .controller('favoritesCtrl', function ( $rootScope,$mdDialog, $scope, localStorageService, $stateParams, $mdToast, $location, $rootScope,$firebase) {

        var ref = new Firebase("https://vivid-inferno-5873.firebaseio.com/data");
        var sync = $firebase(ref);


        $rootScope.favorites = sync.$asArray();



        $rootScope.icon = 'reply';
        $rootScope.buscar='';


        if ($rootScope.favorites == null) {
            $rootScope.favorites = [];
        }
        for (var i = 0; i < $rootScope.favorites.length; i++) {
            $rootScope.favorites[i].icon = 'remove'
        }
        $scope.showConfirm = function (ev, favorite) {
            var confirm = $mdDialog.confirm()
                .title('Eliminar')
                .content('Esta Seguro de eliminar esta pelicula?')

                .ok('Si')
                .cancel('No')
                .targetEvent(ev);
            $mdDialog.show(confirm).then(function () {
                $scope.eliminar(favorite)
            }, function () {

            });
        };


        $scope.eliminar = function (favorite) {

            $rootScope.favorites.$remove(favorite)

            $mdToast.show(
                $mdToast.simple()
                    .content('Registro Eliminado')
                    .position('top right')
                    .hideDelay(2000)
            );
        }
    });
