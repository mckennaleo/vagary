class ChangeCitiesColumn < ActiveRecord::Migration[5.0]
  def change
    remove_column :cities, :coordinates
    add_column :cities, :latitude, :float
    add_column :cities, :longitude, :float
  end
end
