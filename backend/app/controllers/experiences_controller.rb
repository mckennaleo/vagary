class ExperiencesController < ApplicationController

  def show
     @experience = Experience.find(experience_params)
     render json: @experience
  end

private

def experience_params 
  params.require(:experience).permit(:name, :url, :description, :coordinates, :city_id)
end

end
