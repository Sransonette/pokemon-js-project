const newFetch = new FetchFunctions()

document.addEventListener('DOMContentLoaded', function(){
    let trainerForm = document.getElementById('trainer-form')
    trainerForm.addEventListener('submit', grabPokemon)
    FetchFunctions.createTrainer()

})

document.addEventListener('DOMContentLoaded', function(){
    let trainerName = document.getElementById('trainer-name')
    trainerName.addEventListener('click', grabTrainersPokemon)
    TrainerPokemon.renderTrainerPokemon()
})

const grabTrainersPokemon = async () => {
    const container = document.querySelector(".pokemon-collection")
    if (container != null){
            container.remove();
        } 
    const pokemon = await newFetch.fetchTrainersPokemons()   
    pokemon.map(pokemon => {
       let newTrainerPokemon = new TrainerPokemon(pokemon)
       newTrainerPokemon.displayPokemon()
       newTrainerPokemon.releasePokemonBtn()
       
      
    })
}

const grabPokemon = async () => {
    const pokemon = await newFetch.fetchPokemons()
    
    pokemon.map(pokemon => {
       let newPokemon = new TrainerPokemon(pokemon)
       newPokemon.renderPokemon() 
       newPokemon.catchPokemonBtn()
       
       
    })
}








