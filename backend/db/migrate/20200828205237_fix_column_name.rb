class FixColumnName < ActiveRecord::Migration[5.0]
  def change
    rename_column :quiz_questions, :correct, :correct_answer
  end
end
