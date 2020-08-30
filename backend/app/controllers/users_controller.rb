class UsersController < ApplicationController
  def index
    users = User.all
    render json: users
  end

  def new
  end

  def create
    @user = User.new(user_params)
    #stores all emails in lowercase to avoid errors
    @user.email.downcase!
    @user.save
    if @user.save
      session[:user_id] = @user.id
      redirect_to '/'
    else
      redirect_to '/signup'
    end
  end

  private
  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end
