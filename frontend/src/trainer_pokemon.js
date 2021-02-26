class TrainerPokemon {

    constructor(trainerPokemon){
        this.id = trainerPokemon.id
        this.species = trainerPokemon.species
        
    }

    renderPokemon() {
        const container = document.querySelector(".pokemon-collection")
        let lastPokemon = document.createTextNode(this.species);
        container.appendChild(lastPokemon)
    }  

    catchPokemonBtn() {
        const container = document.querySelector(".pokemon-collection")
        const catchForm = document.createElement('form')
        const catchBtn = document.createElement('input')
        catchBtn.setAttribute('type', 'submit')
        catchBtn.value = 'Catch'
        catchBtn.id = `catch#${this.id}`
        catchForm.appendChild(catchBtn)
        catchForm.id = `form#${this.id}`
        container.appendChild(catchForm)
        catchForm.addEventListener('submit', this.catchPokemon.bind(this))

    }

    async catchPokemon(e) {
        e.preventDefault()
        let resp = await newFetch.catchPokemonFetch(this)
        
    }


}

