class DropExperiences < ActiveRecord::Migration[5.0]
  def change
    drop_table :experiences, force: :

  end
end
