/**
 * @ngdoc service
 * @name app.movieService
 * @description
 * _Please update the description and dependencies._
 *
 * @requires $replace_me
 *
 * */


angular.module('app')
    .service('movieService', function($resource){
        var apikey = 'aa3edba062fc9d710be22c80f4c8e146';
        var url='http://api.themoviedb.org/3/:type/:id'
        return $resource(url, { api_key: apikey,append_to_response: 'casts,trailers,images,similar_movie'},
            {
                'getMovies': { method:'get',isArray:false },
                'getGenre': { method:'get',isArray:false ,url:'http://api.themoviedb.org/3/genre/:type/:id'},
                'getPersonMovies': { method:'get',isArray:false ,url:'http://api.themoviedb.org/3/person/:id/movie_credits'}
            });
});

