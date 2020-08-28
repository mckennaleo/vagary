class CreateQuizResults < ActiveRecord::Migration[5.0]
  def change
    create_table :quiz_results do |t|
      t.string :result

      t.timestamps
    end
  end
end
