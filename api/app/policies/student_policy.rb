class StudentPolicy < ApplicationPolicy
  def index?
    true
  end

  def edit?
    update?
  end

  def new?
    create?
  end

  def create?
    @user.admin? || @user.colaborator?
  end

  def show?
    @user.admin? || @user.colaborator?
  end

  def update?
    @user.admin? || @user.colaborator? && is_student_creator?
  end

  def destroy?
    @user.admin?
  end

  private 

  def is_student_creator?
    @record.user == @user
  end
end
  