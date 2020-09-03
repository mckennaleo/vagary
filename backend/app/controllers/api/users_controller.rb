class Api::UsersController < ApplicationController

  before_action :authorize_request, except: :create
  before_action :find_user, except: %i[create index]
  # GET /users
  def index
    @users = User.all
    render json: @users, status: :ok
  end
  # GET /users/{username}
  def show
    render json: @user, status: :ok
  end
  # POST /users
  def create
    puts params
    puts params
    @user = User.new(email: params[:email], password: params[:password], password_confirmation: params[:password_confirmation], avatar_id: params[:avatar])
    if @user.save
      token = encode_token(@user.id)  
      render json: {user: @user, token: token}, status: :created
    else
      render json: { errors: @user.errors.full_messages },
             status: :unprocessable_entity
    end
    
  end
  # PUT /users/{username}
  def update
    unless @user.update(user_params)
      render json: { errors: @user.errors.full_messages },
             status: :unprocessable_entity
    end
  end
  # DELETE /users/{username}
  def destroy
    @user.destroy
  end

  private

  def find_user
    @user = User.find_by_username!(params[:_username])
    rescue ActiveRecord::RecordNotFound
      render json: { errors: 'User not found' }, status: :not_found
  end

  def user_params
    params.permit(
      :avatar, :name, :username, :email, :password, :password_confirmation
    )
  end

end
