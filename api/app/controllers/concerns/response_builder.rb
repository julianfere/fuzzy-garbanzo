class ResponseBuilder
  RESPONSE_TEMPLATE = {
    status: nil,
    message: nil,
    data: nil
  }.freeze

  def self.ok(data: [], message: 'Successs')
    RESPONSE_TEMPLATE.merge(status: :ok, data: data, message: message)
  end

  def self.created(data: [], message: 'Created')
    RESPONSE_TEMPLATE.merge(status: :created, data: data, message: message)
  end

  def self.bad_request(data: [], message: 'Bad request')
    RESPONSE_TEMPLATE.merge(status: :bad_request, data: data, message: message)
  end

  def self.unauthorized(data: [], message: 'unauthorized')
    RESPONSE_TEMPLATE.merge(status: :unauthorized, data: data, message: message)
  end

  def self.forbidden(data: [], message: 'forbidden')
    RESPONSE_TEMPLATE.merge(status: :forbidden, data: data, message: message)
  end

  def self.not_found(data: [], message: 'Not found')
    RESPONSE_TEMPLATE.merge(status: :not_found, data: data, message: message)
  end

  def self.unprocessable_entity(data: [], message: 'Unprocessable entity')
    RESPONSE_TEMPLATE.merge(status: :unprocessable_entity, data: data, message: message)
  end

  def self.server_error(data: [], message: 'An error has occurred')
    RESPONSE_TEMPLATE.merge(status: :server_error, data: data, message: message)
  end
end