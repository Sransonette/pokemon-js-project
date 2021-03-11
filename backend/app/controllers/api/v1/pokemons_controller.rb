class Api::V1::PokemonsController < ApplicationController

    def index
        pokemons = Pokemon.all.uniq{|p| p.species}
        render json: pokemons
    end

    def create
        trainer = Trainer.find(params[:pokemons][:trainer_id])
        current_pokemon = Trainer.find(trainer.id).pokemons
        pokemon = Pokemon.create(species: params[:pokemons][:species])
        current_pokemon << pokemon
        redirect_to api_v1_trainer_path(trainer)
    end

    def destroy
        trainers_pokemons = Pokemon.find(params[:id])
        if trainers_pokemons.destroy
            render json: {status: "success"}
        else
            render json: {status: "Failure"}
        end
        
    end

    private
    def pokemon_params
        params.require(:pokemons).permit(:species, :trainer_id, :pokemon_id)
    end

end
