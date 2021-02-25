class Pokemon {
    static allPokemon = []

    constructor(pokemon){
        this.id = pokemon.id
        this.species = pokemon.species
        this.trainer_id =pokemon.trainer_id
        Pokemon.allPokemon.push(this)
        
    }

      

    // catchPokemonBtn() {
    //     //if(this.trainer_id == 1){
    //     const container = document.querySelector(".pokemon-collection")
    //     const catchForm = document.createElement('form')
    //     const catchBtn = document.createElement('input')
    //     catchBtn.setAttribute('type', 'submit')
    //     catchBtn.value = 'Catch'
    //     catchBtn.id = `catch#${this.id}`
    //     catchForm.appendChild(catchBtn)
    //     catchForm.id = `form#${this.id}`
    //     let lastPokemon = document.createTextNode(this.species);
    //     container.appendChild(catchForm)
    //     catchForm.addEventListener('submit', this.catchPokemon.bind(this))
        
    //    // }
    // }
    
    // async releasePokemon(e) {
    //     e.preventDefault()
    //     let resp = await newFetch.destroyPokemon(this)
        
    // }

    // async catchPokemon(e) {
    //     debugger
    //     e.preventDefault()
    //     let resp = await newFetch.catchPokemonFetch(this)
        
    // }

    




    

}
