# app/controllers/sessions_controller.rb
class SessionsController < ApplicationController
  skip_before_action :authorize, only: :login
  # skip_before_action :authorize
  
  def login
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user
    else
      render json: { errors: ["Invalid uername or password"] }, status: :unauthorized
    end
  end

  def create
    user = User.create!(user_params)
    if user.valid?
      session[:user_id] = user.id
      render json: user, status: :created
    end
  end

  def destroy
    session.delete :user_id
    head :no_content
  end

  private

  def user_params
    params.permit(:id, :username, :password, :password_confirmation, :first_name, :last_name, :profile_img)
  end

end