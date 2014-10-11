angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.addLink = function(data){
    Links.postShortLink(data).then(function(data){});
  };
});
