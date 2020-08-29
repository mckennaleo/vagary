class ExperiencesController < ApplicationController

  def show
    render json: @experience
  end


end
