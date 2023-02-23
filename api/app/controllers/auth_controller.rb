class AuthController < ApplicationController
  def login
    @user = User.find_by_email(login_params[:email])

    if @user&.authenticate(login_params[:password])
      token = JsonWebToken.encode(user: user_to_encode)
      time = Time.now + 12.hours.to_i

      render json: { token: token, exp: time.strftime("%m-%d-%Y %H:%M") }, status: :ok
    else
      render json: { error: 'unauthorized' }, status: :unauthorized
    end
  end

  private 

  def user_to_encode
    { name: @user.name, email: @user.email, id: @user.id, role: @user.role }
  end
  
  def login_params
    params.permit(:email, :password)
  end
end