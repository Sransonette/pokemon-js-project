class Pokemon < ApplicationRecord
    belongs_to :trainer
    belongs_to :trainer_pokemon
end
