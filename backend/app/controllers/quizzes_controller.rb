class QuizzesController < ApplicationController

  def show
    render json: @quiz
  end
  
end
