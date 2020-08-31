class QuizResultsController < ApplicationController

  def show
    @quiz_results = QuizResult.find(quiz_results_params)
    render json: @quiz_results
  end

  def create
    @quiz_results = QuizResult.new(quiz_results_params)
  end

  private

  def quiz_results_params
    params.require(:quiz_results).permit(:result, :user_id, :quiz_id)
  end
end
