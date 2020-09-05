class FavouritesController < ApplicationController
  
  def index
    favourites = Favourite.all
    render json: favourites.to_json
  end
  
  def show
    favourite = Favourite.find(favourite_params)
    render json: @favourite
  end

  def create
    @favourite = Favourite.new(favourite_params)
  end 

  def destroy
    @favourite = Favourite.find(favourite_params)
    @favourite.destroy
  end

  private

  def favourite_params
    params.require(:favourite).permit(:user_id, :experience_id)
  end

end
