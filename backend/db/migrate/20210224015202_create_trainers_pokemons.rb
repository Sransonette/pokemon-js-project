class CreateTrainersPokemons < ActiveRecord::Migration[6.0]
  def change
    create_table :trainers_pokemons do |t|
      t.string :species
      t.belongs_to :trainer
      t.belongs_to :pokemon
      t.timestamps
    end
  end
end
