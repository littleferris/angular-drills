angular.module('appArr').controller('controller',
function($scope, arrService) {


$scope.myData = arrService.getData();


})
