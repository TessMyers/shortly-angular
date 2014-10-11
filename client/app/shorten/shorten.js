angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {
    url: ''
  };



  $scope.addLink = function(){
    data = { url : $scope.link.url };
    console.log("shortening a link", data);
    Links.postShortLink(data).then(function(data){});
  };
});
