/**
 * @ngdoc controller
 * @name app.controller:menuCtrl
 *
 * @description
 * _Please update the description and dependencies._
 *
 * @requires $scope
 * */


angular.module('app')
    .controller('menuCtrl', function($scope,$mdSidenav ,$rootScope){
        $rootScope.buscar='';

        $scope.toogleMenu=function(){
            $mdSidenav('left').toggle().then(function() {

            })
        }
});
