/**
 * @ngdoc controller
 * @name app.controller:appCtrl
 *
 * @description
 * _Please update the description and dependencies._
 *
 * @requires $scope
 * */


angular.module('app',['ngRoute','LocalStorageModule','ngMaterial','ngMdIcons','ngResource','youtube-embed','ui.router','sliderApp',"firebase"])
    .config(function($routeProvider,$stateProvider,$mdThemingProvider,$urlRouterProvider) {
        $mdThemingProvider.theme('default')
            .primaryColor('red')
            .accentColor('orange');

        $stateProvider
            .state('app', {
                url: "/",
                controller: 'menuCtrl',
                templateUrl: "app/view/menu.html"
            })
            .state('app.buscar', {
                url: "buscar",
                views: {
                    "app": {
                        controller:'searchCtrl',
                        templateUrl:'app/view/search.html'
                    }
                }
            })
            .state('app.favoritos', {
                url: "favorites",
                views: {
                    "app": {
                        controller:'favoritesCtrl',
                        templateUrl:'app/view/favorites.html'
                    }
                }
            })
            .state('app.detalle', {
                url: "detalle/:id/:titulo",
                views: {
                    "app": {
                        controller:'detalleCtrl',
                        templateUrl:'app/view/detalle.html'
                    }
                }
            })
            .state('app.movies_type', {
                url: "movies/:tipo/:nombre",
                views: {
                    "app": {
                        controller:'popularCtrl',
                        templateUrl:'app/view/popular.html'
                    }
                }
            })
            .state('app.categorias', {
                url: "categorias",
                views: {
                    "app": {
                        controller:'generosCtrl',
                        templateUrl:'app/view/generos.html'
                    }
                }
            })
            .state('app.categorias_detalle', {
                url: "categoria/:id/:nombre",
                views: {
                    "app": {
                        controller:'generosDetalleCtrl',
                        templateUrl:'app/view/popular.html'
                    }
                }
            })
            .state('app.actor', {
                url: "actor/:id/:nombre",
                views: {
                    "app": {
                        controller:'actorCtrl',
                        templateUrl:'app/view/detalle_actor.html'
                    }
                }
            })
            .state('app.actores', {
                url: "actores",
                views: {
                    "app": {
                        controller:'actorListCtrl',
                        templateUrl:'app/view/actorList.html'
                    }
                }
            });
        $urlRouterProvider.otherwise("/buscar");


    })
    .run(['$state',   '$rootScope','$mdSidenav', function($state,   $rootScope,$mdSidenav) {
        $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {

            if ($mdSidenav('left').isOpen()){
                $mdSidenav('left').close();
            }
        });
    }]);