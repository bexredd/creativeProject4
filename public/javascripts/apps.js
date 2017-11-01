var app = window.angular.module('app', [])

app.factory('pokemonFetcher', pokemonFetcher)
app.controller('mainCtrl', mainCtrl)

function pokemonFetcher ($http) {

  var API_ROOT = 'journal'
  return {
    get: function () {
      return $http
        .get(API_ROOT)
        .then(function (resp) {
          return resp.data
        })
    }
  }

}

function mainCtrl ($scope, journalFetcher, $http) {

  $scope.journal = []

   journalFetcher.get()
    .then(function (data) {
      $scope.journal = data
      console.log("in journalFetcher in the main ctrl in app.js");
    })


$scope.add = function() {
  var formData = {title:$scope.title,date:$scope.date,text:$scope.text};
  console.log(formData);
  var journalURL = 'journal';
  $http({
     url: journalURL,
     method: "POST",
     data: formData
  }).success(function(data, status, headers, config) {
    console.log("Post worked");
  }).error(function(data, status, headers, config) {
    console.log("Post failed");
  });
}
}
