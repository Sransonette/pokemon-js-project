class Pokemon {
    static allPokemon = []

    constructor(pokemon){
        this.id = pokemon.id
        this.species = pokemon.species
        this.trainer_id =pokemon.trainer_id
        Pokemon.allPokemon.push(this)
        
    }

    displayPokemon() {
        const currentForm = document.createElement('form')
        let capture = document.getElementById('name-label')
        let pokemonContainer = document.querySelector('.trainer-p-collection')
        let caughtPokemon = document.createTextNode(this.species);
        pokemonContainer.appendChild(currentForm)
        pokemonContainer.appendChild(caughtPokemon)
        capture.innerText = "Below are the pokemon you currently have caught"
    }

    releasePokemonBtn() {
        let pokemonContainer = document.querySelector('.trainer-p-collection')
        const releaseForm = document.createElement('form')
        const releaseBtn = document.createElement('input')
        releaseBtn.setAttribute('type','submit')
        releaseBtn.value = 'Release'
        releaseBtn.id = `release#${this.id}`
        releaseForm.appendChild(releaseBtn)
        releaseForm.id = `form#${this.id}`
        pokemonContainer.appendChild(releaseForm)
        releaseForm.addEventListener('submit', this.releasePokemon.bind(this))
    }
    
    async releasePokemon(e) {
        e.preventDefault()
        let resp = await newFetch.destroyPokemon(this)
        
        
    }


    




    

}
