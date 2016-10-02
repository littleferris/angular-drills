angular.module('apiApp').service('statsService',
function ($http, $q) {


  this.getPokemonStats = function () {

    // var deferred = $q.defer();
    return $http({
      method: 'GET',
      url: 'http://pokeapi.co/api/v2/pokedex/1/'
    }).then(function(response2) {

      return response2;
    })
  }







});
