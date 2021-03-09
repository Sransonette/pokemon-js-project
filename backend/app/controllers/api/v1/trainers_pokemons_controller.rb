class Api::V1::TrainersPokemonsController < ApplicationController

    def index
        trainerspokemons = TrainersPokemon.all
        render json: trainerspokemons 
    end

    def create
        #binding.pry
        trainer = Trainer.find(params[:trainers_pokemon][:trainer_id])
        current_pokemon = Trainer.find(trainer.id).pokemons
        pokemon = Pokemon.create(species: params[:trainers_pokemon][:species])
        #self.pokemon_id = pokemon.id
        current_pokemon << pokemon
        redirect_to api_v1_trainer_path(trainer)

    end

    private
    def trainers_pokemon_params
        params.require(:trainers_pokemon).permit(:species, :trainer_id, :pokemon_id)
    end



end
