class CreateTrainersPokemons < ActiveRecord::Migration[6.0]
  def change
    create_table :trainers_pokemons do |t|

      t.timestamps
    end
  end
end
