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

end
