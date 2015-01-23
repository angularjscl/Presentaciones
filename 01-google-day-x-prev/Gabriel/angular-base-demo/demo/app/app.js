/**
 * @ngdoc controller
 * @name app.controller:appCtrl
 *
 * @description
 * _Please update the description and dependencies._
 *
 * @requires $scope
 * */


angular.module('app',['ngRoute','LocalStorageModule','ngMaterial'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller:'blogCtrl',
                templateUrl:'app/view/blog.html'

            })
            .when('/edit/:id/:title', {
                controller:'newCtrl',
                templateUrl:'app/view/new.html'
            })
            .when('/new', {
                controller:'newCtrl',
                templateUrl:'app/view/new.html'
            })
            .otherwise({
                redirectTo:'/'
            });
    })
