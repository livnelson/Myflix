class User < ApplicationRecord
  has_secure_password
  # belongs_to :account
  has_one :my_list
  has_one :user_avatar, dependent: :destroy
  validates :username, presence: true, uniqueness: true
end
