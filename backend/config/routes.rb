Rails.application.routes.draw do
  get 'playlists/show'

  get 'playlists/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    resources :users, only: [:create, :show, :index]
  end
  post '/api/login', to: 'authentication#login'
  post '/api/logout', to: 'authentication#logout'
  # post '/api/test', to: 'authentication#test'
  
  resources :avatars, only: [:show]

  resources :badges, only: [:show]

  resources :cities, only: [:show, :index]

  resources :quizzes, only: [:show, :index]

  resources :favourites, only: [:index, :show, :create, :destroy]

  resources :experiences, only: [:show]

  resources :quiz_questions, only: [:show, :index]

  resources :quiz_results, only: [:show, :create, :index]

  resources :translations, only: [:show, :index]

  resources :playlists, only: [:show, :index]

    # these routes are for showing users a login form, logging them in, and logging them out.
    # get '/login' => 'sessions#new'
    # post '/login' => 'sessions#create'
    # get '/logout' => 'sessions#destroy'

  
    # These routes will be for signup. The first renders a form in the browse, the second will 
    # receive the form and create a user in our database using the data given to us by the user.
    # get '/signup' => 'users#new'
    # post '/users' => 'users#create'

end
