
class FetchFunctions {

    constructor(){
        this.baseURL = "http://localhost:3000/api/v1"
        this.trainerURL = `${this.baseURL}/trainers`
        this.pokemonURL = `${this.baseURL}/pokemons`

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
        debugger;
        const resp = fetch(`${this.pokemonURL}/${pokemon.id}`, {
            method: "DESTROY",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },

        })
        return resp.json()
    }

    // newFetch.fetchPokemons()
    //       .then (pokemons => {
    //       for (let i=0; i < pokemons.length; i++){
    //           let pokemon = new Pokemon(pokemons[i])
    //           pokemon.renderPokemon()
    //       }
    //       })



}