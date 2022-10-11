Rails.application.routes.draw do
  resources :customers, only:[:show, :create, :update, :destroy]

  resources :hairstyles, only: [:index, :show] 
  resources :appointments
  resources :hairdressers, only: [:index, :show]

end
