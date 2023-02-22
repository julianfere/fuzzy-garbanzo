class AuthController < ApplicationController
  def login
    @user = User.find_by_email(login_params[:email])

    if @user&.authenticate(login_params[:password])
      token = JsonWebToken.encode(user: {name: @user.name, email: @user.email})
      time = Time.now + 12.hours.to_i

      render json: { token: token, exp: time.strftime("%m-%d-%Y %H:%M") }, status: :ok
    else
      render json: { error: 'unauthorized' }, status: :unauthorized
    end
  end

  private 
  
  def login_params
    params.require(:auth).permit(:email, :password)
  end
end