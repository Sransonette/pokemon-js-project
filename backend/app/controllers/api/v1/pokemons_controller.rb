class Api::V1::PokemonsController < ApplicationController

    def index
        pokemons = Pokemon.all
        render json: pokemons 
    end

    def create
        pokemon = Pokemon.create(pokemon_params)
        render json: pokemon

    end

    def destroy
        pokemon = Pokemon.find_by(id:params[:id]).destroy
        render json: pokemon
    end

    private
    def pokemon_params
        params.require(:pokemon).permit(:species, :trainer_id)
    end


end
