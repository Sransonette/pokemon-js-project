class Pokemon < ApplicationRecord
    has_many :trainers_pokemons
    has_many :trainers, through: :trainers_pokemons
end
