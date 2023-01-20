class PersonSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :last_name, :profile_img, :user_id
  has_many :my_lists
end
