/**
 * @ngdoc controller
 * @name app.controller:appCtrl
 *
 * @description
 * _Please update the description and dependencies._
 *
 * @requires $scope
 * */


angular.module('app',['ngRoute','LocalStorageModule','ngMaterial','ngMdIcons','ngResource','youtube-embed'])
    .config(function($routeProvider,$mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryColor('red')
            .accentColor('orange');
        $routeProvider
            .when('/', {
                controller:'searchCtrl',
                templateUrl:'app/view/search.html'

            })
            .when('/favorites', {
                controller:'favoritesCtrl',
                templateUrl:'app/view/favorites.html'
            })
            .when('/detalle/:id/:titulo', {
                controller:'detalleCtrl',
                templateUrl:'app/view/detalle.html'
            })
            .when('/movies/:tipo', {
                controller:'popularCtrl',
                templateUrl:'app/view/popular.html'
            })
            .when('/categorias', {
                controller:'generosCtrl',
                templateUrl:'app/view/generos.html'
            })
            .when('/categoria/:id/:nombre', {
                controller:'generosDetalleCtrl',
                templateUrl:'app/view/popular.html'
            })
            .when('/actor/:id/:nombre', {
                controller:'actorCtrl',
                templateUrl:'app/view/detalle_actor.html'
            })
            .when('/actores', {
                controller:'actorListCtrl',
                templateUrl:'app/view/actorList.html'
            })
            .otherwise({
                redirectTo:'/'
            });
    })
