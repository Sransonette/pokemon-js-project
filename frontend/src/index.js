const newFetch = new FetchFunctions()

document.addEventListener('DOMContentLoaded', function(){
    let trainerForm = document.getElementById('trainer-form')
    trainerForm.addEventListener('submit', grabPokemon)
    Trainer.createTrainer()
})

document.addEventListener('DOMContentLoaded', function(){
    let trainerName = document.getElementById('trainer-name')
    trainerName.addEventListener('click', grabTrainersPokemon)
    TrainerPokemon.renderTrainerPokemon()
})

const grabTrainersPokemon = async () => {
    const pokemon = await newFetch.fetchTrainersPokemons()
    
    pokemon.map(pokemon => {
       let newTrainerPokemon = new TrainerPokemon(pokemon)
       newTrainerPokemon.displayPokemon()
       newPokemon.releasePokemonBtn()
       
      
    })
}

const grabPokemon = async () => {
    const pokemon = await newFetch.fetchPokemons()
    
    pokemon.map(pokemon => {
       let newPokemon = new Pokemon(pokemon)
       newPokemon.renderPokemon() 
       newPokemon.catchPokemonBtn()
       
       
    })
}








