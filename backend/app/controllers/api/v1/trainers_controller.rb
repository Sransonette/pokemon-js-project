class Api::V1::TrainersController < ApplicationController

    def show 
        trainer = Trainer.find_by(params[:name])
    end
    
    def create
        trainer = Trainer.create(trainer_params)

    end

    private
    def trainer_params
        params.require(:trainer).permit(:name)
    end


end
