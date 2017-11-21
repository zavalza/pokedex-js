Pokedex = {
  index: 0,
  pokemons: [],

  setPokemons: function(pokemons){
    this.pokemons = pokemons;
  },

  displayPokemon: function(){
    document.getElementById("pokemonImage").src = this.pokemons[this.index].img;
    document.getElementById("pokemonName").innerHTML = this.pokemons[this.index].name;
    document.getElementById("pokemonNumber").innerHTML = this.pokemons[this.index].num;
  },

  decrementIndex : function(){
    if(this.index > 0) {
      this.index = this.index-1;
    }
    this.displayPokemon();
  },

  incrementIndex : function(){
    if(this.index < 151) {
      this.index = this.index+1;
    }
    this.displayPokemon();
  }
}