class MyListSerializer < ActiveModel::Serializer
  attributes :id, :name, :poster_path, :backdrop_path, :release_date, :overview, :vote_average, :vote_count, :user_id, :movie_id
end