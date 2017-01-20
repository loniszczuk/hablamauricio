angular.module("mauricioApp", ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "joke.html",
        controller: "JokesController",
        resolve: {
          jokes: function(Jokes) {
              return Jokes.getJokes();
          }
        }
      })
  })
  .service("Jokes", function($http) {
    this.getJokes = function() {
      return $http.get("/api/jokes").
        then(function(response) {
            return response;
        }, function(response) {
            alert("Error retrieving jokes.");
        });
    }
  })
  .controller("JokesController", function(jokes, $scope) {
    var randomJoke = jokes.data[Math.floor(Math.random()*jokes.data.length)];
    $scope.joke = randomJoke;
  });
