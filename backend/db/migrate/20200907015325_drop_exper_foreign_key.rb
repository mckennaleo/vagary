class DropExperForeignKey < ActiveRecord::Migration[5.0]
  def change
    remove_column :favourites, :experience_id
  end
end
