class AddQuizToQuizResults < ActiveRecord::Migration[5.0]
  def change
    add_reference :quiz_results, :quiz, foreign_key: true
  end
end
