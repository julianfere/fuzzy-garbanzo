class Student < ApplicationRecord
  belongs_to :user

  enum :school_grade, { kinder: 0, elementary: 1, middle: 2, high: 3 }

  validates :name, presence: true
  validates :lastname, presence: true
  validates :birthdate, presence: true
  validates :school_grade, presence: true
  validates :active_student, presence: true
end