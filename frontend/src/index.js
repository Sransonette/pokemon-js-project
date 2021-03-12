const newFetch = new FetchFunctions()

document.addEventListener('DOMContentLoaded', function(){
    let trainerForm = document.getElementById('trainer-form')
    let trainerName = document.getElementById('trainer-name')
    trainerForm.addEventListener('submit', grabPokemon)
    trainerForm.addEventListener('submit', newFetch.createTrainer);
    trainerName.addEventListener('click', grabTrainersPokemon)
    trainerDisplaybtn()

})

const grabPokemon = async () => {
    const pokemon = await newFetch.fetchPokemons()
    pokemon.map(pokemon => {
       let newPokemon = new Pokemon(pokemon)
       newPokemon.displayCatchablePokemon() 
       newPokemon.catchPokemonBtn()
    })
}

const grabTrainersPokemon = async () => {
    let pokemonList = document.querySelector(".trainer-p-collection").children
    const container = document.querySelector(".pokemon-collection")
    if (pokemonList.length === 0){
        const pokemons = await newFetch.fetchTrainersPokemons()
        pokemons.map(pokemon => {
        let pokemonInstance = new Pokemon(pokemon)
        pokemonInstance.displayPokemon()
        pokemonInstance.releasePokemonBtn()
        })
        container.remove()
    }
}

const trainerDisplaybtn = () => {
    let btn = document.createElement("button")
    btn.innerHTML = "All Trainers"
    document.body.appendChild(btn);
    btn.addEventListener("click", allTrainerFetch)
    
}

const allTrainerFetch = async () => {
    const trainers = await newFetch.fetchTrainers()
    trainers.map(trainer => {
        alert(trainer.name)
    })
    
}













