class ChangeFavourites < ActiveRecord::Migration[5.0]
  def change
    add_column :favourites, :city, :string
    add_column :favourites, :landmark, :string
    add_column :favourites, :description, :string
  end
end
