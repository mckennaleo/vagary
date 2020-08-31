class CitiesController < ApplicationController

  def show
    @city = City.find(city_params)
    render json: @city
  end

private

def city_params
  params.require(:city).permit(:name, :language, :coordinates)
end

end
