class RemoveAvatarForeignKey < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :avatar_id
  end
end
