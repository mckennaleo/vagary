class CreateQuizQuestions < ActiveRecord::Migration[5.0]
  def change
    create_table :quiz_questions do |t|
      t.string :question
      t.string :correct
      t.string :answer
      t.string :incorrect_answer_1
      t.string :incorrect_answer_2
      t.string :incorrect_answer_3

      t.timestamps
    end
  end
end
