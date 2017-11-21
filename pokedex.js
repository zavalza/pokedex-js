Pokedex = {
  index: 0,
  pokemons: [],

  setPokemons: function(pokemons){
    this.pokemons = pokemons;
  },

  displayPokemon: function(){
    document.getElementById("pokemonImage").src = this.pokemons[this.index].img;
    document.getElementById("pokemonName").innerHTML = this.pokemons[this.index].name;
    document.getElementById("pokemonNumber").value = this.pokemons[this.index].num;
  },

  setIndex: function(pokemonNumber){
    if(pokemonNumber > 0 && pokemonNumber <= 151) {
      this.index = pokemonNumber -1;
    }
    this.displayPokemon();
  },

  decrementIndex : function(){
    if(this.index <= 0) {
      this.index = 150;
    }
    else {
      this.index = this.index-1;
    }

    this.displayPokemon();
  },

  incrementIndex : function(){
    if(this.index < 150) {
      this.index = this.index+1;
    }
    else {
      this.index = 0;
    }
    this.displayPokemon();
  }
}
