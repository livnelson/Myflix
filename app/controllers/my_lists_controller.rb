# app/controllers/my_lists_controller.rb
class MyListsController < ApplicationController

  def index
    render json: MyList.all, status: :ok
  end

  def add_to_list
    mylist = MyList.find_or_create_by!(mylist_params)
    render json: mylist, status: :accepted
  end

  def update
    mylist = MyList.find(params[:id])
    mylist.update!(mylist_params)
    render json: mylist, status: :accepted
  end

  def delete_myfave
    myfave = MyList.find_by!(name: params[:name])
    myfave.destroy
    head :no_content
  end

  private

  def mylist_params
    params.permit(:id, :name, :poster_path, :backdrop_path, :release_date, :overview, :vote_average, :vote_count, :user_id)
  end

end