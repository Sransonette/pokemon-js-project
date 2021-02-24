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
        let trainerName = document.getElementById('trainer-name')
        let welcome = document.getElementById('welcome')
        let capture = document.getElementById('name-label')
        let nameInput = document.getElementById('name-input')
        let submitUserBtn = document.getElementById('submitUserBtn')
        let pokemonContainer = document.querySelector('.pokemon-collection')
        welcome.innerText = `Welcome Trainer`
        trainerName.innerText = `${this.name}`
        capture.innerText = "Which Pokemon would you like to catch? Click your name to see personal pokemon collection"
        nameInput.remove('name-input');
        submitUserBtn.remove('submitUserBtn')
        
    }

    grabTrainersPokemon() {

        
    }



}