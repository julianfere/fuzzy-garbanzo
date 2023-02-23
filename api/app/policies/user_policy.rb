class UserPolicy < ApplicationPolicy
  
  def initialize(user, record)
    @user = user
    @record = record
  end

  def index?
    true
  end

  def show?
    @user.admin? || @user == @record
  end

  def create?
    @user.admin?
  end

  def toggle?
    @user.admin?
  end

  def new?
    create?
  end

  def update?
    @user.admin? || @user == @record
  end

  def edit?
    update?
  end

  def destroy?
    @user.admin?
  end

  class Scope
    def initialize(user, scope)
      @user = user
      @scope = scope
    end

    def resolve
      if @user.admin?
        @scope.all
      else
        @scope.where(active: true)
      end
    end

    attr_reader :user, :scope
  end
end