class ListSerializer < ActiveModel::Serializer
  attributes :id, :name, :poster_path, :backdrop_path, :release_date, :overview, :vote_average, :vote_count, :person_id, :movie_id
end
