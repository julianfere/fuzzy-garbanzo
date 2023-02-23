class UsersController < ApplicationController
  before_action :set_user, only: %i[show update destroy toggle]
  before_action :authorize_request

  def index
    @users = UserFilter.new(policy_scope(User), filter_params).call
    authorize @users

    render json: @users.map { |user| user.as_json(except: [:password_digest]) }
  end

  def show
    authorize @user
    render json: @user
  end

  def toggle
    authorize @user

    @user.toggle(:active)

    if @user.save
      render json: @user, status: :ok
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def create
    @user = User.new(user_params)
    authorize @user

    if @user.save
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def update
    authorize @user
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def destroy
    authorize @user
    @user.destroy
  end

  private

    def set_user
      @user = User.find(params[:id]) if params[:id] 
      @user = User.find(params[:user_id]) if params[:user_id]
    end

    def user_params
      params.require(:user).permit(:name, :email, :password)
    end

    def filter_params
      params.permit(:name, :email, :role)
    end
end