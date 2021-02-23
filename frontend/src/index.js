const newFetch = new FetchFunctions()

document.addEventListener('DOMContentLoaded', function(){
    let trainerForm = document.getElementById('trainer-form')
    trainerForm.addEventListener('submit', grabPokemon)
    Trainer.createTrainer()
})
const grabPokemon = async () => {
    const pokemon = await newFetch.fetchPokemons()
    pokemon.map(pokemon => {
       let newPokemon = new Pokemon(pokemon)
       newPokemon.renderPokemon() 
       debugger;
       newPokemon.catchPokemonBtn()
       newPokemon.releasePokemonBtn()
    })
}








