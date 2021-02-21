class Pokemon {
    static allPokemon = []

    constructor(pokemon){
        this.id = pokemon.id
        this.species = pokemon.species
        Pokemon.allPokemon.push(this)

    }

    static displayPokemon() {
        return `
        
        <form id="pokemon-form">
        <label id="species-label">Catch a Pokemon!</label>
        <p>Pokemon go here</p> 
        <script>
          newFetch.fetchPokemons()
          .then (pokemons => {
          for (let i=0; i < pokemons.length; i++){
              let pokemon = new Pokemon(pokemons[i])
              pokemon.renderPokemon()
          }
          })
        </script>

        </form>
        
      `
    }
    
    
    renderPokemon() {
               
        let thePokemon = document.createElement("LI");
        let lastPokemon = document.createTextNode(this.species);
        thePokemon.appendChild(lastPokemon);
        document.getElementById("myPokemon").appendChild(thePokemon)
        
    }

    

    

}