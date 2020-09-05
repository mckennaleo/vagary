class CitiesController < ApplicationController

  def show
    @city = City.find(city_params)
    render json: @city
  end

  def index
    cities = City.all
    render json: cities.to_json
  end

private

def city_params
  params.require(:city).permit(:name, :language, :coordinates)
end

end
