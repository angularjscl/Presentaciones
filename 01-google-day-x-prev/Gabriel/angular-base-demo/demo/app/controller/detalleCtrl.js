/**
 * @ngdoc controller
 * @name app.controller:detalleCtrl
 *
 * @description
 * _Please update the description and dependencies._
 *
 * @requires $scope
 * */


angular.module('app')
    .controller('detalleCtrl', function($scope,movieService,$routeParams){
        movieService.get({type:'movie',id:$routeParams.id}).$promise.then(function(response){
            $scope.movie=response;
        })

        ;
});
