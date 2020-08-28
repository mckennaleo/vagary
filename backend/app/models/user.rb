class User < ApplicationRecord

  belongs_to :avatar
  has_many :badges
  has_many :favourites
  has_many :quiz_results

end
