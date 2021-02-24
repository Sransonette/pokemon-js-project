class TrainerPokemon {

    constructor(trainerPokemon){
        this.id = trainerPokemon.id
        this.name = trainerPokemon.species
    }

    static createTrainerPokemon(){
        debugger
        // if (Trainer.this.id )
        //let trainerForm = document.getElementById('trainer-form')
        let welcome = document.getElementById('welcome')
        welcome.addEventListener('click', function(e){
            e.preventDefault()
                fetch(this.trainersPokemonURL, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify(
                        {
                            pokemon: {
                                name: e.target.children[1].value
                            }
                        })
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
        let lastPokemon = document.createTextNode(this.species);
        container.appendChild(currentForm)
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

