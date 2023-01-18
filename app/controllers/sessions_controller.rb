# app/controllers/sessions_controller.rb
class SessionsController < ApplicationController
  skip_before_action :authorize, only: :login
  
  def login
    account = Account.find_by(username: params[:username])
    if account&.authenticate(params[:password])
      session[:account_id] = account.id
      render json: account
    else
      render json: { errors: ["Invalid uername or password"] }, status: :unauthorized
    end
  end

  # def login
  #   user = User.find_by(username: params[:username])
  #   if user&.authenticate(params[:password])
  #     session[:user_id] = user.id
  #     render json: user
  #   else
  #     render json: { errors: ["Invalid uername or password"] }, status: :unauthorized
  #   end
  # end

  def destroy
    session.delete :account_id
    head :no_content
  end

end