Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # namespace :api do
  #   resources :users
  # end
  
  resources :avatars, only: [:show]

  resources :badges, only: [:show]

  resources :cities, only: [:show]

  resources :quizzes, only: [:show]

  resources :favourites, only: [:show, :create, :destroy]

  resources :experiences, only: [:show]

  resources :quiz_questions, only: [:show]

  resources :quiz_results, only: [:show, :create]

    # these routes are for showing users a login form, logging them in, and logging them out.
    get '/login' => 'sessions#new'
    post '/login' => 'sessions#create'
    get '/logout' => 'sessions#destroy'
  
    # These routes will be for signup. The first renders a form in the browser, the second will receive the form and create a user in the database using the data given to us by the user.
    get '/signup' => 'users#new'
    post '/users' => 'users#create'


end
