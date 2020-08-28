class AddUserToQuizResults < ActiveRecord::Migration[5.0]
  def change
    add_reference :quiz_results, :user, foreign_key: true
  end
end
