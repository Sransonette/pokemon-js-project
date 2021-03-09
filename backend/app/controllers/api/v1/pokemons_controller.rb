class Api::V1::PokemonsController < ApplicationController

    def index
       # binding.pry
        pokemons = Pokemon.all.uniq{|p| p.species}
        render json: pokemons 
    end

    def destroy
        trainers_pokemons = Pokemon.find(params[:id])
        if trainers_pokemons.destroy
            render json: {status: "success"}
        else
            render json: {status: "Failure"}
        end
        
    end

    

end
