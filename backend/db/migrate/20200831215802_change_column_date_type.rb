class ChangeColumnDateType < ActiveRecord::Migration[5.0]
  def change
    change_column :quiz_results, :result, 'integer USING CAST(result AS integer)'
  end
end
