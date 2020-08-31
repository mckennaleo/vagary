class FixAvatarColumnName < ActiveRecord::Migration[5.0]
  def change
    rename_column :avatars, :avatar, :avatar_img
  end
end
