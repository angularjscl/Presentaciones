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
    .controller('detalleCtrl', function($scope,movieService,$stateParams, $rootScope){
        $scope.images2=[];
        movieService.get({type:'movie',id:$stateParams.id}).$promise.then(function(response){
            $scope.movie=response;
            $scope.images1=[];
            for (var i=0;i<$scope.movie.images.posters.length;i++){
                $scope.images1.push({src:'http://image.tmdb.org/t/p/w500'+$scope.movie.images.posters[i].file_path,title:''})
            }

            for (var i=0;i<$scope.movie.images.backdrops.length;i++){
                $scope.images1.push({src:'http://image.tmdb.org/t/p/w500'+$scope.movie.images.backdrops[i].file_path,title:''})
            }
        })

        ;
});
