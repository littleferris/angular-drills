angular.module('apiApp').controller('controller',
function($scope, apiService) {



$scope.getPokemonNames = function () {
  apiService.getPokemonNames().then(function(response2) {
    $scope.pokemonNames = response2;
  })

}

$scope.getPokemonNames();


$scope.toggle = true;
$scope.$watch('toggle', function() {
  $scope.toggleText = $scope.toggle ? 'Shiny' : 'Regular';
})





});
