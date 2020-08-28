class CreateAvatars < ActiveRecord::Migration[5.0]
  def change
    create_table :avatars do |t|
      t.string :name
      t.string :avatar
      t.string :sprite

      t.timestamps
    end
  end
end
