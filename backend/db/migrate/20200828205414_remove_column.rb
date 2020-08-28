class RemoveColumn < ActiveRecord::Migration[5.0]
  def change
    remove_column :quiz_questions, :answer
    remove_column :users, :badge_id
  end
end
