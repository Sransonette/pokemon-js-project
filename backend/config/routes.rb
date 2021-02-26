Rails.application.routes.draw do
  
  namespace :api do
    namespace :v1 do
      resources :trainers
      resources :trainers_pokemons
      resources :pokemons
      post '/trainers_pokemons/:trainer_id/:pokemon_id', to: 'trainers_pokemons#create'
      delete '/trainers_pokemons/:trainer_id/:pokemon_id', to: 'trainers_pokemons#delete'
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
