class AddPlaylistToCities < ActiveRecord::Migration[5.0]
  def change
    add_column :cities, :playlist, :string
  end
end
