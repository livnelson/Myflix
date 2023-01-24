class ListsController < ApplicationController

  def index
    render json: List.all, status: :ok
  end

  def add_to_list
    list = List.find_or_create_by!(list_params)
    render json: list, status: :accepted
  end

  def update
    list = List.find(params[:id])
    List.update!(list_params)
    render json: list, status: :accepted
  end

  def delete_myfave
    myfave = List.find_by!(name: params[:name])
    myfave.destroy
    head :no_content
  end

  private

  def list_params
    params.permit(:id, :name, :poster_path, :backdrop_path, :release_date, :overview, :vote_average, :vote_count, :person_id)
  end

end