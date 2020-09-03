class ChangePlaylists < ActiveRecord::Migration[5.0]
  def change
    add_reference :playlists, :city, foreign_key: true
  end
end
