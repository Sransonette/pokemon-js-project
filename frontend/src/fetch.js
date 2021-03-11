
class FetchFunctions {

    constructor(){
        this.baseURL = "http://localhost:3000/api/v1"
        this.trainerURL = `${this.baseURL}/trainers`
        this.pokemonURL = `${this.baseURL}/pokemons`
        this.trainersPokemonURL = `${this.baseURL}/trainers_pokemons`

    }

    createTrainer(e){
        e.preventDefault()
        let name = e.target.children[1].value
                fetch('http://localhost:3000/api/v1/trainers', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify(
                        {
                            trainer: {
                                
                                name: name
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
                

    }

    fetchTrainers() {
        fetch(this.trainerURL)
        .then(resp => resp.json())
        .then(trainers => console.log(trainers))
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

    async catchPokemonFetch(pokemon) {
        const trainer = Trainer.currentTrainer
        const resp = await fetch(`${this.pokemonURL}/${trainer.id}/${pokemon.id}`, {
            method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify(
                        {
                            pokemons: {
                                species: pokemon.species,
                                trainer_id: trainer.id
                            }
                        })
                })
                    .then(resp => {
                        return resp.json()
                    })

    }

    async fetchTrainersPokemons() {
        const response = await fetch(`${this.trainerURL}/${Trainer.currentTrainer.id}`)
        const obj = await response.json()
        return obj.pokemons
    }

    async destroyPokemon(pokemon) {
        
        const response = await fetch(`${this.pokemonURL}/${pokemon.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                },
            })
            return response.json()


    }

    

    

    


}