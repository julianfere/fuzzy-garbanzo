Rails.application.routes.draw do
  root "application#index"

  post "/login", to: "auth#login"
  resources :users
end
