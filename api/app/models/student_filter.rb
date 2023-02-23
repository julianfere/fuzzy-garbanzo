class StudentFilter
  include ActiveModel::API
  include ActiveModel::Attributes

  attribute :name, :string
  attribute :lastname, :string
  attribute :birthdate, :string
  attribute :address, :string
  attribute :school_grade, :string

  def initialize(scope, params)
    super(params)

    @scope = scope
    @params = params
  end

  def call
    by_name!
    by_lastname!
    by_birthdate!
    by_address!
    by_school_grade!

    @scope
  end

  private

  def by_name!
    return if name.blank?

    @scope = @scope.where('name LIKE ?', "%#{name}%")
  end

  def by_lastname!
    return if lastname.blank?

    @scope = @scope.where('lastname LIKE ?', "%#{lastname}%")
  end

  def by_birthdate!
    return if birthdate.blank?

    @scope = @scope.where('birthdate LIKE ?', "%#{birthdate}%")
  end

  def by_address!
    return if address.blank?

    @scope = @scope.where('address LIKE ?', "%#{address}%")
  end

  def by_school_grade!
    return if school_grade.blank?

    @scope = @scope.where('school_grade LIKE ?', "%#{school_grade}%")
  end
end