angular.module('apiApp').service('apiService',
function ($http, $q) {





  this.getPokemonNames = function () {

    var deferred = $q.defer();
    return $http({
      method: 'GET',
      url: 'http://pokeapi.co/api/v2/pokedex/2/'
    }).then(function(response2) {


      var pokemons = response2.data.pokemon_entries;
      var pokemonNames = pokemons.map(function(pokemon, i) {
        var name = pokemon.pokemon_species.name;
        var capitalized = name.split("");
        var currentNum = i + 1;
        var idNum = pokemon.entry_number;
        
        function zeroPad(num, count) {
          var numZeropad = num + '';
          while(numZeropad.length < count) {
            numZeropad ="0" + numZeropad
          }
          return numZeropad;
        }
        
        capitalized[0] = capitalized[0].toUpperCase();
        // return (i + 1) + '-' + capitalized.join("");

        return ({
          id: zeroPad(idNum, 3),
          name: capitalized.join(""),
          regUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + idNum  + ".png",
          shinyUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + idNum  + ".png",
          backgroundImg: "http://img03.deviantart.net/49cf/i/2011/068/a/c/pokeball_desktop_icon_by_beccerberry-d3b98cf.png"
        })
          // num: idNum
      });
      deferred.resolve(pokemonNames);
      return deferred.promise;
    });
  }











})
