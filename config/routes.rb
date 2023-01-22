
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
  resources :lists
  resources :people

  get "/me", to: "users#show"
  
  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#destroy"
  
  get "/users", to: "users#index"
  get "/home/:id", to: "users#show"
  post "/create", to: "users#create"
  patch "/updateuser/:id", to: "users#update"
  delete "/deleteprofile", to: "users#destroy"
  
  get "/person_profile/:id", to: "people#show"
  post "/addperson", to: "people#create"
  patch "/updateperson/:id", to: "people#update"
  delete "/deleteperson/:id", to: "people#destroy"
  
  get "/avatars", to: "avatars#index"
  
  post "/add_to_movies", to: "movies#add_movie"
  
  get "/personfaves", to: "lists#index"
  delete "/deletepersonfave/:name", to: "lists#delete_myfave"
  
  get "/allfaves", to: "my_lists#index"
  post "/add_to_mylist", to: "my_lists#add_to_list"
  delete "/deletemyfave/:name", to: "my_lists#delete_myfave"
  
  get "/personfaves", to: "lists#index"
  post "/add_to_personlist", to: "lists#add_to_list"
  delete "deletepersonfave/:name", to: "lists#delete_myfave"
  
end