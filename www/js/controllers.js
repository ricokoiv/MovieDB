angular.module('starter.controllers', [])

.controller('PopMoviesCtrl', function($scope, PopMovies) {
  $scope.popmovies = PopMovies.all();
})

.controller('MoviesCtrl', function($scope, Movies) {
  $scope.movies = Movies.all();
  $scope.remove = function(movie) {
    Movies.remove(movie);
  }
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
