class TrainerPokemon {

    constructor(trainerPokemon){
        this.id = trainerPokemon.id
        this.name = trainerPokemon.name
    }

    static createTrainerPokemon(){
        let trainerForm = document.getElementById('trainer-form')
        let welcome = document.getElementById('welcome')
        welcome.addEventListener('submit', function(e){
            e.preventDefault()
                fetch(this.trainersPokemonURL, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify(
                        {
                            pokemon: {
                                name: e.target.children[1].value
                            }
                        })
                })
                    .then(resp => {
                        return resp.json()
                    })
                    .then(trainerPokemon => {
                        let newTrainerPokemon = new TrainerPokemon(trainerPokemon)
                        newTrainerPokemon.displayPokemon()
                    })
        })

    }

    displayPokemon() {
        let welcome = document.getElementById('welcome')
        let capture = document.getElementById('name-label')
        let nameInput = document.getElementById('name-input')
        let submitUserBtn = document.getElementById('submitUserBtn')
        let pokemonContainer = document.querySelector('.pokemon-collection')
        welcome.innerText = `${this.name} current caught pokemon`
        capture.innerText = "Below are the pokemon you currently have caught"
        nameInput.remove('name-input');
        submitUserBtn.remove('submitUserBtn')
        
            

    }







}

