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
    .controller('blogCtrl', function ($scope, localStorageService,$mdToast) {

        $scope.blog = localStorageService.get('blog');

        $scope.eliminar = function (index) {

            $scope.blog.splice(index, 1)
            localStorageService.set('blog', $scope.blog);
            $mdToast.show(
                $mdToast.simple()
                    .content('Registro Eliminado')
                    .position('top right')
                    .hideDelay(2000)
            );
        }

    });
