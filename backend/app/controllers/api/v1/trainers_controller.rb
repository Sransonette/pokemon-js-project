class Api::V1::TrainersController < ApplicationController

    def index
        trainers = Trainer.all
        render json: trainers
    end
    
    def create
        trainer = Trainer.find_or_create_by(trainer_params)
            if !Trainer.exists?(trainer.id)
                trainer.save
                render json: trainer
            end
                redirect_to api_v1_trainer_path(trainer)
    end

    def show 
        trainer = Trainer.find_by(id: params[:id]) || Trainer.find_by(name: params[:id])
        render json: trainer.to_json(:include=> {
            :pokemons => {except: [:created_at,:updated_at]}
        })
    end

    private
    def trainer_params
        params.require(:trainer).permit(:name)
    end



#3) possibly re-think what you're using to get your pokemon menu on your ui.
#4) possibly just create an array of pokemon species names to put on the dom on the front
#5) alternatively, keep 3rd model and think about naming it "species"

end
