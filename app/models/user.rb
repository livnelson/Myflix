class User < ApplicationRecord
  has_many :my_lists
  has_many :user_avatars
  has_many :avatars, through: :user_avatars
  has_secure_password
end
