class Api::V1::TrainersController < ApplicationController

    def index
        trainers = Trainer.all
        render json: trainers
    end
    
    def create
        if Trainer.find_by(:name => trainer_params[:name])
            trainer = Trainer.find_by(:name => trainer_params[:name])
            redirect_to "/api/v1/trainers/#{trainer.id}"
        else
            trainer = Trainer.create(trainer_params)
            render json: trainer
        end

    end

    def show 
        trainer = Trainer.find_by(:id => params[:id].to_i)
        render json: trainer
    end

    private
    def trainer_params
        params.require(:trainer).permit(:name)
    end


end
