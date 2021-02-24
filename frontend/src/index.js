const newFetch = new FetchFunctions()

document.addEventListener('DOMContentLoaded', function(){
    let trainerForm = document.getElementById('trainer-form')
    trainerForm.addEventListener('submit', grabPokemon)
    Trainer.createTrainer()
})

document.addEventListener('DOMContentLoaded', function(){
    let trainerForm = document.getElementById('trainer-form')
    let welcome = document.getElementById('welcome')
    welcome.addEventListener('click', grabTrainersPokemon)
    TrainerPokemon.createPokemon()
})

const grabTrainersPokemon = async () => {
    const pokemon = await newFetch.fetchPokemons()
    
    pokemon.map(pokemon => {
       let newPokemon = new Pokemon(pokemon)
       newPokemon.renderPokemon() 
       newPokemon.catchPokemonBtn()
       newPokemon.releasePokemonBtn()
    })
}

const grabPokemon = async () => {
    const pokemon = await newFetch.fetchPokemons()
    
    pokemon.map(pokemon => {
       let newPokemon = new Pokemon(pokemon)
       newPokemon.renderPokemon() 
       newPokemon.catchPokemonBtn()
       newPokemon.releasePokemonBtn()
    })
}








