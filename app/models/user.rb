class User < ApplicationRecord
  has_secure_password
  has_many :people
  has_many :my_lists
  has_one :user_avatar, dependent: :destroy
  validates :username, presence: true, uniqueness: true
end
