class Account < ApplicationRecord
  has_secure_password
  # has_many :users, dependent: :destroy
  validates :username, presence: true, uniqueness: true
end
