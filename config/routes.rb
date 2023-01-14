# config/routes.rb
Rails.application.routes.draw do
  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }

  resources :sessions
  resources :user_avatars
  resources :avatars
  resources :my_lists
  resources :users

  get "/me", to: "users#show"

  post "/login", to: "sessions#login"
  post "/create", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  patch "/mylist", to: "my_lists#create"

  patch "/updateuser/:id", to: "users#update"
  delete "/deleteprofile", to: "users#destroy"

  get "/avatars", to: "avatars#index"

  get "allfaves", to: "my_lists#index"

  patch "/vote_count/:movie_id", to: "my_lists#update"
  
end
