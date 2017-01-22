(function(){
    var app = angular.module("mauricioApp", ['ngRoute']);

    app.controller('JokesController', ['$http', '$scope', '$location', function($http, $scope, $location) {
        var ctrl = this;
        $scope.jokes = [];
        $scope.currentJoke = null;

        $scope.newJoke = function() {
            $scope.currentJoke = $scope.jokes[Math.floor(Math.random()*$scope.jokes.length)];
            $location.hash($scope.currentJoke.id);
        }

        $http.get("/api/jokes").success( function(response) {
            $scope.jokes = response;
            var hash = $location.hash();
            if (hash) {
                $scope.currentJoke = $scope.jokes.find( j => j.id === hash);
            } else {
                $scope.newJoke();
            }

        });
    }]);
})();
