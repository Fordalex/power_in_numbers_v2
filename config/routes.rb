Rails.application.routes.draw do
  root 'sessions#login'
  resources :users
  resources :plans
  get '/workouts', to: 'workouts#index'
  get '/login', to: 'sessions#login'
  post '/login', to: 'sessions#login'
  get '/logout', to: 'sessions#logout'
  get '/home', to: 'sessions#home'

end
