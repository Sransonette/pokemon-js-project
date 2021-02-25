class Trainer {

    constructor(trainer){
        this.id = trainer.id
        this.name = trainer.name
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

    static getTrainerId() {
        let trainerName = document.getElementById('trainer-name')
        //this is to grab trainer id and created pokemon

    }



}