angular.module('movieApp', [])
.controller('movieCtrl', ['$scope', '$http', function($scope, $http){
  $scope.search;
  
  $scope.searchCall = function(){
    var search = $scope.search;

    var req = {
      method: 'GET',
      url: 'http://www.omdbapi.com/?',
      params: {
        s: search
      }
    }
    $http(req).then(function success(res){
      console.log(res);
      $scope.movies = res.data.Search;
    }, function error(res){ 
      console.log('error: ', res);
    })
  }
}]);