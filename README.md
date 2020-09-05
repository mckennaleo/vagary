# lhl-final

## Backend setup

- gem install bundler (for Bundler 2)
- bundler install

## Client setup

- npm install

## Ruby Version:

`2.3.5`

## Rails Version:

`5.0.7`

## Start backend server:

navigate to /backend
\$ `rails s -p 3001 -b 0.0.0.0`

- reset db: `rails db:reset` & `rails db:migrate`

## database name (development):

backend_test_final

## Start frontend server

navigate to /client
\$ npm start

## BACKEND ROUTES

city GET /cities/:id(.:format) cities#show
quiz GET /quizzes/:id(.:format) quizzes#show
favourites POST /favourites(.:format) favourites#create
favourite GET /favourites/:id(.:format) favourites#show
DELETE /favourites/:id(.:format) favourites#destroy
experience GET /experiences/:id(.:format) experiences#show
quiz_question GET /quiz_questions/:id(.:format) quiz_questions#show
quiz_results POST /quiz_results(.:format) quiz_results#create
quiz_result GET /quiz_results/:id(.:format) quiz_results#show
login GET /login(.:format) sessions#new
POST /login(.:format) sessions#create
logout GET /logout(.:format) sessions#destroy
signup GET /signup(.:format) users#new
users POST /users(.:format) users#create
