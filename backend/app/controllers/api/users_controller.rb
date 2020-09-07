class Api::UsersController < ApplicationController

  before_action :authorize_request, except: :create

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
    @user = User.new(name: params[:name], email: params[:email], password: params[:password], password_confirmation: params[:password_confirmation])
    if @user.save
      # token = encode_token(@user.id)  
      token = JsonWebToken.encode(user_id: @user.id)
      render json: {user: @user, token: token}, status: :created
    else
      render json: { errors: @user.errors.full_messages },
             status: :unprocessable_entity
    end
    
  end
  # PUT /users/{id}
  def update
    @user = User.find(params[:id])
    @user.update(name: params[:name], email: params[:email], password: params[:password], password_confirmation: params[:password_confirmation])
    if @user.save
      token = encode_token(@user.id)  
      render json: {user: @user, token: token}, status: :created
    else
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
      :name, :username, :email, :password, :password_confirmation
    )
  end

end
