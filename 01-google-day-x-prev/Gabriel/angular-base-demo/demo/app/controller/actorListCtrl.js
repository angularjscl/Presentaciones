/**
 * @ngdoc controller
 * @name app.controller:actorListCtrl
 *
 * @description
 * _Please update the description and dependencies._
 *
 * @requires $scope
 * */


angular.module('app')
    .controller('actorListCtrl', function($rootScope,$scope,movieService,$routeParams,localStorageService,$timeout){
        $rootScope.buscar='';
        movieService.get({type:'person',id:'popular'}).$promise.then(function(response){
            $scope.actor=response.results;
        })
});
