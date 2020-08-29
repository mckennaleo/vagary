class FavouritesController < ApplicationController

  def show
    render json: @favourite
  end

  def create
    @favourite = Favourite.new(favourite_params)
  end 

  def destroy
    @favourite = Favourite.find params[:id]
    @favourite.destroy
  end

  private

  def favourite_params
    params.require(:favourite).permit(:user_id, :experience_id)
  end

end
