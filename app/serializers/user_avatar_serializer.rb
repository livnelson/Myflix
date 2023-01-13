class UserAvatarSerializer < ActiveModel::Serializer
  attributes :id, :imgUrl, :user_id, :avatar_id
end
