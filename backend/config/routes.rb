Rails.application.routes.draw do
  resources :trainers_pokemons
  namespace :api do
    namespace :v1 do
      resources :trainers
      resources :pokemons
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
