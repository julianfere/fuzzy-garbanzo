class ApplicationController < ActionController::API
  include Pundit::Authorization
  rescue_from Pundit::NotAuthorizedError, with: :unauthorized
  rescue_from ActiveRecord::RecordNotFound, with: :not_found
  rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity
  # rescue_from StandardError, with: :server_error

  attr_reader :current_user

  def index
    render json: { message: 'Hello World' }
  end

  def authorize_request
    header = request.headers['Authorization']
    header = header.split(' ').last if header

    begin
      @decoded = JsonWebToken.decode(header)
      @current_user = User.find(@decoded[:user][:id])
    rescue ActiveRecord::RecordNotFound => e
      render json: ResponseBuilder.unauthorized(message: e.message), status: :unauthorized
    rescue JWT::DecodeError => e
      render json: ResponseBuilder.unauthorized(message: e.message), status: :unauthorized
    end
  end

  def render_json(payload, status)
    case status
    when :ok
      render json: ResponseBuilder.ok(data: payload), status: status
    when :created
      render json: ResponseBuilder.created(data: payload), status: status
    when :unauthorized
      render json: ResponseBuilder.unauthorized, status: status
    when :forbidden
      render json: ResponseBuilder.forbidden, status: status
    when :not_found
      render json: ResponseBuilder.not_found, status: status
    when :unprocessable_entity
      render json: ResponseBuilder.unprocessable_entity, status: status
    when :internal_server_error
      render json: ResponseBuilder.server_error, status: status
    end
  end

  private

  def unauthorized
    render json: ResponseBuilder.unauthorized, status: :unauthorized
  end

  def not_found
    render json: ResponseBuilder.not_found, status: :not_found
  end

  def unprocessable_entity
    render json: ResponseBuilder.unprocessable_entity, status: :unprocessable_entity
  end

  def server_error
    render json: ResponseBuilder.server_error, status: :internal_server_error
  end
end
