class AccountUserSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :last_name, :profile_img, :user_id
end
