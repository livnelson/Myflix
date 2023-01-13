class Avatar < ApplicationRecord
  has_many :user_avatars, dependent: :destroy
  has_many :users, through: :user_avatars
end
