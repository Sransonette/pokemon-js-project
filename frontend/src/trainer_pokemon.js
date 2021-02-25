class TrainerPokemon {

    constructor(trainerPokemon){
        this.id = trainerPokemon.id
        this.species = trainerPokemon.species
        
    }

    static renderTrainerPokemon(){
        let trainerName = document.getElementById('trainer-name')
        trainerName.addEventListener('click', function(e){
            e.preventDefault()
                fetch("http://localhost:3000/api/v1/trainers_pokemons", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                })
                    .then(resp => {
                        return resp.json()
                    })
                    .then(trainerPokemon => {
                        let newTrainerPokemon = new TrainerPokemon(trainerPokemon)
                        newTrainerPokemon.displayPokemon()
                    })
        })

    }

    renderPokemon() {
        //if(this.trainer_id ==1){
        const container = document.querySelector(".pokemon-collection")
        let lastPokemon = document.createTextNode(this.species);
        container.appendChild(lastPokemon)
        //}
    }  

    displayPokemon() {
        const currentForm = document.createElement('form')
        let capture = document.getElementById('name-label')
        let pokemonContainer = document.querySelector('.trainer-p-collection')
        let caughtPokemon = document.createTextNode(this.species);
        pokemonContainer.appendChild(currentForm)
        pokemonContainer.appendChild(caughtPokemon)
        capture.innerText = "Below are the pokemon you currently have caught"
        
    }

    releasePokemonBtn() {
        let pokemonContainer = document.querySelector('.trainer-p-collection')
        const releaseForm = document.createElement('form')
        const releaseBtn = document.createElement('input')
        releaseBtn.setAttribute('type','submit')
        releaseBtn.value = 'Release'
        releaseBtn.id = `release#${this.id}`
        releaseForm.appendChild(releaseBtn)
        releaseForm.id = `form#${this.id}`
        pokemonContainer.appendChild(releaseForm)
        releaseForm.addEventListener('submit', this.releasePokemon.bind(this))
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

    async releasePokemon(e) {
        e.preventDefault()
        let resp = await newFetch.destroyPokemon(this)
        
    }


}

