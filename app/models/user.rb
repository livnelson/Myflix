class User < ApplicationRecord
  has_one :my_lists
  has_one :user_avatar, dependent: :destroy
  has_secure_password
end
