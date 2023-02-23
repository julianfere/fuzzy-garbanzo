class User < ApplicationRecord
  has_secure_password
  has_many :students, dependent: :destroy

  enum role: { colaborator: 0, admin: 1 }

  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, presence: true, length: { minimum: 6 }, if: -> { new_record? || password.present? }
end