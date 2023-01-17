class MovieSerializer < ActiveModel::Serializer
  attributes :id, :name, :poster_path, :backdrop_path, :release_date, :overview, :vote_average, :vote_count
end
