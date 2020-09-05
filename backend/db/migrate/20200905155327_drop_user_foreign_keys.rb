class DropUserForeignKeys < ActiveRecord::Migration[5.0]
  def change
    remove_foreign_key :users, :avatars
    remove_foreign_key :badges, :users
  end
end
