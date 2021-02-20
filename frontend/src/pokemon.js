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
        <li data-id=${this.species}>
        </li>
        </form>
      `
    }

    // renderLi() {
    //     return `<li data-id=${this.species}></li>`
    // }
    
    renderPokemon(trainer) {
        fetchPokemons()
        console.log(pokemons)
        let newPokemon = ""
        trainer.pokemons.forEach(pokemon => {
        newPokemon += `<li>${this.species} </li>`
        })
        
    }

}