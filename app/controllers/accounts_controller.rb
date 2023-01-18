class AccountsController < ApplicationController
  skip_before_action :authorize, only: :create

  def index
    render json: Account.all, status: :ok
  end

  def create
    account = Account.create!(user_params)
    if account.valid?
      session[:account_id] = account.id
      render json: account, status: :created
    end
  end

  def show
    render json: @current_account
  end

  def update
    account = Account.find(params[:id])
    account.update!(account_params)
    render json: account, status: :accepted
  end

  def destroy
    account = Account.find(params[:id])
    account.destroy
    head :no_content
  end

  private

  def account_params
    params.permit(:id, :username, :password, :password_confirmation)
  end
end
