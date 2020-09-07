class FavouritesController < ApplicationController
  
  def index
    favourites = Favourite.all
    render json: favourites.to_json
  end
  
  def show
    favourites = Favourite.find(favourite_params)
    render json: @favourites
  end

  def create
    @favourites = Favourite.new(user_id: params[:user_id], city: params[:city], landmark: params[:landmark], description: params[:description])
    @favourites.save
    # render json: @favourites
    render json: {favourite: @favourites}, status: :ok
  end 

  def destroy
    @favourite = Favourite.find(favourite_params)
    @favourite.destroy
  end

  private

  def favourite_params
    params.require(:favourite).permit(:user_id, :city, :landmark, :description)
  end

end
