class QuizResultsController < ApplicationController

  def show
    render json: @quiz_results
  end

  
end
