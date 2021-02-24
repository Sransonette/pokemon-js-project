class Pokemon {
    static allPokemon = []

    constructor(pokemon){
        this.id = pokemon.id
        this.species = pokemon.species
        this.trainer_id =pokemon.trainer_id
        Pokemon.allPokemon.push(this)
        
    }

    renderPokemon() {
        //if(this.trainer_id ==1){
        const container = document.querySelector(".pokemon-collection")
        let lastPokemon = document.createTextNode(this.species);
        container.appendChild(lastPokemon)
        //}
    }    
    
    releasePokemonBtn() {
        // if(this.trainer_id !== 1){
        const container = document.querySelector(".pokemon-collection")
        const releaseForm = document.createElement('form')
        const releaseBtn = document.createElement('input')
        releaseBtn.setAttribute('type','submit')
        releaseBtn.value = 'Release'
        releaseBtn.id = `release#${this.id}`
        releaseForm.appendChild(releaseBtn)
        releaseForm.id = `form#${this.id}`
        container.appendChild(releaseForm)
        releaseForm.addEventListener('submit', this.releasePokemon.bind(this))
        // }
    }

    catchPokemonBtn() {
        //if(this.trainer_id == 1){
        const container = document.querySelector(".pokemon-collection")
        const catchForm = document.createElement('form')
        const catchBtn = document.createElement('input')
        catchBtn.setAttribute('type', 'submit')
        catchBtn.value = 'Catch'
        catchBtn.id = `catch#${this.id}`
        catchForm.appendChild(catchBtn)
        catchForm.id = `form#${this.id}`
        let lastPokemon = document.createTextNode(this.species);
        container.appendChild(catchForm)
        catchForm.addEventListener('submit', this.catchPokemon.bind(this))
       // }
    }
    
    async releasePokemon(e) {
        e.preventDefault()
        let resp = await newFetch.destroyPokemon(this)
        
    }

    async catchPokemon(e) {
        e.preventDefault()
        let resp = await newFetch.catchPokemonFetch(this)
        
    }




    

}
