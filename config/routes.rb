# config/routes.rb
Rails.application.routes.draw do
  # get '*path', to: 'fallback#index',
  # constraints: ->(req) { !req.xhr? && req.format.html? }

  # resources :sessions
  resources :user_avatars
  resources :avatars
  resources :my_lists
  resources :users
  resources :accounts
  resources :movies

  get "/me", to: "users#show"
  
  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#destroy"
  
  get "/home/:id", to: "users#show"
  get "/users", to: "users#index"
  post "/create", to: "users#create"
  patch "/updateuser/:id", to: "users#update"
  delete "/deleteprofile", to: "users#destroy"

  get "/avatars", to: "avatars#index"
  
  post "/add_to_movies", to: "movies#add_movie"
  
  get "allfaves", to: "my_lists#index"
  post "/add_to_mylist", to: "my_lists#add_to_list"
  delete "/deletemyfave/:name", to: "my_lists#delete_myfave"
  
end
