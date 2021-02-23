class Pokemon {
    static allPokemon = []

    constructor(pokemon){
        this.id = pokemon.id
        this.species = pokemon.species
        this.trainer_id =pokemon.trainer_id
        Pokemon.allPokemon.push(this)
        

    }

    // static displayPokemon() {
    //     return `
        
    //     <form id="pokemon-form">
    //     <label id="species-label">Catch a Pokemon!</label>
    //     <p>Pokemon go here</p> 
    //     </form>
        
    //   `
    // }
    
    
    renderPokemon() {
        const container = document.querySelector(".pokemon-collection")
        const releaseForm = document.createElement('form')
        const releaseBtn = document.createElement('input')
        releaseBtn.setAttribute('type','submit')
        releaseBtn.value = 'Release'
        releaseBtn.id = `release#${this.id}`
        releaseForm.appendChild(releaseBtn)
        releaseForm.id = `form#${this.id}`
        let thePokemon = document.createElement("LI");
        let lastPokemon = document.createTextNode(this.species);
        container.appendChild(lastPokemon)
        container.appendChild(releaseForm)
        releaseForm.addEventListener('submit', this.releasePokemon.bind(this))
       
    }
    
    async releasePokemon(e) {
        e.preventDefault()
        let resp = await newFetch.destroyPokemon(this)
        
        
    }

    

}