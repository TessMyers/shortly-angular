angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {
    links: []
  };

  $scope.getLinks = function(){
    Links.fetchLinks().then(function(data){
      console.log(data);
      $scope.data.links.push(data);
    });
  };

  $scope.getLinks();

  $scope.goToLink = function(){
    console.log("Running goToLink")
    Links.navToLink()
  }

});

