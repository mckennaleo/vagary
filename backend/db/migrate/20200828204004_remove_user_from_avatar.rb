class RemoveUserFromAvatar < ActiveRecord::Migration[5.0]
  def change
    remove_column :avatars, :user_id
  end
end
