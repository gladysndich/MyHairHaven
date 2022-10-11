Rails.application.routes.draw do
  resources :customers, only:[:show, :create, :update, :destroy]

end
