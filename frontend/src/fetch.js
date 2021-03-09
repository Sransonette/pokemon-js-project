
class FetchFunctions {

    constructor(){
        this.baseURL = "http://localhost:3000/api/v1"
        this.trainerURL = `${this.baseURL}/trainers`
        this.pokemonURL = `${this.baseURL}/pokemons`
        this.trainersPokemonURL = `${this.baseURL}/trainers_pokemons`

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

    async fetchTrainersPokemons() {
        const name = document.getElementById('trainer-name').innerText
        let response = this.findTrainer(name)
        let json = await response
        let pokemons = await  json.pokemons
        return pokemons
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

    async catchPokemonFetch(trainerPokemon) {
        let name = document.getElementById('trainer-name')
        let trainer = await this.findTrainer(name.innerText)
        const resp = fetch(`${this.trainersPokemonURL}/${trainer.id}/${trainerPokemon.id}`, {
            method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify(
                        {
                            trainers_pokemon: {
                                species: trainerPokemon.species,
                                trainer_id: trainer.id
                            }
                        })
                })
                    .then(resp => {
                        return resp.json()
                    })

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

    findTrainer = async (name) => {
        const response = await fetch(`${this.trainerURL}/${name}`)
        const obj = await response.json()
        return obj
    }


}