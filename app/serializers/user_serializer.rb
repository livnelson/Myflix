class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :last_name, :profile_img
  has_many :my_lists
  has_many :people
end