class User < ApplicationRecord
  has_secure_password
  has_one :my_lists
  has_many :users
  has_one :user_avatar, dependent: :destroy
  validates :username, presence: true, uniqueness: true
end
