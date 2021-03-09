class Trainer {

    static currentTrainer = null

    constructor(trainer){
        this.id = trainer.id
        this.name = trainer.name
        this.constructor.setCurrentTrainer(this)
    }

    static setCurrentTrainer(trainer) {
        this.currentTrainer = trainer
    }

    displayTrainer() {
        let trainerName = document.getElementById('trainer-name')
        let welcome = document.getElementById('welcome')
        let capture = document.getElementById('name-label')
        let nameInput = document.getElementById('name-input')
        let submitUserBtn = document.getElementById('submitUserBtn')
        welcome.innerText = `Welcome Trainer`
        trainerName.innerText = `${this.name}`
        capture.innerText = "Which Pokemon would you like to catch? Click your name to see personal pokemon collection"
        nameInput.remove('name-input');
        submitUserBtn.remove('submitUserBtn')
        
    }

    static getTrainerId() {
        let trainerName = document.getElementById('trainer-name')

    }



}