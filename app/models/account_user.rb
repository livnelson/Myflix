class AccountUser < ApplicationRecord
  has_secure_password
  belongs_to :user
  has_one :user_avatar, dependent: :destroy
  validates :username, presence: true, uniqueness: true
end
