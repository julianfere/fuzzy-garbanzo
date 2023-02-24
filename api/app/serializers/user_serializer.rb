class UserSerializer < ApplicationSerializer
  identifier :id

  field :name
  field :email
  field :role
  field :active
end