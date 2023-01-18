class AccountSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :last_name, :email, :profile_img
end
