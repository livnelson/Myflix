class User < ApplicationRecord
  has_secure_password
  # belongs_to :account
  has_many :my_lists
  has_one :user_avatar, dependent: :destroy
  validates :username, presence: true, uniqueness: true
end
