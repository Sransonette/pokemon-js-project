class Trainer < ApplicationRecord
    has_many :trainers_pokemons
    has_many :pokemons, through: :trainers_pokemons
    
end
