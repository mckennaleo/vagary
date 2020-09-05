class ChangeQuizResultToFloat < ActiveRecord::Migration[5.0]
  def change
    change_column :quiz_results, :result, :float
  end
end
