# app/controllers/users_controller.rb
class UsersController < ApplicationController
  skip_before_action :authorize, only: :create

  def index
    render json: User.all, status: :ok
  end

  def create
    user = User.create!(user_params)
    if user.valid?
      session[:user_id] = user.id
      render json: user, status: :created
    end
  end

  def show
    render json: @current_user
  end

  def update
    user = User.find(params[:id])
    user.update!(user_params)
    render json: user, status: :accepted
  end

  def destroy
    user = User.find(params[:id])
    user.destroy
    head :no_content
  end

  private

  def user_params
    params.permit(:id, :username, :password, :password_confirmation, :first_name, :last_name, :profile_img)
  end

end
