class Experience < ApplicationRecord

  belongs_to :city
  has_many :favourites

end
