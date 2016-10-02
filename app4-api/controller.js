angular.module('apiApp').controller('controller',
function($scope, apiService, statsService) {



$scope.getPokemonNames = function () {
  apiService.getPokemonNames().then(function(response2) {
    $scope.pokemonNames = response2;
    // console.log(response)
  })

}

$scope.getPokemonNames();


$scope.toggle = true;
$scope.$watch('toggle', function() {
  $scope.toggleText = $scope.toggle ? 'Shiny' : 'Regular';
})



});
