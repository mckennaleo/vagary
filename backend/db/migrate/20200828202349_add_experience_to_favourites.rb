class AddExperienceToFavourites < ActiveRecord::Migration[5.0]
  def change
    add_reference :favourites, :experience, foreign_key: true
  end
end
