class QuizQuestionsController < ApplicationController

  def show
    render json: @quiz_question
  end

end
