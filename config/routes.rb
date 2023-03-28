
Rails.application.routes.draw do
  # get '*path', to: 'fallback#index',
  # constraints: ->(req) { !req.xhr? && req.format.html? }

  # resources :sessions
  resources :avatars, only: [:index]
  resources :my_lists, only: [:index, :update]
  resources :users
  resources :accounts
  resources :movies, only: [:list, :create, :update]
  resources :lists,  only: [:index, :update]
  resources :people

  get "/me", to: "users#show"
  
  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#destroy"
  
  get "/users", to: "users#index"
  get "/home/:id", to: "users#show"
  post "/create", to: "users#create"
  patch "/updateuser/:id", to: "users#update"
  delete "/deleteprofile", to: "users#destroy"
  
  get '/profile_me', to: "people#show"
  get "/person_profile/:id", to: "people#profile_change"
  post "/addperson", to: "people#create"
  patch "/updateperson/:id", to: "people#update"
  delete "/deleteprofile/:id", to: "people#destroy"
  
  get "/avatars", to: "avatars#index"
  
  post "/add_likes", to: "movies#add_movie"
  
  # get "/personfaves", to: "lists#index"
  # delete "/deletepersonfave/:name", to: "lists#delete_myfave"
  
  get "/allfaves", to: "my_lists#index"
  post "/add_to_mylist", to: "my_lists#add_to_list"
  delete "/deletemyfave/:name", to: "my_lists#delete_myfave"
  
  get "/personfaves", to: "lists#index"
  post "/add_to_personlist", to: "lists#add_to_list"
  delete "deletepersonfave/:name", to: "lists#delete_myfave"
  
end