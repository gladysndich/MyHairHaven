Rails.application.routes.draw do
  resources :customers, only:[:show, :create, :destroy, :update]

end
