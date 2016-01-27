angular.module("cats-app", []);

angular.module("cats-app").controller("MyController", function($scope, $http) {
  $http.get('https://stark-harbor-5038.herokuapp.com/cats/')
    .then(function(response){
      $scope.cats = response.data;
    });
});
