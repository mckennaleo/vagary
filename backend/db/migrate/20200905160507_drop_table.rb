class DropTable < ActiveRecord::Migration[5.0]
  def change
    drop_table :badges
    drop_table :avatars
  end
end
