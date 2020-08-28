class AddCityToQuizzes < ActiveRecord::Migration[5.0]
  def change
    add_reference :quizzes, :city, foreign_key: true
  end
end
