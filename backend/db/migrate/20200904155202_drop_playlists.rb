class DropPlaylists < ActiveRecord::Migration[5.0]
  def change
    drop_table :playlists
  end
end
