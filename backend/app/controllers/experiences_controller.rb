class ExperiencesController < ApplicationController

  def show
     @experience = Experience.find(params[:id])
     render json: @experience

    # if stale?(last_modified: @experience.updated_at)
    #   render json: @experience
    # end
  end



end
