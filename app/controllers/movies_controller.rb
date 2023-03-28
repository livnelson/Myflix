class MoviesController < ApplicationController

  def index
    render json: Movie.all, status: :ok
  end

  def create
    movie = Movie.create!(movie_params)
    render json: movie, status: :created
  end

  def update
    movie = Movie.find(params[:id])
    movie.update!(movie_params)
    render json: user, status: :accepted
  end

  def add_movie
    movie = Movie.find_or_create_by!(movie_params)
    render json: movie, status: :accepted
  end

  private

  def movie_params
    params.permit(:id, :name, :poster_path, :backdrop_path, :release_date, :overview, :vote_average, :vote_count, :movie_id)
  end

end
