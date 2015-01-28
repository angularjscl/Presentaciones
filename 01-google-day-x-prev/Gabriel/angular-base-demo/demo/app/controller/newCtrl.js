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
    .controller('newCtrl', function($scope,localStorageService,$routeParams, $mdToast,$location){


        $scope.blogs=localStorageService.get('blog');

        if ($scope.blogs==null) $scope.blogs=[];

        $scope.edit=false;
        $scope.msg='Nuevo Post Blog';
        $scope.blog={
            id : $scope.blogs.length,
            title:'',name:'',content:'',
            date: new Date(),img:'http://placehold.it/60x60'
        };

        if ($routeParams.id!==undefined){
            $scope.blog=$scope.blogs[$routeParams.id];
            $scope.edit=true;
            $scope.msg='Editando Post '+$scope.blog.title;
        }


        $scope.grabar=function(){

            $scope.blogs.push($scope.blog)
            localStorageService.set('blog',$scope.blogs);
            $scope.blog={
                id : $scope.blogs.length,
                title:'',name:'',content:'',
                date: new Date(),img:'http://placehold.it/60x60'
            };
            $mdToast.show(
                $mdToast.simple()
                    .content('Registro Grabado')
                    .position('top right')
                    .hideDelay(2000)
            );
            $location.path('/');
        }
        $scope.editar=function(){

            $scope.blogs[$routeParams.id]=($scope.blog)
            localStorageService.set('blog',$scope.blogs);
            $mdToast.show(
                $mdToast.simple()
                    .content('Registro Editado')
                    .position('top right')
                    .hideDelay(2000)
            );
            $location.path('/');

        }
});
