class Avatar < ApplicationRecord
  has_many :user_avatars
  # has_many :users, through: :user_avatars, dependent: :destroy
end
