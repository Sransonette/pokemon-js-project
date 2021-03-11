Rails.application.routes.draw do
  
  namespace :api do
    namespace :v1 do
      resources :trainers
      resources :trainers_pokemons
      resources :pokemons
      post '/pokemons/:trainer_id/:pokemon_id', to: 'pokemons#create'
      
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
