
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
        const resp = fetch(`${this.pokemonURL}/${pokemon.id}`, {
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
        
    

    async catchPokemonFetch(pokemon) { 
        const resp = fetch(`${this.pokemonURL}`, {
            method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify(
                        {
                            pokemon: {
                                species: pokemon.species,
                                trainer: pokemon.trainer_id
                            }
                        })
                })
                    .then(resp => {
                        return resp.json()
                    })

    }


}