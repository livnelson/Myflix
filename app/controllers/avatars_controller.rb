class AvatarsController < ApplicationController

  def index
    render json: Avatar.all, status: :ok
  end
  
end
