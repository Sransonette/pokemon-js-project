class Pokemon {
    static allPokemon = []

    constructor(pokemon){
        this.id = pokemon.id
        this.species = pokemon.species
        Pokemon.allPokemon.push(this)

    }

    static displayPokemon() {
        return `
        <center>
        <form id="pokemon-form">
        <label id="species-label">Catch a Pokemon!</label>
        <p>Pokemon go here</p>
        <li> 
        </li>
        </form>
        </center>
      `
    }

    // renderLi() {
    //     return `<li data-id=${this.species}></li>`
    // }
    
    renderPokemon() {
               
        let thePokemon = document.createElement("LI");
        let lastPokemon = document.createTextNode(this.species);
        thePokemon.appendChild(lastPokemon);
        document.getElementById("myPokemon").appendChild(thePokemon)
        
        // let newPokemon = ""
        // this.forEach(pokemon => {
        // newPokemon += `<li>${this.species} </li>`
        // })
        
    }

}