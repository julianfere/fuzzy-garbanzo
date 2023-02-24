class StudentSerializer < ApplicationSerializer
  identifier :id
  field :name
  field :lastname
  field :birthdate
  field :address
  field :school_grade
  field :active_student
end