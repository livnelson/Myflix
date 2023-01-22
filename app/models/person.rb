class Person < ApplicationRecord
  belongs_to :user
  has_many :lists
end
