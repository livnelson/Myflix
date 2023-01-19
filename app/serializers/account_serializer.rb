class AccountSerializer < ActiveModel::Serializer
  attributes :id, :username
  # has_many :users
end
