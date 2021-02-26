class TrainerPokemon {

    constructor(trainerPokemon){
        this.id = trainerPokemon.id
        this.species = trainerPokemon.species
        
    }

    renderPokemon() {
        //if(this.trainer_id ==1){
        const container = document.querySelector(".pokemon-collection")
        let lastPokemon = document.createTextNode(this.species);
        container.appendChild(lastPokemon)
        //}
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

    async catchPokemon(e) {
        e.preventDefault()
        let resp = await newFetch.catchPokemonFetch(this)
        
    }


}

