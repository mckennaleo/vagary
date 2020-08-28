class Quiz < ApplicationRecord

  has_many :cities
  has_many :quiz_questions
  has_many :quiz_results

end
