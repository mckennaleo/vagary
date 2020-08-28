class CreateExperiences < ActiveRecord::Migration[5.0]
  def change
    create_table :experiences do |t|
      t.string :name
      t.string :url
      t.string :description
      t.string :coordinates

      t.timestamps
    end
  end
end
