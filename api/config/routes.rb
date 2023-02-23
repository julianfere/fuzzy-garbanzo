Rails.application.routes.draw do
  root "application#index"

  post "/login", to: "auth#login"

  resources :users do
    post '/toggle', to: 'users#toggle'
  end

  resources :students
end
