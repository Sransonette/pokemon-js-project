document.addEventListener('DOMContentLoaded', function(){
    //Trainer.createTrainer()
})

class Trainer {

    constructor(trainer){
        this.id = trainer.id
        this.name = trainer.name
        this.problem = trainer.problem
    }

    static createTrainer(){
        let trainer-form = document.getElementById('trainer-form')
        trainer-form.addEventListener('submit', function(e){
            e.preventDefault()
                fetch('http://localhost:3000/api/v1/trainers', {
                    method: "POST"
                    head
                })
        })

    }

    


}