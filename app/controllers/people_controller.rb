class PeopleController < ApplicationController

  def index
    render json: Person.all, status: :ok
  end

  def create
    person = Person.create!(person_params)
    if person.valid?
      session[:person_id] = person.id
      render json: person, status: :created
    end
  end

  def show
    person = Person.find(params[:id])
    session[:person_id] = person.id
    render json: person, status: :accepted
  end

  def update
    person = Person.find(params[:id])
    person.update!(person_params)
    render json: person, status: :accepted
  end

  def destroy
    person = Person.find(params[:id])
    person.destroy
    head :no_content
  end

  private

  def person_params
    params.permit(:username, :first_name, :last_name, :profile_img, :user_id)
  end

end
