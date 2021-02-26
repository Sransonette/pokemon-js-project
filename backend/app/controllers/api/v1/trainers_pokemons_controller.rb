class Api::V1::TrainersPokemonsController < ApplicationController

    def index
        trainerspokemons = TrainersPokemon.all
        render json: trainerspokemons 
    end

    def create
        #binding.pry
        trainer = Trainer.find(params[:trainer_id])
        pokemon = Pokemon.find(params[:pokemon_id])
        trainer.pokemons << pokemon
        redirect_to api_v1_trainer_path(trainer)

    end

    def delete
        #binding.pry
        trainer = Trainer.find(params[:trainer_id])
        pokemon = Pokemon.find(params[:pokemon_id])
        trainer.pokemons.destroy(pokemon)

    end

    private
    def trainers_pokemon_params
        params.require(:trainers_pokemon).permit(:species, :trainer_id, :pokemon_id)
    end



end
