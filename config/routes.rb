Rails.application.routes.draw do
  resources :users
  get '/login', to: 'sessions#login'
  post '/login', to: 'sessions#login'
  get '/logout', to: 'sessions#logout'
  get '/home', to: 'sessions#home'

end
