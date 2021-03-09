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
        let pokemonDiv = document.createElement('div')
        pokemonDiv.setAttribute("id", this.id)
        let caughtPokemon = document.createTextNode(this.species);
        pokemonDiv.appendChild(currentForm)
        pokemonDiv.appendChild(caughtPokemon)
        pokemonContainer.append(pokemonDiv)
        capture.innerText = "Below are the pokemon you currently have caught"
    }

    releasePokemonBtn() {
        let pokemonContainer = document.querySelector('.trainer-p-collection')
        let pokemonDiv = document.getElementById(this.id)
        const releaseForm = document.createElement('form')
        const releaseBtn = document.createElement('input')
        releaseBtn.setAttribute('type','submit')
        releaseBtn.value = 'Release'
        releaseBtn.id = `release#${this.id}`
        releaseForm.appendChild(releaseBtn)
        releaseForm.id = `form#${this.id}`
        pokemonDiv.appendChild(releaseForm)
        releaseForm.addEventListener('submit', this.releasePokemon.bind(this))
    }
    
    async releasePokemon(e) {
        e.preventDefault()
        let resp = await newFetch.destroyPokemon(this)
        let pokeDiv = document.getElementById(this.id)
        pokeDiv.remove()
        
    }


    




    

}
