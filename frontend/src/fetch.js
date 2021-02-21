
class FetchFunctions {

    constructor(){
        this.baseURL = "http://localhost:3000/api/v1"
        this.trainerURL = `${this.baseURL}/trainers`
        this.pokemonURL = `${this.baseURL}/pokemons`

    }

    fetchPokemons() {
        return fetch(this.pokemonURL)
        .then(resp => {
            let json = resp.json()
            return json})
        //.then(pokemons => console.log(pokemons))
    }

    fetchTrainers() {
        fetch(this.trainerURL)
        .then(resp => resp.json())
        .then(trainers => console.log(trainers))
    }



}