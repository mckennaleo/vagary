class QuizQuestionsController < ApplicationController

  def show
    @quiz_question = QuizQuestion.find(quiz_question_params)
    render json: @quiz_question
  end

private 

def quiz_question_params
  params.require(:quiz_question).permit(:correct_answer, :incorrect_answer_1, :incorrect_answer_2, :incorrect_answer_3, :quiz_id)
end

end
