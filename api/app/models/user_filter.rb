class UserFilter
  include ActiveModel::API
  include ActiveModel::Attributes

  attribute :name, :string
  attribute :email, :string
  attribute :role, :string

  def initialize(scope, params)
    super(params)

    @scope = scope
    @params = params
  end

  def call
    by_name!
    by_email!
    by_role!

    @scope
  end

  private

  def by_name!
    return if name.blank?

    @scope = @scope.where('name LIKE ?', "%#{name}%")
  end

  def by_email!
    return if email.blank?

    @scope = @scope.where('email LIKE ?', "%#{email}%")
  end

  def by_role!
    return if role.blank?

    @scope = @scope.where(role: role)
  end
end