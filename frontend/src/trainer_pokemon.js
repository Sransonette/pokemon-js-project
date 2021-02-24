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

    displayPokemon() {
        const currentForm = document.createElement('form')
        let capture = document.getElementById('name-label')
        const container = document.querySelector(".pokemon-collection")
        let pokemonContainer = document.querySelector('.trainer-p-collection')
        container.remove()
        let caughtPokemon = document.createTextNode(this.species);
        pokemonContainer.appendChild(currentForm)
        pokemonContainer.appendChild(caughtPokemon)
        capture.innerText = "Below are the pokemon you currently have caught"
        
    }

    releasePokemonBtn() {
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
    }


}

