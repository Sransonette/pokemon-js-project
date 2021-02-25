
class FetchFunctions {

    constructor(){
        this.baseURL = "http://localhost:3000/api/v1"
        this.trainerURL = `${this.baseURL}/trainers`
        this.pokemonURL = `${this.baseURL}/pokemons`
        this.trainersPokemonURL = `${this.baseURL}/trainers_pokemons`

    }

    async fetchTrainersPokemons() {

        const response = await fetch(this.trainersPokemonURL, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        return response.json()

    }

    async fetchPokemons() {
        const response = await fetch(this.pokemonURL, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        return response.json()
    }

    fetchTrainers() {
        fetch(this.trainerURL)
        .then(resp => resp.json())
        .then(trainers => console.log(trainers))
    }

    async destroyPokemon(pokemon) {
        const resp = fetch(`${this.trainersPokemonURL}/${pokemon.id}`, {
            method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify(
                        {
                            pokemon: {
                                species: pokemon.species,
                                trainer_id: pokemon.trainer_id
                            }
                        })
                })
                    .then(resp => {
                        return resp.json()
                    })

    }
        
    

    async catchPokemonFetch(trainerPokemon) {
        debugger
        let trainer_id = Trainer.getTrainerId()
        const resp = fetch(`${this.trainersPokemonURL}`, {
            method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify(
                        {
                            trainers_pokemon: {
                                species: trainerPokemon.species,
                                trainer_id: trainer_id
                            }
                        })
                })
                    .then(resp => {
                        return resp.json()
                    })

    }

    static createTrainer(){
        let trainerForm = document.getElementById('trainer-form')
        trainerForm.addEventListener('submit', function(e){
            e.preventDefault()
                fetch('http://localhost:3000/api/v1/trainers', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify(
                        {
                            trainer: {
                                name: e.target.children[1].value
                            }
                        })
                })
                    .then(resp => {
                        return resp.json()
                    })
                    .then(trainer => {
                        let newTrainer = new Trainer(trainer)
                        newTrainer.displayTrainer()
                    })
        })

    }


}