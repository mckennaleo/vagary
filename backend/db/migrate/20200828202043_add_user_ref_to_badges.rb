class AddUserRefToBadges < ActiveRecord::Migration[5.0]
  def change
    add_reference :badges, :user, foreign_key: true
  end
end
