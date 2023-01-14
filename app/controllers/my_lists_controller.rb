# app/controllers/my_lists_controller.rb
class MyListsController < ApplicationController

  def index
    render json: MyList.all, status: :ok
  end

  def create
    mylist = MyList.create!(mylist_params)
    render json: mylist, status: :created
  end

  def update
    mylist = MyList.find(params[:id])
    mylist.update!(mylist_params)
  end

  private

  def mylist_params
    params.permit(:id, :name, :poster_path, :backdrop_path, :release_date, :overview, :vote_average, :vote_count, :user_id, :movie_id)
  end

end