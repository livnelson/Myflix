class AccountUsersController < ApplicationController

  def index
    render json: AccountUser.all, status: :ok
  end

end
