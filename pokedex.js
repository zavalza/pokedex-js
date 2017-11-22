Pokedex = {
  index: 0,
  pokemons: [],

  setPokemons: function(pokemons){
    this.pokemons = pokemons;
  },

  showPokemonCard: function(){
    this._buildPokemon();
    document.getElementById("pokemonDetails").style.display = "none";
    document.getElementById("pokemonCard").style.display = "block";
  },

  showPokemonDetails: function(){
    document.getElementById("pokemonCard").style.display = "none";
    document.getElementById("pokemonDetails").style.display = "block";
  },

  setIndex: function(pokemonNumber){
    if(pokemonNumber > 0 && pokemonNumber <= 151) {
      this.index = pokemonNumber -1;
    }
    this.showPokemonCard();
  },

  decrementIndex : function(){
    if(this.index <= 0) {
      this.index = 150;
    }
    else {
      this.index = this.index-1;
    }

    this.showPokemonCard();
  },

  incrementIndex : function(){
    if(this.index < 150) {
      this.index = this.index+1;
    }
    else {
      this.index = 0;
    }
    this.showPokemonCard();
  },

  _buildPokemon: function(){
    let pokemon = this.pokemons[this.index];
    document.getElementById("pokemonImage").src = pokemon.img;
    document.getElementById("pokemonName").innerHTML = pokemon.name;
    document.getElementById("pokemonNumber").value = pokemon.num;
    document.getElementById("pokemonType").innerHTML = "Type: " + pokemon.type;
    document.getElementById("pokemonHeight").innerHTML = "Height: " + pokemon.height;
    document.getElementById("pokemonWeight").innerHTML = "Weight: " + pokemon.weight;
    document.getElementById("pokemonCandy").innerHTML = "Candy: " + pokemon.candy;
    document.getElementById("pokemonCandyCount").innerHTML = "Candy count: " + pokemon.candy_count;
    document.getElementById("pokemonEgg").innerHTML = "Egg: " + pokemon.egg;
    document.getElementById("pokemonSpawnChance").innerHTML = "Spawn chance: " + pokemon.spawn_chance;
    document.getElementById("pokemonAvgSpawns").innerHTML = "Avg spawns: " + pokemon.avg_spawns;
    document.getElementById("pokemonSpawnTime").innerHTML = "Spawn time: " + pokemon.spawn_time;
    document.getElementById("pokemonMultipliers").innerHTML = "Multipliers: " + pokemon.multipliers;
    document.getElementById("pokemonWeaknesses").innerHTML = "Weaknesses: " + pokemon.weaknesses;
  }
}
