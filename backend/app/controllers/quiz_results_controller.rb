class QuizResultsController < ApplicationController

  def show
    render json: @quiz_results
  end

  def create
    @quiz_results = QuizResult.new(quiz_results_params)
  end

  ## do we need destroy ???

  private

  def quiz_results_params
    params.require(:quiz_results).permit(:user_id, :quiz_id, :result)
  end
end
