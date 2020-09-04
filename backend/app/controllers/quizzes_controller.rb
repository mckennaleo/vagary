class QuizzesController < ApplicationController
  # before_action :authorize_request
  def index
    quizzes = Quiz.all
    render json: quizzes.to_json
  end

  def show
    @quiz = quiz.find(quiz_params)
    render json: @quiz
  end

  private

  def quiz_params
    params.require(:quiz).permit(:name, :city_id)
  end
  
end
