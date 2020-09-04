class User < ApplicationRecord
  #gives User model authentication methods via bcrypt
  has_secure_password 

  validates :password, :presence => true,
                       :confirmation => true,
                       :length => {:within => 6..40},
                       if: -> { new_record? || !password.nil? }



  belongs_to :avatar
  has_many :badges
  has_many :favourites
  has_many :quiz_results

  
  def self.authenticate_with_credentials(email, password)
    stripped = email.strip
    user = User.find_by_email(stripped.downcase)
    if user && user.authenticate(password)
      return user
    else
      return nil
    end
  end

end
