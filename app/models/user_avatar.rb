class UserAvatar < ApplicationRecord
  belongs_to :user
  belongs_to :avatar
end
