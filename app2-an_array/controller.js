angular.module('arrayApp').controller('arrayController', function($scope, service) {

$scope.myData = service.getData();

})
