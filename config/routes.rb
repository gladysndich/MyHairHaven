Rails.application.routes.draw do
  resources :customers, only:[:show, :create, :destroy, :update]

  resources :hairstyles, only: [:index, :show] 
  resources :appointments
  resources :hairdressers, only: [:index, :show]

  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
end
