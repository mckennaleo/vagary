class AddCityToExperiences < ActiveRecord::Migration[5.0]
  def change
    add_reference :experiences, :city, foreign_key: true
  end
end
