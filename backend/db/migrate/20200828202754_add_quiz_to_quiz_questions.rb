class AddQuizToQuizQuestions < ActiveRecord::Migration[5.0]
  def change
    add_reference :quiz_questions, :quiz, foreign_key: true
  end
end
