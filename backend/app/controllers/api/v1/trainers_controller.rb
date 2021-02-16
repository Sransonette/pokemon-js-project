class Api::V1::TrainersController < ApplicationController

    def create


    end

    private
    def trainer_params
        params.require(:trainer).permit(:name)
    end


end
