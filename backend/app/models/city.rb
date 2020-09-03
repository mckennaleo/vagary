class City < ApplicationRecord

  has_many :experiences
  has_one :playlist
end
