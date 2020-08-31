class QuizzesController < ApplicationController

  def show
    @quiz = quiz.find(quiz_params)
    render json: @quiz
  end

  private

  def quiz_params
    params.require(:quiz).permit(:name, :city_id)
  end
  
end
