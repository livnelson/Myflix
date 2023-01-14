# app/controllers/sessions_controller.rb
class SessionsController < ApplicationController
  skip_before_action :authorize, only: :login
  
  def login
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user
    else
      render json: { errors: ["Invalid uername or password"] }, status: :unauthorized
    end
  end

  def destroy
    session.delete :user_id
    head :no_content
  end

  private

end