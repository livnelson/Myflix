class Account < ApplicationRecord
  has_secure_password
  has_many :users
  has_one :my_lists
  has_one :user_avatar, dependent: :destroy
  validates :username, presence: true, uniqueness: true
end
