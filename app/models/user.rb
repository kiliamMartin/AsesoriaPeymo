class User < ApplicationRecord
  belongs_to :role

  
  validates :name, presence: true, confirmation:true
  validates :surname, presence: true, confirmation:true
  validates :password, presence: true, confirmation:true
  validates :email, presence: true, confirmation:true
  validates :phone, presence: true, confirmation:true
  VALID_EMAIL_REGEX= /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  VALID_PHONE_REGEX=/\A\d{9}\z/
  validates :phone, format: { with: VALID_PHONE_REGEX, message: "Formato de número no válido"}
  validates :email, format: { with: VALID_EMAIL_REGEX, message: "Formato de email no válido"}
end
