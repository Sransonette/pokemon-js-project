class Trainer {

    constructor(trainer){
        this.id = trainer.id
        this.name = trainer.name
    }

    static createTrainer(){
        let trainerForm = document.getElementById('trainer-form')
        trainerForm.addEventListener('submit', function(e){
            e.preventDefault()
                fetch('http://localhost:3000/api/v1/trainers', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify(
                        {
                            trainer: {
                                name: e.target.children[1].value
                            }
                        })
                })
                    .then(resp => {
                        return resp.json()
                    })
                    .then(trainer => {
                        let newTrainer = new Trainer(trainer)
                        newTrainer.displayTrainer()
                    })
        })

    }

    displayTrainer() {
        let welcome = document.getElementById('welcome')
        let capture = document.getElementById('name-label')
        let nameInput = document.getElementById('name-input')
        let inputButton = document.getElementById('input')
        let pokemonContainer = document.querySelector('.pokemon-collection')
        welcome.innerText = `Welcome Trainer ${this.name}`
        capture.innerText = "Which Pokemon would you like to catch?"
        nameInput.remove('name-input');
        document.querySelector('.pokemon-collection').innerHTML += Pokemon.displayPokemon()
        newFetch.fetchPokemons()
            .then (pokemons => {
                for (let i=0; i < pokemons.length; i++){
                    let pokemon = new Pokemon(pokemons[i])
                    pokemon.renderPokemon()
                }
            
            })
            

    }

    


}